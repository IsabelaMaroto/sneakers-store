import styled from "@emotion/styled";
import Divider from "@mui/material/Divider";
import ProductImage from "../../../images/image-product-1-thumbnail.jpg";
import ProductDelete from "../../../images/icon-delete.svg";

const Container = styled("section")`
  .box {
    padding: 10px 20px;
    font-weight: 700;
  }
  .title {
    padding-bottom: 20px;
  }
  .empty {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    color: hsl(219, 9%, 45%);
    font-size: 14px;
  }
  button{
    width: 100%;
    padding: 15px 0;
  }
`;

const BoxProduct = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 20px;

  .boxProductImage{
    img{
      height: 60px;
      border-radius: 5px;
    }
  }
  .productTexts{
    .flex{
      display: flex;
      justify-content: left;
    }
    p{
      font-weight: 400;
      font-size: 16px;
      padding: 0 5px 10px;
    }
    .total{
      font-weight: 700;
    }
  }
  .delete{
    cursor: pointer;
  }
`
export function CarMenu({ valueTotal, setValueTotal, setValue}) {
  const priceProduct = 125.00
  const total = priceProduct * valueTotal

  function Delete(){
    setValueTotal(0)
    setValue(0)
  }
  return (
    <Container>
      <div className="title box">
        <h2>Cart</h2>
      </div>
      <Divider />
      {valueTotal === 0 ? (
        <div className="empty box">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="box">
          <BoxProduct>
            <div className="boxProductImage">
              <img src={ProductImage} alt="Product" />
            </div>
            <div className="productTexts">
              <p>Fall Limited Edition Sneakers</p>
              <div className="flex">
                <p>$125.00</p>
                <p>x {valueTotal}</p>
                <p className="total">{total}</p>
              </div>
            </div>
            <div className="delete" onClick={() => Delete()}>
              <img src={ProductDelete} alt="delete icon" />
            </div>
          </BoxProduct>
          <div>
            <button>Checkout</button>
          </div>
        </div>
      )}
    </Container>
  );
}
