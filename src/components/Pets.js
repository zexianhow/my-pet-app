import goldenRetriver from "../goldenRetriver.jpg";
import corgi from "../corgi.jpg";
import britishShortHair from "../britishShortHair.jpg";
import MaineCoon from "../MaineCoon.jpg";
import { Link } from "react-router-dom";

const pets = [
  {
    name: "Max",
    breed: "Golden Retriever",
    age: 2,
    desc: "Friendly and loves kids",
    status: "Available",
    image: goldenRetriver
  },
  {
    name: "Bella",
    breed: "Corgi",
    age: 1,
    desc: "Energetic, likes walks",
    status: "Available",
    image: corgi
  },
  {
    name: "Luna",
    breed: "British Shorthair",
    age: 3,
    desc: "Calm and quiet",
    status: "Available",
    image: britishShortHair
  },
  {
    name: "Milo",
    breed: "Maine Coon",
    age: 2,
    desc: "Playful, loves toys",
    status: "Available",
    image: MaineCoon
  }
];

export default function Pets() {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "24px",
    padding: "20px"
  };

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "16px",
    overflow: "hidden"
  };

  const imgStyle = {
    width: "100%",
    height: "220px",
    objectFit: "contain", // full image, no cropping
    backgroundColor: "#f8f8f8"
  };

  return (
    <div>
      <h2 style={{padding:"20px"}}>Meet Our Available Pets</h2>
      <div style={gridStyle}>
        {pets.map((pet) => (
          <div key={pet.name} style={cardStyle}>
            <img src={pet.image} alt={pet.name} style={imgStyle} />
            <h3>{pet.name}</h3>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <p>{pet.desc}</p>
            <p><strong>Status: Available</strong></p>
            {/* New button go to adopt page */}
            <Link to="/adopt">
              <button style={{
                padding:"8px 16px",
                backgroundColor:"#2196f3",
                color:"white",
                border:"none",
                borderRadius:"4px",
                cursor:"pointer"
              }}>
                Adopt This Pet
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
