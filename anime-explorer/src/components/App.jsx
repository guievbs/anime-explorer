import { Header } from "./Header";
import { SearchBar } from "./SearchBar";
import { AnimeList } from "./AnimeList";
import { ErrorBanner } from "./ErrorBanner";
import { useContext } from "react";
import { AppContext } from "../contexts/AppProvider";

export function App() {
  const { state } = useContext(AppContext);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      <Header />
      <SearchBar />
      {state.error && <ErrorBanner message={state.error} />}
      <AnimeList />
    </div>
  );
}
