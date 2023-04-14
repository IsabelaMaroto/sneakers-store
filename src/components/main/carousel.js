import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, styled } from "@mui/material";
import { images } from "./listImages";

const PaperSlide = styled(Paper)`
  height: 300px;
  box-shadow: unset;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export function CarouselImages(props) {
  return (
    <Carousel
      id="carousel"
      autoPlay={false}
      indicators={false}
      navButtonsProps={{
        style: {
          backgroundColor: "hsl(0, 0%, 100%)",
          color: "hsl(0, 0%, 0%)",
          opacity: "1",
        },
      }}
      sx={{ display: { xs: "block", md: "none" } }}
    >
      {images.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <PaperSlide>
      <img src={props.item.image} alt="sneaker photos" />
    </PaperSlide>
  );
}
