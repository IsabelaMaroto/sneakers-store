import { Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Paper, styled } from "@mui/material";
import { images } from "./listImages";
import small1 from "../../images/image-product-1-thumbnail.jpg";
import small2 from "../../images/image-product-2-thumbnail.jpg";
import small3 from "../../images/image-product-3-thumbnail.jpg";
import small4 from "../../images/image-product-4-thumbnail.jpg";
import closeIcon from '../../images/close-white.svg';

const CarouselStyle = styled(Carousel)`
  overflow: unset;
  flex-direction: column;
  width: 500px;
  position: relative;
  .css-1m9128y {
    margin-top: 40px;
    button {
      padding: 0 10px;
      img {
        height: 80px;
        border-radius: 5px;
      }
    }
  }

  .css-1abc02a{
    height: 0;
    top: 250px;
    left: 475px;
  }
  .css-hn784z{
    height: 0;
    top: 250px;
    right: 475px;
    left: auto;
  }
`;
const PaperSlide = styled(Paper)`
    background-color: unset;
    box-shadow: unset;

  img {
    max-height: 500px;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
`;

const ContainerStyled = styled(Container)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1;
  max-width: unset !important;
  padding: unset !important;
  top: 0px;
  background-color: hsl(0, 0%, 0%, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .close{
    width: 500px;
    text-align: right;
    padding-bottom: 20px;
    img{
        height: 20px;
        cursor: pointer;
    }
  }
`;
export function FullScreenGallery(props) {
  const indicators = [
    <img src={small1} alt="sneaker" />,
    <img src={small2} alt="sneaker" />,
    <img src={small3} alt="sneaker" />,
    <img src={small4} alt="sneaker" />,
  ];

  return (
    <ContainerStyled  sx={{ display: { xs: "none", md: "flex" } }}>
        <div className="close">
            <img src={closeIcon} alt="X icon" onClick={()=> props.handle()}/>
        </div>
      <CarouselStyle
        id="carousel"
        autoPlay={false}
        indicators={true}
        navButtonsProps={{
            style: {
              backgroundColor: "hsl(0, 0%, 100%)",
              color: "hsl(0, 0%, 0%)",
              opacity: "1",
              padding: "10px"
            },
           
          }}
        sx={{ display: { xs: "none", md: "flex" } }}
        IndicatorIcon={indicators}
      >
        {images.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </CarouselStyle>
    </ContainerStyled>
  );
}

function Item(props) {
  return (
    <PaperSlide>
      <img src={props.item.image} alt="sneaker photos" />
    </PaperSlide>
  );
}
