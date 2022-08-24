import Carousel from 'react-material-ui-carousel'
import Image from "next/image";

export default function HeaderCarousel ({ carouselPhotos }) {
    return(
    <div>
      <Carousel>
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
