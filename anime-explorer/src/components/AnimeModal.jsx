import { useEffect, useState, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AppContext } from "../contexts/AppProvider";

export function AnimeModal({ open, onClose, animeId }) {
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const isFavorite = state.favorites.some((a) => a.mal_id === animeId);

  useEffect(() => {
    if (!animeId) return;

    setLoading(true);
    fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`)
      .then((res) => res.json())
      .then((data) => setAnime(data.data))
      .catch(() => setAnime(null))
      .finally(() => setLoading(false));
  }, [animeId]);

  const toggleFavorite = () => {
    if (anime) {
      dispatch({ type: "TOGGLE_FAVORITE", payload: anime });
    }
  };

  if (!animeId) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{anime?.title || "Detalhes do Anime"}</DialogTitle>
      <DialogContent dividers>
        {loading && <Typography>Carregando...</Typography>}

        {!loading && !anime && (
          <Typography color="text.secondary">
            Não há informações detalhadas disponíveis para este anime.
          </Typography>
        )}

        {!loading && anime && (
          <>
            <img
              src={anime.images?.jpg?.large_image_url}
              alt={anime.title}
              style={{
                width: "200px",
                float: "left",
                marginRight: "1rem",
                borderRadius: "8px",
              }}
            />

            <DialogContentText>
              <strong>Nota:</strong> {anime.score || " "} <br />
              <strong>Tipo:</strong> {anime.type || " "} <br />
              <strong>Temporada:</strong>{" "}
              {anime.season ? `${anime.season} ${anime.year}` : " "} <br />
              <strong>Episódios:</strong> {anime.episodes || "?"} <br />
              <strong>Estúdio:</strong>{" "}
              {anime.studios?.map((s) => s.name).join(", ") || " "}
            </DialogContentText>

            <Typography
              variant="body1"
              sx={{ marginTop: "1rem", clear: "both" }}
            >
              {anime.synopsis || "Sinopse não disponível para este anime."}
            </Typography>
          </>
        )}
      </DialogContent>

      <DialogActions>
        {anime && (
          <Button
            variant={isFavorite ? "outlined" : "contained"}
            color={isFavorite ? "error" : "primary"}
            onClick={toggleFavorite}
          >
            {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
          </Button>
        )}
        <Button onClick={onClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
}
