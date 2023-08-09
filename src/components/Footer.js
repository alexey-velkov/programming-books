import googlePlay from "../img/google-play.svg";
import appStore from "../img/app-store.svg";
import visaPay from "../img/visa-logo.svg";
import masterPay from "../img/mastercard-logo.svg";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram.png";
import youtube from "../img/youtube.png";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <h2>
            Made in{" "}
            <a href="https://prometheus.org.ua/" target="blank">
              Prometheus
            </a>{" "}
            © 2023{" "}
          </h2>
        </div>
      </div>
    </>
  );
};
export default Footer;
