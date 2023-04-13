import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, styled} from '@mui/material'
import { images } from './listImages';

const PaperSlide = styled(Paper)`
    img{
        height: 100%;
        width: 100%;
    }
    
`
const CarouselStyled = styled(Carousel)`
    .css-1f8sh1y{
        height: 300px !important;
    }
`
export function CarouselImages(props){

    return (
        <CarouselStyled id='carousel' autoPlay={false} indicators={false} 
        navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
                backgroundColor: 'hsl(0, 0%, 100%)',
                color: 'hsl(0, 0%, 0%)',
                opacity: '1',
            }
        }} 
       
        >
            {
                images.map( (item, i) => <Item key={i} item={item} /> )
            }
        </CarouselStyled>
    )
}

function Item(props)
{
    return (
        <PaperSlide >
            <img src={props.item.image}/>
        </PaperSlide>
    )
}