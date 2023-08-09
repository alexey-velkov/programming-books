import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatarImage from "../../img/avatar.png";
import "./signin.scss";

const Signin = ({ setUsername }) => {
  const [usernameInput, setUsernameInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      navigate("/bookslist");
    }
  }, [navigate, setUsername]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredUsername = usernameInput.trim();
    if (enteredUsername) {
      setUsername(enteredUsername);
      localStorage.setItem("username", enteredUsername);
      navigate("/bookslist");
    }
  };

  const handleChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const isDisabled = usernameInput.length < 4 || usernameInput.length > 16;

  return (
    <div>
      <main className="main">
        <div className="container">
          <div className="center">
            <form
              className="form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <img className="form-avatar" src={avatarImage} alt="Avatar" />

              <label className="form-uname" htmlFor="uname">
                <b>Username</b>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="type Username"
                name="uname"
                value={usernameInput}
                onChange={handleChange}
                required
              />

              <button
                className="button btnSignin"
                type="submit"
                disabled={isDisabled}
              >
                Sign in!
              </button>
            </form>
          </div>
        </div>
      </main>

      <script src="./main.js"></script>
    </div>
  );
};

export default Signin;
