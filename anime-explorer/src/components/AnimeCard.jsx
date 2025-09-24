export function AnimeCard({ anime }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "0.5rem" }}>
      <img src={anime.images.jpg.image_url} alt={anime.title} style={{ width: "100%", borderRadius: "4px" }} />
      <h3 style={{ fontSize: "1rem" }}>{anime.title}</h3>
      <p>Nota: {anime.score || "N/A"}</p>
    </div>
  );
}
