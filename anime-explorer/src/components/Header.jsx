import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import { FavoritesPanel } from "./FavoritesPanel";
import { AppContext } from "../contexts/AppProvider";

export function Header() {
  const [showFav, setShowFav] = useState(false);
  const { state } = useContext(AppContext);

  const count = state.favorites.length;

  return (
    <header style={{ marginBottom: "1rem" }}>
      <h1 style={{ margin: 0 }}>Anime Explorer</h1>
      <Button
        variant="outlined"
        onClick={() => setShowFav(!showFav)}
        size="small"
        style={{ marginTop: "0.5rem" }}
      >
        {showFav ? "Fechar Favoritos" : `Ver Favoritos (${count})`}
      </Button>
      {showFav && <FavoritesPanel />}
    </header>
  );
}
