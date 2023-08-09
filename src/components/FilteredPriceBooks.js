import "./filteredPriceBooks.scss";

const FilteredPriceBooks = ({
  books,
  setfilteredBooks,
  selectedPriceRange,
  setSelectedPriceRange,
}) => {
  const handlePriceFilter = (event) => {
    const priceRange = event.target.value;
    setSelectedPriceRange(priceRange);

    const filtered = books.filter((book) => {
      switch (priceRange) {
        case "all":
          return true;
        case "under15":
          return book.price > 0 && book.price < 15;
        case "15to30":
          return book.price > 15 && book.price < 30;
        case "under30":
          return book.price > 30;
        default:
          return true;
      }
    });
    setfilteredBooks(filtered);
  };

  return (
    <>
      <div className="filter-container">
        <label className="label" htmlFor="price-filter">
          Price
        </label>
        <select
          id="price-filter"
          value={selectedPriceRange}
          onChange={handlePriceFilter}
          className="select"
        >
          <option value="all">All</option>
          <option value="under15">0 - 15</option>
          <option value="15to30">15 - 30</option>
          <option value="under30">more 30</option>
        </select>
      </div>
    </>
  );
};

export default FilteredPriceBooks;
