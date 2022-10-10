import React from 'react'
import { navItems } from '../data/navData';
import Nav from './Nav';
import searchImg from "../assets/icons/png/search.png"
import pingDown from "../assets/icons/png/down.png"
import globe from "../assets/icons/png/globe.png"
import cartImg from "../assets/icons/png/shopping-cart-white.png"
import userIcon from "../assets/icons/png/user.png"
export default function Header() {
    return (
        <>
           <div className="header">
        <div className="header__top">
          <div className="header__top--language">
            <img
              src={globe}
              alt="Globe"
              className="header__top--language--globe"
            />
            EN
          </div>
          <div className="header__top--sales">
            sales begin - free shipping on all orders
          </div>
          <div className="header__top--chat">chat with us</div>
        </div>

        <div className="header__second">
          <div className="header__second--yellow">&nbsp;</div>

          <div className="header__second--top">
            <div className="header__second--top--cate">
              <div className="header__second--top--cate--category">
                All Categories
              </div>
              <img
                src={pingDown}
                alt=""
                className="header__second--top--cate--down-icon"
              />
            </div>

            <div className="header__second--top--searchsection">
              <input
                type="text"
                className="header__second--top--searchbox"
                placeholder="What are you looking for?"
              />
              <button className="header__second--top--btn">Search</button>
            {/* <a href="/" className="header__second-btnicon">X</a> */}
              <img
                src={searchImg}
                alt="Search Icon"
                className="header__second--top--searchicon"
              />
            </div>
            <img
              src={cartImg}
              alt="shopping-cart-white"
              className="header__second--top--shopping"
            />

            <img
              src={userIcon}
              alt="user"
              className="header__second--top--user"
            />
          </div>

          <Nav navItems={navItems} />
        </div>
      </div>

        </>
    );
};
