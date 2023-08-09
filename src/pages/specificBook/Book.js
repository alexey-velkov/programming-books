// import BooksImg from "../../img/js-kids.png";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import books from "../bookList/books";
import "./book.scss";

const Book = ({ onAddToCart }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id === Number(id));
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(book.price);
  const [cartItems, setCartItems] = useState([]);

  const handleCountChange = (event) => {
    const newCount = parseInt(event.target.value);
    setCount(newCount);
    const totalPrice = (book.price * newCount).toFixed(2);
    setTotalPrice(totalPrice);
  };

  const handleAddToCart = () => {
    const newItem = {
      id: book.id,
      title: book.title,
      price: book.price,
      quantity: count,
    };

    const existingCartItems = () => localStorage.getItem("cartItems");
    let updatedCartItems = [];

    if (existingCartItems()) {
      updatedCartItems = JSON.parse(existingCartItems());
    }

    updatedCartItems.push(newItem);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    const itemIndex = JSON.parse(existingCartItems()).findIndex(
      (item) => +item.id === +newItem.id
    );

    if (itemIndex) {
      let updatedCart = [...JSON.parse(existingCartItems())];
      console.log("existingCartItems", JSON.parse(existingCartItems()));
      console.log(updatedCart);
      updatedCart[itemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...newItem }]);
    }
  };

  if (!book) {
    return (
      <div className="container">
        <div className="notfound">Book not found !!!</div>
      </div>
    );
  }

  return (
    <div>
      <main className="main">
        <div className="container">
          <div className="card">
            <div className="card-img">
              <img src={book.image} alt={book.title} />
              <p>{book.description}</p>
            </div>
            <div className="card-creator">
              <h1>{book.title}</h1>
              <div>
                Author: <span>{book.author}</span>
              </div>
            </div>
            <div className="card-total">
              <form className="form-book" action="#" method="post">
                <div>
                  <label htmlFor="price">Price, &#8372;</label>
                  <span id="price">{book.price}</span>
                </div>
                <div>
                  <label htmlFor="count">Quantity</label>
                  <input
                    type="number"
                    id="count"
                    name="count"
                    min="1"
                    max="42"
                    step="1"
                    value={count}
                    onChange={handleCountChange}
                  />
                </div>
                <div>
                  The total cost:
                  <p>
                    <span id="total">{totalPrice}</span>$
                  </p>
                </div>

                <button
                  className="button"
                  type="button"
                  id="addCart"
                  onClick={handleAddToCart}
                >
                  <Link to={"/basket"}>Add</Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Book;
