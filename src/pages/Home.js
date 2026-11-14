import { reviews } from "../data.js";
import { Link } from 'react-router-dom';

export default function Home({ petList }) {
  return (
    <div style={{ padding: "24px" }}>
      <h1>Welcome to Pet Heaven</h1>
      <p>We help homeless dogs and cats find loving homes.</p>
      <div style={{
        backgroundImage: "url(/bg.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "400px",
        padding: "60px 24px",
        color: "white",
        borderRadius: "16px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.2)",
          zIndex: 2
        }}></div>
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", fontSize: "30px" }}>
          <h2>What we do</h2>
          <p>Browse pets, apply for adoption or surrender a pet to our centre.</p>
        </div>
      </div>

      <div style={{ margin: "40px 0" }}>
        <h2>Meet Our Available Pets</h2>
        <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))" }}>
          {petList.map((pet) => (
            <div key={pet.id} style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "16px" }}>
              <img src={pet.img} alt={pet.name} style={{ width: "100%", height: "200px", objectFit: "contain", backgroundColor: "#f8f8f8", borderRadius: "8px" }} />
              <h3>{pet.name}</h3>
              <p>Breed: {pet.breed}</p>
              <p>Age: {pet.age}</p>
              <p>{pet.desc}</p>
              <p><strong>Status: {pet.status}</strong></p>
              <div style={{textAlign:"center", marginTop:"30px"}}>
              <Link to="/pets">
                <button style={{
                  padding: "10px 24px",
                  backgroundColor: "#227777",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "16px",
                  cursor: "pointer"
                }}>
                  View All Pets
                </button>
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Member Reviews</h2>
        <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))" }}>
          {reviews.map((review, index) => (
            <div key={index} style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "18px" }}>
              <img src={review.avatar} alt={review.name} style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover" }} />
              <h4 style={{ margin: "10px 0 5px" }}>{review.name}</h4>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
