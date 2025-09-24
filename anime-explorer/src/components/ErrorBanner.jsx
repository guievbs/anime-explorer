export function ErrorBanner({ message }) {
  return (
    <div style={{ background: "#f44336", color: "#fff", padding: "0.5rem", borderRadius: "4px" }}>
      {message}
    </div>
  );
}
