import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppProvider";
import { AnimeCard } from "./AnimeCard";

export function AnimeList() {
  const { state, dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!state.query) return;
    setLoading(true);

    fetch(`https://api.jikan.moe/v4/anime?q=${state.query}&limit=6`)
      .then((r) => r.json())
      .then((data) => {
        dispatch({ type: "SET_RESULTS", payload: data.data || [] });
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR", payload: "Erro ao buscar API" });
      })
      .finally(() => setLoading(false));
  }, [state.query, dispatch]);

  if (loading) return <p>Carregando...</p>;
  if (!state.results.length) return <p>Nenhum anime encontrado</p>;

  return (
    <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))" }}>
      {state.results.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
}
