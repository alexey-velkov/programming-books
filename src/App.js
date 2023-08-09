import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Signin from "./pages/signin/Signin";
import Book from "./pages/specificBook/Book";
import BookList from "./pages/bookList/BookList";
import NotFound from "./components/NotFound";
import Basket from "./components/Basket";
import Footer from "./components/Footer";
import "./scss/style.scss";
// import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  return (
    <>
      <div>
        <Header username={username} />
        <Routes>
          <Route path="/" element={<Signin setUsername={setUsername} />} />
          <Route path="/bookslist" element={<BookList />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
