import React from "react"

export default function ContactCard ({ profile }) {
    return(
    <div>
        <h6>{profile.businessName}</h6>
        <p>{profile.ownerName}</p>
        <p>{profile.phoneNumber}</p>
        <p>{profile.emailAddress}</p>
        <p>{profile.address}</p>
    </div>
    )
  }