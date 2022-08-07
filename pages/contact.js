export default function Contact ({ profiles }) {
    return(
    <div>
        <h6>{profiles.buisnessName}</h6>
        <p>{profiles.ownerName}</p>
        <p>{profiles.phoneNumber}</p>
        <p>{profiles.emailAddress}</p>
        <p>{profiles.address}</p>
    </div>
    )
  }