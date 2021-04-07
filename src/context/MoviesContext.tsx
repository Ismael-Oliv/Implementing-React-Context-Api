import {
  createContext,
  useState,
  useContext,
  HTMLAttributes,
  useEffect,
} from "react";
import { api } from "../services/api";
import { useGenre, GenreProps } from "../context/GenresContext";

interface MoviesProviderType extends HTMLAttributes<Element> {}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MovieContextProps {
  movies: MovieProps[];
  setMovies: (genre: MovieProps[]) => void;
}

const MoviesContext = createContext<MovieContextProps>({} as MovieContextProps);

export default function MoviesProvider({ children }: MoviesProviderType) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const { selectedGenreId, setSelectedGenre } = useGenre();

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api.get<GenreProps>(`genres/${selectedGenreId}`).then((response) => {
      setSelectedGenre(response.data);
    });
  }, [selectedGenreId]);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies(): MovieContextProps {
  const context = useContext(MoviesContext);
  if (!context)
    throw new Error("useMovies must be used within a CountProvider");
  const { movies, setMovies } = context;

  return { movies, setMovies };
}
