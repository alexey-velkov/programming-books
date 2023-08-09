import { useState } from "react";
import "./searchBook.scss";

const SearchBook = ({ books, setfilteredBooks }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    const filtered = books.filter((book) => {
      return book.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    setfilteredBooks(filtered);
  };

  return (
    <>
      <div className="search-container">
        <input
          className="searchBook"
          type="text"
          placeholder="Search by book name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </>
  );
};

export default SearchBook;
