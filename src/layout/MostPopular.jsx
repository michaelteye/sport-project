import React from 'react'
import HeadingText from "../components/HeadingText"
import PopularCard from '../components/PopularCard'
import {popularData} from "../data/popularData"
export default function MostPopular() {
  return (
    <div class="most-popular-section">
    <div class="mostPopular__heading">{<HeadingText text="most popular t-shirts" />}</div>

    <div class="mostPopular">
      {popularData.map((data, key)=> <PopularCard data={data} key={key} />)}
    </div>
  </div>

    )
}

