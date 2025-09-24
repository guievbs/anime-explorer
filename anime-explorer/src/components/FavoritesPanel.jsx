import { useContext } from "react";
import { AppContext } from "../contexts/AppProvider";

export function FavoritesPanel() {
  const { state } = useContext(AppContext);

  if (!state.favorites.length) {
    return <p>Nenhum favorito adicionado ainda.</p>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Meus Favoritos</h2>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        }}
      >
        {state.favorites.map((anime) => (
          <div
            key={anime.mal_id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "0.5rem",
            }}
          >
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              style={{ width: "100%", borderRadius: "4px" }}
            />
            <h3 style={{ fontSize: "1rem" }}>{anime.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
