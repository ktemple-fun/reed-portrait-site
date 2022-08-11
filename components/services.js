import React from "react"

  export default function Services ({ photographyServices }) {
    return(
    <div>
      <h1>Services Available</h1> 
    <ul>
      {photographyServices.map(({ id, serviceTitle }) => (
        <li key={id}>{serviceTitle}</li>
      ))}
    </ul>
    </div>
    )
  }

  