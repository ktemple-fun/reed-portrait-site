import React from "react"

export default function About ({ profile }) {
    return(
    <div>
        <h1>About {profile.ownerName}</h1>  
        <p>{profile.aboutMe}</p>
        
    </div>
    )
  }