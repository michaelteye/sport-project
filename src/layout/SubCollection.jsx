import React from 'react'
import socialNetWork from "../assets/images/social-networks.jpg"
import personalizationImage from "../assets/images/personalization.jpg"
import facebookIcon from "../assets/icons/png/facebook-f-black.png"
import twitterIcon from "../assets/icons/png/twitter-black.png"
import instagramIcon from "../assets/icons/png/instagram-black.png"
export default function SubCollection() {
  return (
    <div class="beforeFooter">
    <div class="beforeFooter__card" style={{backgroundImage: `url(${personalizationImage})`}}>
      <div class="beforeFooter__card--text">
        <p class="beforeFooter__card--text--big"> personalization </p>
        <p class="beforeFooter__card--text--small">
          Put a custom print on the football shirt of your choice with our
          <br />
          Personalization service <br />
          <br />
          Tell us what name, what number and we put it.
          <strong>FREE!!!</strong>
        </p>
      </div>
    </div>

    <div class="beforeFooter__card">
      <img
        src={socialNetWork}
        alt="social-networks"
        class="beforeFooter__card--image"
      />
      <div class="beforeFooter__card--text">
        <span class="beforeFooter__card--text--big"> social networks </span>
        <span class="beforeFooter__card--text--small">
          Share your shirts with us with the #CamisetasFutbalSpainnn
          <br />
          <br />
          <div class="beforeFooter__card--text--icons">
            <img
              src={facebookIcon}
              alt="Facebook"
            />
            <img src={twitterIcon} alt="Twitter" />
            <img
              src={instagramIcon}
              alt="Instagram"
            />
          </div>
        </span>
      </div>
    </div>
  </div>
  )
}