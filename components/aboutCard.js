import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function About ({ profile }) {
    return(
    <div className={styles.AboutSection} id="aboutCard">
         <Image
            src={profile.profilePhoto.url}
            width="750"
            height="500"
            className={styles.AboutImage}
            layout="responsive"
            priority="true"
        />
        <div className={styles.AboutTitle}>
            <h1 className={styles.TitleAlign}>ABOUT {profile.businessName}</h1>  
            <p>{profile.aboutMe}</p>
        </div>
    </div>
    )
  }