import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sampleAdoptForm } from "../data.js";

export default function Adopt({ petList }) {
  const [form, setForm] = useState(sampleAdoptForm);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Adoption application submitted successfully!");
    navigate("/");
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>Adopt a Pet</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "600px", width: "100%", margin: "0 auto", background: "#f7f7f7", padding: "24px", borderRadius: "16px", boxSizing: "border-box" }}>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Choose Pet</label>
          <select name="selectedPet" value={form.selectedPet} onChange={handleChange} style={{ width: "100%", padding: "10px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "8px" }}>
            <option value="">-- Please select a pet --</option>
            {petList.map((pet) => (
              <option key={pet.id} value={pet.name}>{pet.name} ({pet.breed}) - {pet.status}</option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Full Name</label>
          <input type="text" name="fullName" value={form.fullName} onChange={handleChange} style={{ width: "100%", padding: "10px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "8px" }} />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} style={{ width: "100%", padding: "10px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "8px" }} />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Phone</label>
          <input type="text" name="phone" value={form.phone} onChange={handleChange} style={{ width: "100%", padding: "10px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "8px" }} />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Home Type</label>
          <select name="homeType" value={form.homeType} onChange={handleChange} style={{ width: "100%", padding: "10px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "8px" }}>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
          </select>
        </div>
        <div style={{ marginBottom: "24px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Reason for Adoption</label>
          <textarea name="reason" value={form.reason} onChange={handleChange} rows="4" style={{ width: "100%", padding: "10px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "8px" }} />
        </div>
        <button type="submit" style={{ width: "100%", padding: "12px", background: "#208080", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer" }}>Submit Application</button>
      </form>
    </div>
  );
}
