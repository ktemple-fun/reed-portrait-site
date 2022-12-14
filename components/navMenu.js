import React from "react"
import Grid from '@mui/material/Grid'
import styles from '../styles/Home.module.css'
import Image from "next/image";

export default function NavMenu({profile}){
    
    return(
        <div>
        <Grid className={styles.navMenu} container direction ="row" >  
         <Image
            src={profile.logo.url}
            width="150px"
            height="100px"
            />
            <h2>Go 2 You Portraits</h2>
            <a href="#aboutCard">ABOUT</a>
            <a href="#aboutCard">GALLERY</a>
            <a href="#serviceCard">SERVICES</a>
            <a href="#videoCard">VIDEO</a>
            <a href="#contactCard">GET IN TOUCH</a>
        </Grid>

        </div>
     );
}