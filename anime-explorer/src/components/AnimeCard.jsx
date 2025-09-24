import { useContext } from "react";
import { AppContext } from "../contexts/AppProvider";
import Button from "@mui/material/Button";

export function AnimeCard({ anime }) {
  const { state, dispatch } = useContext(AppContext);
  const isFavorite = state.favorites.some((a) => a.mal_id === anime.mal_id);

  const toggleFavorite = () => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: anime });
  };

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "0.5rem" }}>
      <img
        src={anime.images.jpg.image_url}
        alt={anime.title}
        style={{ width: "100%", borderRadius: "4px" }}
      />
      <h3 style={{ fontSize: "1rem" }}>{anime.title}</h3>
      <p>Nota: {anime.score || "N/A"}</p>
      <Button
        variant={isFavorite ? "outlined" : "contained"}
        color={isFavorite ? "error" : "primary"}
        onClick={toggleFavorite}
        size="small"
      >
        {isFavorite ? "Remover" : "Favoritar"}
      </Button>
    </div>
  );
}
