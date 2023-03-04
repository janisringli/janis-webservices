import "./Header.css";
import logo from "../../assets/img/logo.png";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    setCurrent();
  }, []);
  function setCurrent() {
    //set class current to the current nav item-text div
    const navItems = document.querySelectorAll(".nav-item");
    const navItemsText = document.querySelectorAll(".item-text");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItemsText.forEach((item) => {
          item.classList.remove("current");
        });

        item.childNodes[0].classList.add("current");
      });
    });
  }

  return (
    <div class="header-wrapper">
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav">
          <a onClick={setCurrent()} className="nav-item" href="#section1">
            <div className="item-text current">About Me</div>
          </a>
          <a onClick={setCurrent()} className="nav-item" href="#section2">
            <div className="item-text">Services</div>
          </a>
          <a onClick={setCurrent()} className="nav-item" href="#section3">
            <div className="item-text">Models</div>
          </a>
          <a onClick={setCurrent()} className="nav-item" href="#section4">
            <div className="item-text">Contact</div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;
