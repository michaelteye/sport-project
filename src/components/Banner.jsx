import React from 'react'
import bannerImage from "../assets/images/hero.jpg"
import rewardBadge from "../assets/icons/png/rewards-badge.png"
import cartIcon from "../assets/icons/png/bag.png"
import { bannerCardData } from '../data/bannerCardData';
import BannerCard from './BannerCard';
export default function Banner() {
  return ( 
  <>
  <div className="banner">
  <div className="banner__text">
    <span className="banner__text--customized">
      Your favourite customized
    </span>
    <span className="banner__text--jerseys">Club Jerseys</span>
  </div>

  <div className="banner__line">
    <div className="banner__line--yellow"></div>
    <div className="banner__line--white"></div>
    <div className="banner__line--white"></div>
    <div className="banner__line--white"></div>
  </div>

  <div className="banner__shop">
    <div className="banner__shop--text">Shop Now</div>
    <div className="banner__shop--icon">
      <img
        src={cartIcon}
        alt="Search Icon"
        className="banner__shop--icon--bag"
      />
    </div>
  </div>

  <img
    src={bannerImage}
    alt="Banner Image"
    className="banner__photo"
  />
</div>

{/* Banner card */}
      <div class="afterBanner">
        <div class="afterBanner__cards">
          {bannerCardData.map((item, key)=> <BannerCard data={item} key={key} />)}
        </div>

        <img
          src={rewardBadge}
          alt="Rewards badge"
          class="afterBanner__rewards-badge"
        />
      </div>
</>
);
};
