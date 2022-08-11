import React from "react"

export default function ContactCard ({ profiles }) {
    return(
    <div>
        <h6>{profiles.businessName}</h6>
        <p>{profiles.ownerName}</p>
        <p>{profiles.phoneNumber}</p>
        <p>{profiles.emailAddress}</p>
        <p>{profiles.address}</p>
    </div>
    )
  }