import { useState } from 'react';
import './CartSidebar.css'
import QRCode from 'react-qr-code';

const CartSidebar = ({ show, setShow, cart, setCart }) => {

  let removeItem = (index) => {

    let updatedCart = [...cart];

    if (updatedCart[index].qty > 1) {
      updatedCart[index].qty -= 1;
    } else {
      updatedCart.splice(index, 1)
    }

    setCart(updatedCart)
  }


  let total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  let [showQr, setShowQr] = useState(false);




  return (
    <div className="sidebar">
      <button className="closebtn" onClick={() => setShow(false)}>
        ❌
      </button>

      <h2>Your Cart</h2>

      {
        cart.map((item, index) => {
          return <div className="cartItem">
            <img src={item.image} alt="" />
            <div className="cardDetails">
              <p>{item.name}</p>
              <p>&#8377;{item.price}</p>
            </div>

            <div className="qtyControls">
              <button onClick={() => removeItem(index)}> - </button>
              <span>{item.qty}</span>
              <button onClick={() => {
                let updatedCart = [...cart];
                updatedCart[index].qty += 1;
                setCart(updatedCart);
              }}> + </button>
            </div>

            <div className="removeBtn" onClick={() => removeItem(index)}>Remove</div>
          </div>

        })
      }



      <h3 className="total">Total : &#8377; {total} </h3>
      <button className="orderbtn" onClick={() => { setShowQr(true) }}>Place Order</button>


      {
        showQr &&
        <div style={{ height: "370px", width: "300px", margin: "20px auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
          <h2>Scan & pay</h2>
          <QRCode value='abc3@okhdfcbank' size={200}></QRCode>
          <h3>Total : &#8377;{total}</h3>
        </div>

      }





    </div>


  )
}

export default CartSidebar