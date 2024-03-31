import logo from "../../assets/logo.svg";
import iconBag from "../../assets/icon-bag.svg";

import "./styles.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="" />
        <nav className="navbar">
          <ul className="navbar__list">
            <li>
              <a href="#">Furniture</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="cart">
          <div className="item-count">0</div>
          <img src={iconBag} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
