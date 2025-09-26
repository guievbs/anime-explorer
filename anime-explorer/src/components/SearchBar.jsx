import { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../contexts/AppProvider";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const { dispatch } = useContext(AppContext);

  const handleSearch = () => {
    if (query.trim() === "") {
      dispatch({ type: "SET_ERROR", payload: "Campo obrigatório" });
      return;
    }
    dispatch({ type: "SET_QUERY", payload: query });
  };

  const handleRandom = async () => {
    dispatch({ type: "SET_ERROR", payload: null });

    try {
      const res = await fetch("https://api.jikan.moe/v4/random/anime?sfw=true");
      if (!res.ok) throw new Error("Erro na API");
      const data = await res.json();
      dispatch({ type: "SET_RANDOM", payload: data.data });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: "Não foi possível buscar um anime aleatório",
      });
    }
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
      <TextField
        variant="outlined"
        size="small"
        label="Buscar anime"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Buscar
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleRandom}>
        Aleatório
      </Button>
    </div>
  );
}
