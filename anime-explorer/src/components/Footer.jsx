import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 2,
        textAlign: "center",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Anime Explorer — Guievbs
      </Typography>
    </Box>
  );
}
