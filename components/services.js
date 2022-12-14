import React from "react"
import Image from "next/image";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'
import styles from '../styles/Home.module.css'

  export default function Services ({ photographyServices }) {
    return(
    <div id="serviceCard">
      <h1 className={styles.TitleAlign}>SERVICES</h1> 
      <Grid className={styles.ServiceCards} container direction ="row" >
      {photographyServices.map(({id, photoSamples, serviceTitle}) => (
       <Box key={id}>
        <Image
            src={photoSamples[0].url}
            width="300px"
            height="400px"
        />
        <h3>{serviceTitle}</h3>
        </Box>
      ))}
      </Grid>
   
    </div>
    )
  }

  