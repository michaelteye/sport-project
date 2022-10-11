import React from 'react'
import twitter from "../assets/icons/png/twitter.png"
import facebook from "../assets/icons/png/facebook-f.png"
import instagram from "../assets/icons/png/instagram.png"
import planePaper from "../assets/icons/png/paper-plane.png"
import partners from "../assets/images/payment-partners.png"
function Footer() {
  return (
   <>
   <div className="footer">
<div className="footer__elements">
  <ul className="footer__elements--columns">
    <li className="footer__elements--columns--items--head">Main Menu</li>
    <li className="footer__elements--columns--items--sub">Home</li>
    <li className="footer__elements--columns--items--sub">T-Shirts</li>
    <li className="footer__elements--columns--items--sub">NBA</li>
    <li className="footer__elements--columns--items--sub">Tracksuits</li>
    <li className="footer__elements--columns--items--sub">
      Products Delivery 1 - 2 days
    </li>
    <li className="footer__elements--columns--items--sub">Contact</li>
    <li className="footer__elements--columns--items--sub">Reviews</li>
  </ul>

  <ul className="footer__elements--columns">
    <li className="footer__elements--columns--items--head">Secondary Menu</li>
    <li className="footer__elements--columns--items--sub">Search</li>
    <li className="footer__elements--columns--items--sub">Privacy Policy</li>
    <li className="footer__elements--columns--items--sub">Shipping Policy</li>
    <li className="footer__elements--columns--items--sub">Returns Policy</li>
    <li className="footer__elements--columns--items--sub">
      Terms of Service
    </li>
  </ul>

  <ul className="footer__elements--columns">
    <li className="footer__elements--columns--items--head">
      Subscribe
      <div className="footer__elements--columns--items--head--form">
        <input
          type="text"
          className="footer__elements--columns--items--head--form--input"
          placeholder="Email Address"
        />
        <img
          src={planePaper}
          alt="paper plane"
          className="footer__elements--columns--items--head--form--icon"
        />
      </div>
    </li>
    <li className="footer__elements--columns--items--sub">
      Subscribe to our mailing list to <br />
      recieve the latest news.
    </li>
  </ul>

  <ul className="footer__elements--columns">
    <li className="footer__elements--columns--items--head">Follow Us</li>
    <li className="footer__elements--columns--items--sub">
      <img
        src={facebook}
        alt="facebook-f"
        className="footer__elements--columns--items--sub--social"
      />
      <img
        src={twitter}
        alt="twitter"
        className="footer__elements--columns--items--sub--social"
      />
      <img
        src={instagram}
        alt="Instagram"
        className="footer__elements--columns--items--sub--social"
      />
    </li>
  </ul>

</div>
</div>

<div className="footer__down">
  <div className="footer__down--left">
    &copy; 2021 Jambuzani - All rights reserved
  </div>

  <div className="footer__down--right">
    <img src="" alt="" className="footer__down--right--logo1" /> 
    <div className="footer__down--right">
      <img
        src={partners}
        alt="payment-partners"
        className="footer__down--right--icon"
      />
    </div>
  </div>
</div>
   </>
  )
}

export default Footer