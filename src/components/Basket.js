import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import cartSvg from "../img/cart.svg";
import "./bascet.scss";
import books from "../pages/bookList/books";

const Basket = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const existingCartItems = localStorage.getItem("cartItems");
    console.log(existingCartItems);
    if (existingCartItems) {
      setCartItems(JSON.parse(existingCartItems));
    }
  }, []);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePurchase = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  const addToCart = (newItem) => {
    const itemIndex = cartItems.findIndex((item) => item.id === newItem.id);
    if (itemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
    }
  };

  return (
    <>
      <div className="container">
        <div className="cartCenter">
          <div className="rightEnd">
            <button className="button" onClick={handlePurchase}>
              <Link className="link">Purchase</Link>
            </button>
          </div>
          {cartItems && cartItems.length > 0 ? (
            <>
              <div className="basket-table">
                <ul className="basket-table-list">
                  <li>Book</li>
                  <li>Name</li>
                  <li>Price</li>
                  <li>Quantity</li>
                  <li>Total</li>
                </ul>

                {cartItems.map((item, index) => (
                  <ul key={index} className="basket-table-list">
                    <li>
                      {/* <img src={item.image} alt={item.title} /> */}
                      <img
                        src={
                          books.find((bookItem) => bookItem.id === item.id)
                            .image
                        }
                        alt={item.title}
                        // style={{ width: "70px" }}
                        className="img-book"
                      />
                    </li>
                    <li>{item.title}</li>
                    <li>$ {item.price}</li>
                    <li>{item.quantity}</li>
                    <li>$ {(item.price * item.quantity).toFixed(2)}</li>
                  </ul>
                ))}
              </div>
              <div className="cartSummary">
                <span>Total: $ {total.toFixed(2)}</span>
              </div>
            </>
          ) : (
            <div className="cartImg">
              <img src={cartSvg} alt="basket" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Basket;
