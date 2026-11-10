import { reviews } from '../data'

export default function MemberReviews() {
  return (
    <div className="page">
      <h2>Member Reviews & Feedback</h2>
      {reviews.map(item => (
        <div className="pet-card" key={item.id}>
          <h4>{item.name}</h4>
          <p>{"⭐".repeat(item.rating)}</p>
          <p>{item.comment}</p>
        </div>
      ))}
    </div>
  )
}
