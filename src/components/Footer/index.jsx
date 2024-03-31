import { Facebook, Instagram, Twitter } from "lucide-react";

import "./styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="links">
          <div>
            <h2>Furnitune</h2>
            <p>
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Email Marketing</a>
              </li>
              <li>
                <a href="#">Campaigns</a>
              </li>
              <li>
                <a href="">Brading</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Furnitune</h4>
            <ul>
              <li>
                <a href="#">Beds</a>
              </li>
              <li>
                <a href="#">Chair</a>
              </li>
              <li>
                <a href="">All</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <ul>
              <li>
                <Facebook />
                <a href="#">Facebook</a>
              </li>
              <li>
                <Twitter />
                <a href="#">Twitter</a>
              </li>
              <li>
                <Instagram />
                <a href="">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <div className="copy">
            <span>Copyright © {new Date().getFullYear()} </span>
          </div>
          <div className="terms">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
