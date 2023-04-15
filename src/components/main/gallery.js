import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, styled } from "@mui/material";
import { images } from "./listImages";
import small1 from "../../images/image-product-1-thumbnail.jpg";
import small2 from "../../images/image-product-2-thumbnail.jpg";
import small3 from "../../images/image-product-3-thumbnail.jpg";
import small4 from "../../images/image-product-4-thumbnail.jpg";

const CarouselStyle = styled(Carousel)`
  flex-direction: column;
  border-radius: 50px;
  height: 100%;

  .css-1m9128y {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    button {
        padding: 0 10px;
      img {
        height: 80px;
        border-radius: 5px;
      }
    }
  }
  
`;
const PaperSlide = styled(Paper)`
    display: flex;
    justify-content: center;
    box-shadow: unset;
    height: 100%;
    width: 100%;
  img {
    height: 400px;
    width: 400px;
    border-radius: 20px;
  }
`;
export function GalleryImages(props) {
  const indicators = [
    <img src={small1} alt="sneaker"/>,
    <img src={small2} alt="sneaker"/>,
    <img src={small3} alt="sneaker"/>,
    <img src={small4} alt="sneaker"/>,
  ];
  return (
    <CarouselStyle
      id="carousel"
      autoPlay={false}
      indicators={true}
      navButtonsProps={{
        style: {
          display: "none",
        },
      }}
      sx={{ display: { xs: "none", md: "flex" } }}
      IndicatorIcon={indicators}
    >
      {images.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </CarouselStyle>
  );
}

function Item(props) {
  return (
    <PaperSlide>
      <img src={props.item.image} alt="sneaker photos" />
    </PaperSlide>
  );
}
