import { Link } from "react-router-dom";


export default function Pets({ petList }) {
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
        {petList.map((pet) => (
          <div key={pet.name} style={cardStyle}>
            <img src={pet.img} alt={pet.name} style={imgStyle} />
            <h3>{pet.name}</h3>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <p>{pet.desc}</p>
            <p><strong>Status: {pet.status}</strong></p>
            {pet.status === "Available" && (
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
