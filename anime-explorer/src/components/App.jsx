import { Header } from "./Header";
import { SearchBar } from "./SearchBar";
import { AnimeList } from "./AnimeList";
import { ErrorBanner } from "./ErrorBanner";
import { Footer } from "./Footer"; // <- import
import { useContext } from "react";
import { AppContext } from "../contexts/AppProvider";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { motion } from "framer-motion";

export function App() {
  const { state } = useContext(AppContext);

  const theme = createTheme({
    palette: {
      mode: state.darkMode ? "dark" : "light",
      primary: { main: "#1976d2" },
      secondary: { main: "#9c27b0" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 5,
            mb: 3,
            gap: 3,
            minHeight: "70vh", // empurra o rodapé para baixo
          }}
        >
          <SearchBar />
          {state.error && <ErrorBanner message={state.error} />}

          {!state.query ? (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: "center", marginTop: "3rem" }}
            >
              <Typography variant="h3" gutterBottom>
                Bem-vindo ao Anime Explorer 🎌
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Busque por seus animes favoritos, veja detalhes e monte sua
                lista personalizada!
              </Typography>
            </motion.div>
          ) : (
            <AnimeList />
          )}
        </Box>
      </Container>
      <Footer /> 
    </ThemeProvider>
  );
}
