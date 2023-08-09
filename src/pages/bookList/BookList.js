import React, { useState } from "react";
import books from "./books";
import { Link } from "react-router-dom";
import "./booklist.scss";
import imageNotFound from "../../img/imageNotFound.png";
import SearchBook from "../../components/SearchBook";
import FilteredPriceBooks from "../../components/FilteredPriceBooks";

const BookList = () => {
  const [filteredBooks, setfilteredBooks] = useState(books);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  const truncateTitle = (text) => {
    return text.length > 24 ? text.slice(0, 24) + "..." : text;
  };

  return (
    <div>
      <main className="main">
        <div className="container">
          <div className="findBooks">
            <SearchBook books={books} setfilteredBooks={setfilteredBooks} />
            <FilteredPriceBooks
              books={books}
              setfilteredBooks={setfilteredBooks}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
            />
          </div>
          <div id="catalog" className="flexWrap">
            {filteredBooks.map((book) => (
              <div key={book.id} className="mainBook">
                <div>
                  <img
                    src={book.image ? book.image : imageNotFound}
                    alt={book.title}
                    // onLoad={() => console.log("Image loaded:", book.image)}
                    // onError={() => console.log("Image not found:", book.image)}
                  />
                  <h2>{truncateTitle(book.title)}</h2>
                  <p>Author: {book.author}</p>
                  <p>Price: ${book.price}</p>
                  <p>{book.shortDescription}</p>
                  <p className="description">
                    {truncateTitle(book.description)}
                  </p>
                </div>
                <button className="button ">
                  <Link
                    key={book.id}
                    to={`/book/${book.id}`}
                    className="button-link"
                  >
                    View
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

// const isValidImage = (url) => {
//   if (!url) {
//     return false;
//   }

// const img = new Image();
// img.src = url;

// return img.complete || img.width + img.height > 0;
// };

export default BookList;
