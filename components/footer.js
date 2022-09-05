import React from "react"
import styles from '../styles/Home.module.css'


export default function Footer ({profile}) {
    return(
    <div>
        <p className={styles.TitleAlign}>&copy; {profile.ownerName} 2022 Web Site by N.B. Jackson and Kara Temple</p>
    </div>
    )
  }