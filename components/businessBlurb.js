import styles from '../styles/Home.module.css'

export default function BusinessBlurb ({ profile }) {
    return(
    <div className={styles.TitleAlign}>
        {profile.aboutBusiness.map((line) => (
       <p key={line}>{line}</p>
      ))} 
       
    </div>
    )
  }