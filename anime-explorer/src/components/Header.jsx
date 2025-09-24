import { useState } from "react";
import Button from "@mui/material/Button";
import { FavoritesPanel } from "./FavoritesPanel";

export function Header() {
  const [showFav, setShowFav] = useState(false);

  return (
    <header style={{ marginBottom: "1rem" }}>
      <h1 style={{ margin: 0 }}>Anime Explorer</h1>
      <Button variant="outlined" onClick={() => setShowFav(!showFav)} size="small">
        {showFav ? "Fechar Favoritos" : "Ver Favoritos"}
      </Button>
      {showFav && <FavoritesPanel />}
    </header>
  );
}
