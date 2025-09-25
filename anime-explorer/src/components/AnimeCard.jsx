import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppProvider";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { AnimeModal } from "./AnimeModal";

export function AnimeCard({ anime }) {
  const { state, dispatch } = useContext(AppContext);
  const isFavorite = state.favorites.some((a) => a.mal_id === anime.mal_id);

  const [open, setOpen] = useState(false);

  const toggleFavorite = () => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: anime });
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <CardMedia
          component="img"
          height="280"
          image={anime.images.jpg.image_url}
          alt={anime.title}
          onClick={() => setOpen(true)}
          sx={{ cursor: "pointer" }}
        />

        <CardContent
          onClick={() => setOpen(true)}
          sx={{
            flexGrow: 1,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              minHeight: "3rem",
            }}
          >
            {anime.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Nota: {anime.score || "N/A"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tipo: {anime.type || "?"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Temporada: {anime.season ? `${anime.season} ${anime.year}` : "N/A"}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            variant={isFavorite ? "outlined" : "contained"}
            color={isFavorite ? "error" : "primary"}
            size="small"
            onClick={toggleFavorite}
          >
            {isFavorite ? "Remover" : "Favoritar"}
          </Button>
        </CardActions>
      </Card>

      <AnimeModal
        open={open}
        onClose={() => setOpen(false)}
        animeId={anime.mal_id}
      />
    </>
  );
}
