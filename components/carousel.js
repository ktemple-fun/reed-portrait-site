export default function HeaderCarousel ({ carouselPhotos }) {
    return(
    <div>
      <h1>Header</h1> 
        {console.log('I am the carousel' + carouselPhotos)}
        {/* {carouselPhotos.map(({ id, carouselPhotos}) => (
        <li key={id}>{carouselPhotos}</li>
      ))} */}
    </div>
    )
  }
//https://www.geeksforgeeks.org/how-to-add-image-carousel-in-nextjs/
  //https://www.npmjs.com/package/react-material-ui-carousel
//   import React from 'react';
// import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'

// function Example(props)
// {
//     var items = [
//         {
//             name: "Random Name #1",
//             description: "Probably the most random thing you have ever seen!"
//         },
//         {
//             name: "Random Name #2",
//             description: "Hello World!"
//         }
//     ]

//     return (
//         <Carousel>
//             {
//                 items.map( (item, i) => <Item key={i} item={item} /> )
//             }
//         </Carousel>
//     )
// }

// function Item(props)
// {
//     return (
//         <Paper>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </Paper>
//     )
// }