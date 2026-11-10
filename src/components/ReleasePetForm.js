import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sampleReleaseForm } from "../data.js";

export default function ReleasePet({ petList, setPetList }) {
  const [form, setForm] = useState(sampleReleaseForm);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update selected pet status to Released
    const updatedPets = petList.map((pet) => {
      if (pet.name === form.selectedPet) {
        return { ...pet, status: "Released" };
      }
      return pet;
    });

    setPetList(updatedPets);

    alert("Pet release form submitted successfully! Pet status updated to Released");
    navigate("/");
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>Release / Surrender a Pet</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          width: "100%",
          margin: "0 auto",
          background: "#f7f7f7",
          padding: "24px",
          borderRadius: "16px",
          boxSizing: "border-box"
        }}
      >
        {/* Select Pet Dropdown */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Choose Pet to Release</label>
          <select
            name="selectedPet"
            value={form.selectedPet}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "8px"
            }}
          >
            <option value="">-- Please select a pet --</option>
            {petList.map((pet) => (
              <option key={pet.id} value={pet.name}>
                {pet.name} ({pet.breed}) - {pet.status}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Pet Type</label>
          <select
            name="petType"
            value={form.petType}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "8px"
            }}
          >
            <option value="">-- Select --</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Pet Age</label>
          <input
            type="text"
            name="age"
            value={form.age}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "8px"
            }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Owner Contact</label>
          <input
            type="text"
            name="ownerContact"
            value={form.ownerContact}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "8px"
            }}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>Reason for Release</label>
          <textarea
            name="reasonForRelease"
            value={form.reasonForRelease}
            onChange={handleChange}
            rows="4"
            style={{
              width: "100%",
              padding: "10px",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "8px"
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#208080",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}
