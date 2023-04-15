import { CarouselImages } from "./carousel";
import { Box, Container, styled } from "@mui/material";
import { Texts } from "./listTexts";
import IconPlus from "../../images/icon-plus.svg";
import IconMinus from "../../images/icon-minus.svg";
import { GalleryImages } from "./gallery";
import { useState } from "react";
import { FullScreenGallery } from "./fullScreenGallery";



const ContainerStyle = styled(Container)`
  padding: unset !important;
  height: 100%;
  width: 100%;
  margin: unset !important;
  margin-left: 0px;
  margin-right: 0px;
  max-width: unset !important;

  @media (min-width: 900px) {
    align-items: center;
    justify-content: center;
    padding: 50px 100px !important;
  }
`;
const BoxText = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  font-family: "Kumbh Sans";
  flex: 1;
  max-width: 400px;
  div {
    align-items: center;
    h3 {
      color: hsl(26, 100%, 55%);
      font-weight: 700;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 1px;
    }
    h2 {
      color: hsl(220, 13%, 13%);
      font-weight: 700;
      padding: 20px 0;
      font-size: 30px;
    }
    p {
      color: hsl(220, 13%, 13%);
      line-height: 1.5;
      font-size: 15px;
    }
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;

    .discount {
      background-color: hsl(25, 100%, 94%);
      padding: 5px;
      border-radius: 5px;
      margin: 0 10px;
    }
    h4 {
      color: hsl(220, 14%, 75%);
      text-decoration: line-through;
    }
  }
  .input-box {
    background-color: hsl(223, 64%, 98%);
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    margin-bottom: 20px;

    img {
      object-fit: contain;
      cursor: pointer;
    }
    input {
      border: none;
      text-align: center;
      font-weight: 700;
      background-color: unset;
    }
  }

  button {
    width: 100%;
    svg {
      padding: 0 10px;
    }
  }

  @media (min-width: 900px) {
    margin: 0;
    padding-left: 100px;
    p{
      padding: 10px 0;
      line-height: 2.5;
    }
    .flex{
      display: block;
    }

    .boxInputButton{
      padding: 40px 0 0;
      justify-content: space-between;

      .input-box {
        margin: 0;

        input{
          width: 100px;
        }
      }

      button{
        margin: 0 10px;
        width: 240px;
      }
    }
  }
`;
const GalleryBox = styled("div")`
  flex: 1;
  max-width: 500px;
`;
export function Main({ Plus, Minus, ProductData, value}) {

  const [openFullScreen, setOpenFullScreen] = useState(false);

  function handleOpenFullScreen (){ setOpenFullScreen(true)};

  function handleCloseFullScreen (){ setOpenFullScreen(false)};

  return (
    <ContainerStyle sx={{ display: { xs: "block", md: "flex" } }}>
      <CarouselImages />
      <GalleryBox>
        <GalleryImages handle={handleOpenFullScreen}/>
      </GalleryBox>
      {openFullScreen ? <FullScreenGallery handle={handleCloseFullScreen}/> : null}
      <BoxText >
        {Texts.map((product, key) => (
          <div key={key}>
            <h3>{product.brand}</h3>
            <h2 className="title">{product.title}</h2>
            <p>{product.description}</p>
            <div className="flex">
              <Box sx={{ display: "flex" }}>
              <h2>{product.priceTotal}</h2>
              <h3 className="discount">{product.discount}</h3>
              </Box>
              <h4>{product.price}</h4>
            </div>
          </div>
        ))}
        <Box sx={{ display: { xs: "block", md: "flex" } }} className="boxInputButton">
          <div className="input-box">
            <img
              src={IconMinus}
              alt="Minus icon"
              id="minus"
              onClick={() => Minus()}
            />

            <input type="number" value={value} min={0} id="product" />
            <img
              src={IconPlus}
              alt="Plus icon"
              id="plus"
              onClick={() => Plus()}
            />
          </div>

          <button type="submit" onClick={() => ProductData()}>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </Box>
      </BoxText>
    </ContainerStyle>
  );
}
