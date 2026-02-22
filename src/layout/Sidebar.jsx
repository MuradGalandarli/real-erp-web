import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{
      width: "220px",
      background: "#1e293b",
      color: "white",
      padding: "20px"
    }}>
      <h2>ERP</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/" style={linkStyle}>Dashboard</Link></li>
        <li><Link to="/category" style={linkStyle}>Category</Link></li>
        <li><Link to="/users" style={linkStyle}>Users</Link></li>
        <li><Link to="/warehouse" style={linkStyle}>Warehouse</Link></li>
      </ul>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  display: "block",
  padding: "10px 0"
};