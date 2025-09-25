import { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import HomeIcon from "@mui/icons-material/Home";
import { FavoritesPanel } from "./FavoritesPanel";
import { AppContext } from "../contexts/AppProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Botão Home */}
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => dispatch({ type: "RESET_SEARCH" })}
          >
            <HomeIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Anime Explorer
          </Typography>

          <div>
            {/* Toggle Dark Mode */}
            <IconButton
              sx={{ mr: 2 }}
              color="inherit"
              onClick={() => dispatch({ type: "TOGGLE_THEME" })}
            >
              {state.darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            {/* Drawer Favoritos */}
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <Badge badgeContent={state.favorites.length} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: {
              xs: "100%",
              sm: "100%",
              md: "70%",
              lg: "50%",
            },
          },
        }}
      >
        <FavoritesPanel />
      </Drawer>
    </>
  );
}
