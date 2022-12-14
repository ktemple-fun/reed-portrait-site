import React from "react"
import styles from '../styles/Home.module.css'


export default function Footer ({profile}) {
    return(
    <div>
        <p className={styles.TitleAlign}>&copy; {profile.businessName} 2022</p>
    </div>
    )
  }