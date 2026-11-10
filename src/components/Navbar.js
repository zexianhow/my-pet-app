import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    backgroundColor: "#2c7d7d",
    padding: "16px 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const linkContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: "500"
  };

  return (
    <nav style={navStyle}>
      <h2 style={{ color: "white", margin: 0 }}>Pet Heaven</h2>
      <div style={linkContainerStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/pets" style={linkStyle}>Pets</Link>
        <Link to="/about" style={linkStyle}>About & Mission</Link>
        <Link to="/caretips" style={linkStyle}>Pet Care Tips</Link>
        <Link to="/adopt" style={linkStyle}>Adopt a Pet</Link>
        <Link to="/release" style={linkStyle}>Release a Pet</Link>
        <Link to="/login" style={linkStyle}>Login / Sign Up</Link>
      </div>
    </nav>
  );
}
