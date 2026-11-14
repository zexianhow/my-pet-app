import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form captured (hardcoded, no backend): \n" + JSON.stringify(form, null, 2));
    navigate("/");
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>{isLogin ? "Member Login" : "Sign Up New Member"}</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "600px", width: "100%", margin: "0 auto", background: "#f7f7f7", padding: "24px", borderRadius: "16px", boxSizing: "border-box" }}>
        {!isLogin && (
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>Full Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} style={{ width: "100%", padding: "10px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "8px" }} />
          </div>
        )}

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Email Address</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} style={{ width: "100%", padding: "10px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "8px" }} />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} style={{ width: "100%", padding: "10px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "8px" }} />
        </div>

        <button type="submit" style={{ width: "100%", padding: "12px", background: "#208080", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer" }}>Submit Form</button>
      </form>

      <div style={{ textAlign: "center", marginTop: "16px" }}>
        <button onClick={() => setIsLogin(!isLogin)}>
          Switch to {isLogin ? "Sign Up" : "Login"}
        </button>
      </div>
    </div>
  );
}
