import "./Header.css";
import logo from "../../assets/img/logo.png";

function Header() {
  return (
    <div class="header-wrapper">
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav">
          <a className="nav-item" href="#section1">
            <div className="current">About Me</div>
          </a>
          <a className="nav-item" href="#section2">
            <div>Services</div>
          </a>
          <a className="nav-item" href="#section3">
            <div>Models</div>
          </a>
          <a className="nav-item" href="#section4">
            <div>Contact</div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;
