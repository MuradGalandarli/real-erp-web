export default function Navbar() {
  return (
    <div style={{
      height: "60px",
      background: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px",
      borderBottom: "1px solid #ddd"
    }}>
      <h3>Admin Panel</h3>
      <div>👤 Admin</div>
    </div>
  );
}