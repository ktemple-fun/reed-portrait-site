import Grid from '@mui/material/Grid'
import styles from '../styles/Home.module.css'

export default function NavMenu(){
    return(
        <Grid className={styles.navMenu} container direction ="row" >

                <p>Services</p>
                <p>About</p>
                <p>Video</p>
                <p>Contact</p>
        </Grid>
     );
}