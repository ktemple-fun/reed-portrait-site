import React from "react"

export default function About ({ profiles }) {
    return(
    <div>
        <h1>About {profiles.ownerName}</h1>  
        <p>{profiles.aboutMe}</p>
    </div>
    )
  }