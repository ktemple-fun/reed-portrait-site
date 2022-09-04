import React, {useState} from "react"
import Grid from '@mui/material/Grid'
import styles from '../styles/Home.module.css'
import MenuIcon from '@mui/icons-material/Menu';

export default function NavMenu(){
    
    const [visible, setVisible] = React.useState(false)
 
    const toggleVisible = () => {
      if (visible === false){
        setVisible(true)
      } 
      else if (visible === false){
        setVisible(false)
      }
    };
    

    
    return(
        <div>
        <Grid className={styles.navMenu} container direction ="row" >
            <a href="#serviceCard">Services</a>
            <a href="#aboutCard">About</a>
            <a href="#videoCard">Video</a>
            <a href="#contactCard">Contact</a>
        </Grid>
        <MenuIcon className={styles.HamMenu} onClick={toggleVisible()} />
        <div className={styles.vMenu} style={{display: visible ? 'block' : 'none'}} id="myLinks">
            <a href="#serviceCard">Services</a>
            <a href="#aboutCard">About</a>
            <a href="#videoCard">Video</a>
            <a href="#contactCard">Contact</a>
        </div>
        </div>
     );
}