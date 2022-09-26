import React from "react"
import Grid from '@mui/material/Grid'
import styles from '../styles/Home.module.css'

export default function NavMenu(){
    
    return(
        <div>
        <Grid className={styles.navMenu} container direction ="row" >
            <a href="#">LOGO</a>
            <a href="#aboutCard">ABOUT</a>
            <a href="#aboutCard">GALLERY</a>
            <a href="#serviceCard">SERVICES</a>
            <a href="#videoCard">VIDEO</a>
            <a href="#contactCard">GET IN TOUCH</a>
        </Grid>

        </div>
     );
}