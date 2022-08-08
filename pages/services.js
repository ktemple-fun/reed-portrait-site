
  export default function Services ({ photographyServices }) {
    return(
    <div>
      <h1>Services Avaliable</h1> 
    <ul>
      {photographyServices.map(({ id, serviceTitle }) => (
        <li key={id}>{serviceTitle}</li>
      ))}
    </ul>
    </div>
    )
  }