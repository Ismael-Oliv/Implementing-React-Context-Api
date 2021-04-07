import {
  createContext,
  useState,
  useContext,
  HTMLAttributes,
  useEffect,
} from "react";

import { api } from "../services/api";

interface GenresProviderType extends HTMLAttributes<Element> {}

export interface GenreProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface GenreContextProps {
  genres: GenreProps[];
  selectedGenreId: number;
  selectedGenre: GenreProps;
  setSelectedGenre: (genre: GenreProps) => void;

  setGenres: (genre: GenreProps[]) => void;
  setSelectedGenreId: (id: number) => void;
}

const GenresContext = createContext<GenreContextProps>({} as GenreContextProps);

export default function GenresProvider({ children }: GenresProviderType) {
  const [genres, setGenres] = useState<GenreProps[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreProps>(
    {} as GenreProps
  );

  useEffect(() => {
    api.get<GenreProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <GenresContext.Provider
      value={{
        genres,
        setGenres,
        selectedGenreId,
        setSelectedGenreId,
        selectedGenre,
        setSelectedGenre,
      }}
    >
      {children}
    </GenresContext.Provider>
  );
}

export function useGenre(): GenreContextProps {
  const context = useContext(GenresContext);

  if (!context) throw new Error("useGenre must be used within a CountProvider");

  const {
    genres,
    setGenres,
    selectedGenreId,
    setSelectedGenreId,
    selectedGenre,
    setSelectedGenre,
  } = context;

  return {
    genres,
    setGenres,
    selectedGenreId,
    setSelectedGenreId,
    selectedGenre,
    setSelectedGenre,
  };
}
