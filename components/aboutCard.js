import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function About ({ profile }) {
    return(
    <div className={styles.AboutSection}>
         <Image
            src={profile.profilePhoto.url}
            width="550"
            height="400"
            className={styles.AboutImage}
        />
        <div className={styles.AboutTitle}>
            <h1>About {profile.ownerName}</h1>  
            <p>{profile.aboutMe}</p>
        </div>
    </div>
    )
  }