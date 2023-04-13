import { CarouselImages } from "./carousel";
import { Box, Container, styled } from "@mui/material";
import { Texts } from "./listTexts";
import IconPlus from '../../images/icon-plus.svg';
import IconMinus from '../../images/icon-minus.svg';

const BoxText = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-family: 'Kumbh Sans';
    
    div{
        h3{
            color: hsl(26, 100%, 55%);
            font-weight: 700;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 1px;
            
        }
        h2{
            color: hsl(220, 13%, 13%);
            font-weight: 700;
            padding: 20px 0;
            font-size: 30px;
        }
        p{
            color: hsl(220, 13%, 13%);
            line-height: 1.5;
            font-size: 15px;
        }
    }
    .flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 700;

        .discount{
            background-color: hsl(25, 100%, 94%);
            padding: 5px;
            border-radius: 5px;

        }
        h4{
            color: hsl(220, 14%, 75%);
            text-decoration: line-through;
        };
    }
    .input-box{
        background-color: hsl(223, 64%, 98%);
        border-radius: 5px;
        text-align: center;
        display: flex;
        justify-content: space-around;
        padding: 10px;
        margin-bottom: 20px;

        img{
            object-fit: contain;
        }
        input{
        border: none;
        text-align: center;
        font-weight: 700;
        background-color: unset;
    }
    }

    button{
        background-color: hsl(26, 100%, 55%);
        color: hsl(0, 0%, 100%);
        border: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        padding: 10px;
        border-radius: 8px;
        font-size: 14px;

        svg{
            padding: 0 10px;
        }
    }
    
`
export function Main() {
  return (
    <Container style={{padding: "unset" }}>
      <CarouselImages />
      <BoxText>
        {Texts.map((product) => (
          <div>
            <h3>{product.brand}</h3>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="flex">
              <h2>{product.priceTotal}</h2>
              <h3 className="discount">{product.discount}</h3>
              <h4>{product.price}</h4>
            </div>
          </div>
        ))}
        <div className="input-box">
            <img src={IconMinus} alt="Minus icon"/>
            <input type="number" value={0} min={0}/>
            <img src={IconPlus} alt="Plus icon"/>
        </div>
        
        <button type="submit">
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#FFF" fill-rule="nonzero"/></svg>
            Add to cart
        </button>
      </BoxText>
    </Container>
  );
}