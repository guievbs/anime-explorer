import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppProvider";
import { AnimeCard } from "./AnimeCard";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { filterResults } from "./api";

export function AnimeList() {
  const { state, dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!state.query) return;
    setLoading(true);

    fetch(`https://api.jikan.moe/v4/anime?q=${state.query}&limit=20&sfw=true`)
      .then((r) => r.json())
      .then((data) => {
        const filtered = filterResults(data.data || [], state.query);
        dispatch({ type: "SET_RESULTS", payload: filtered });
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
      {state.results.map((anime, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={anime.mal_id}
          sx={{ display: "flex" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            style={{ flexGrow: 1, display: "flex" }}
          >
            <AnimeCard anime={anime} />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}
