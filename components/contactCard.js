import React from "react"
import styles from '../styles/Home.module.css'

export default function ContactCard ({ profile }) {
    return(
    <div>
        <div>
            <p>{profile.ownerName}</p>
            <p>{profile.phoneNumber}</p>
            <p>{profile.emailAddress}</p>
            <p>{profile.address}</p>
        </div>
        <h2 className={styles.TitleAlign}>{profile.businessName}</h2>
        
    </div>
    )
  }