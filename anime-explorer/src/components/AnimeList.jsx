import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppProvider";
import { AnimeCard } from "./AnimeCard";
import Grid from "@mui/material/Grid";

export function AnimeList() {
  const { state, dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!state.query) return;
    setLoading(true);

    fetch(`https://api.jikan.moe/v4/anime?q=${state.query}&limit=12`)
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
    <Grid container spacing={3}>
      {state.results.map((anime) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={anime.mal_id}>
          <AnimeCard anime={anime} />
        </Grid>
      ))}
    </Grid>
  );
}
