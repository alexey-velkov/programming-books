import { Link, useLocation } from "react-router-dom";
import userImage from "../img/avatar.png";
import cart from "../img/cart.svg";
import "./header.scss";

const Header = ({ username }) => {
  const location = useLocation();

  const handleOut = () => {
    localStorage.removeItem("username");
  };

  const shouldShowLoginButton = !username && location.pathname !== "/";

  return (
    <div>
      <header className="nav">
        <div className="container">
          <nav className="nav-store books">
            <div className="books-full-name full-name">
              <span>
                <Link to={"/bookslist"} className="linkLogo">
                  JS Band Store
                </Link>
              </span>
              / Vielkov Oleksii
            </div>

            <div className="books-specific">
              {username ? (
                <>
                  <Link to={"/basket"}>
                    <img className="books-cart" src={cart} alt="cart" />
                  </Link>
                  <button className="button btnUser" onClick={handleOut}>
                    <Link to={"/"} className="link">
                      Sign out
                    </Link>
                  </button>

                  <div className="books-user username">
                    <img
                      className="username-avatar"
                      src={userImage}
                      alt="user"
                    />
                    <p className="username-text">{username || "Username"}</p>
                  </div>
                </>
              ) : (
                shouldShowLoginButton && (
                  <button className="button btnUser">
                    <Link
                      to={"/"}
                      style={{ textDecoration: "none" }}
                      className="link"
                    >
                      Sign in !
                    </Link>
                  </button>
                )
              )}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
