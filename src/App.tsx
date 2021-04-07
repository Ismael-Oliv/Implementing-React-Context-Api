import GenreProvider from "./context/GenresContext";
import MovieProvider from "./context/MoviesContext";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";

export function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <GenreProvider>
        <SideBar />

        <MovieProvider>
          <Content />
        </MovieProvider>
      </GenreProvider>
    </div>
  );
}
