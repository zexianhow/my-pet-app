import videoThumb from './video.jpg';

export default function PetCareTips() {
  return (
    <div className="page">
      <h2>Pet Care Tips & Guides</h2>
      <div className="pet-card">
        <h3>For Dogs</h3>
        <ul>
          <li>Daily exercise and walks</li>
          <li>Consistent balanced diet</li>
          <li>Keep vaccination schedule up to date</li>
        </ul>
      </div>
      <div className="pet-card">
        <h3>For Cats</h3>
        <ul>
          <li>Clean litter box daily</li>
          <li>Provide scratching posts</li>
          <li>Annual vet health check-up</li>
        </ul>
      </div>
      <div style={{marginTop:"20px"}}>
        <h3>Pet Care Tutorial Video</h3>
        <div className="video-container">
        <h2>Pet Care Tutorial Video</h2>
        <a href="https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DtNu4-G0SmRU&ved=0CBcQjRxqFwoTCLi50J_a75cDFQAAAAAdAAAAABA-&opi=89978449" target="_blank" rel="noopener noreferrer">
            <img 
            src= {videoThumb}
            alt="Pet care tutorial"
            style={{width:"800px", borderRadius:"8px"}}
            />
        </a>
        </div>
      </div>
    </div>
  )
}
