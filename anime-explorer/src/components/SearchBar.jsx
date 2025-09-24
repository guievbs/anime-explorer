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
    </div>
  );
}
