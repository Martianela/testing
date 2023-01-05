import React from "react";
import logo from "./running-icon-26700.png";
import { FiSearch } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [flag, setFlag] = useState(true);
  const [menubar, setMenubar] = useState(false);
  const handleClick = () => {
    setFlag(false);
    console.log(flag);
  };
  const handleMenu = () => {
    setMenubar(!menubar);
  };
  return (
    <div>
      <div className="navbar">
        <div className={flag ? "navbar-top" : "navbar-top-hidden"}>
          <div className="check">
            <div className="check-button">
              <button className="new-article">NEW ARTICLE</button>
            </div>
            <div className="article-dis">
              <div>
                <span className="article-heading">
                  Article heading line to explain the premise and focus -{" "}
                </span>
                <span className="article-heading-mob">
                  Article heading line to explain.....
                </span>
                <span>
                  <a href="./">read more.</a>
                </span>
              </div>
            </div>
          </div>
          <div className="cross-logo">
            <MdCancel onClick={handleClick} />
          </div>
        </div>
        <div className="navbar-middle">
          <div className="left">
            <div>
              <img src={logo} alt="logo" className="Logo" />
            </div>
            <div className="heading">
              <div>
                <h1>ClassBubs</h1>
              </div>
              <div>
                <h3>Investor</h3>
              </div>
            </div>
          </div>
          <div className="right">
            <div>
              <ul>
                <li>
                  <a href="./">HOME </a>
                </li>
                <li>
                  <a href="./">OUR STORY</a>
                </li>
                <li>
                  <a href="./">EVENTS</a>
                </li>
                <li>
                  <a href="./">PRESS</a>
                </li>
                <li>
                  <a href="./">RESOURCES</a>
                </li>
              </ul>
            </div>
            <div className="search-logo">
              <FiSearch />
            </div>
          </div>
          <div className="right-mobile-tab">
            <div className="search-logo">
              <FiSearch size={23} />
            </div>{" "}
            <div className="search-logo" onClick={handleMenu}>
              {menubar ? <MdCancel size={23} /> : <AiOutlineMenu size={23} />}
            </div>
          </div>
        </div>
        <div className={menubar ? "navbar-menu" : "navbar-menu-hide"}>
          <ul>
            <li>
              <a href="./">HOME </a>
            </li>
            <li>
              <a href="./">OUR STORY</a>
            </li>
            <li>
              <a href="./">EVENTS</a>
            </li>
            <li>
              <a href="./">PRESS</a>
            </li>
            <li>
              <a href="./">RESOURCES</a>
            </li>{" "}
            <li>
              <a href="./">ABOUT</a>
            </li>{" "}
            <li>
              <a href="./">LETTER FROM FOUNDER</a>
            </li>{" "}
            <li>
              <a href="./">OUR DNA</a>
            </li>{" "}
            <li>
              <a href="./">DOWNLOAD OUR DECK</a>
            </li>{" "}
            <li>
              <a href="./"> LOG IN</a>
            </li>{" "}
          </ul>
        </div>
        <div className="navbar-bottom">
          <div className="left">
            <ul>
              <li>
                <button>ABOUT</button>
              </li>{" "}
              <li>
                <a href="./">LETTER FROM FOUNDER</a>
              </li>{" "}
              <li>
                <a href="./">OUR DNA</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="./">DOWNLOAD OUR DECK</a>
              </li>{" "}
              <li>
                <a href="./"> LOG IN</a>
              </li>{" "}
            </ul>
            <div />
          </div>
        </div>
        <div className="tablate-mobile"></div>
      </div>
    </div>
  );
};

export default Navbar;
