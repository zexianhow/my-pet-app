import { reviews } from "../data.js";
export default function Home({ petList }) {
  return (
    <div style={{ padding: "24px" }}>
      <h1>Welcome to Pet Heaven</h1>
      <p>We help homeless dogs and cats find loving homes.</p>
      <div style={{ background: "#f7f7f7", padding: "24px", borderRadius: "16px", margin: "24px 0" }}>
        <h2>What we do</h2>
        <p>Browse pets, apply for adoption or surrender a pet to our centre.</p>
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
