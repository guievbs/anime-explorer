import { useContext } from "react";
import { AppContext } from "../contexts/AppProvider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export function FavoritesPanel() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div style={{ padding: "1rem" }}>
      <Typography variant="h6">Meus Favoritos</Typography>
      <Divider sx={{ my: 1 }} />

      {state.favorites.length === 0 ? (
        <Typography color="text.secondary">
          Nenhum favorito adicionado ainda.
        </Typography>
      ) : (
        <>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => dispatch({ type: "CLEAR_FAVORITES" })}
            style={{ marginBottom: "1rem" }}
          >
            Limpar todos
          </Button>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "1fr",
            }}
          >
            {state.favorites.map((anime) => (
              <div
                key={anime.mal_id}
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "0.5rem",
                }}
              >
                <img
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  style={{ width: "60px", borderRadius: "4px" }}
                />
                <div style={{ flexGrow: 1 }}>
                  <Typography variant="body2" noWrap>
                    {anime.title}
                  </Typography>
                </div>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FAVORITE", payload: anime.mal_id })
                  }
                >
                  X
                </Button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
