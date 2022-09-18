import Carousel from 'react-material-ui-carousel'
import Image from "next/image";
import styles from '../styles/Home.module.css'

export default function HeaderCarousel ({ carouselPhotos }) {
    return(
    <div>
      <Carousel className={styles.Carousel}>
        {carouselPhotos[0].carouselPhotos.map(({id, url, width, height}) => (
        <Image
        key={id}
        src={url}
        width={width}
        height={height}
        rel="preload"
        priority="true"
    />
      ))} 
      </Carousel>
    </div>
    )
  }
