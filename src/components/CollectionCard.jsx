import React from 'react'
import rightArrow from "../assets/icons/png/right.png"
export default function CollectionCard({data}) {
  return (
    <div
    className="otherCollections__container--cards"
    style={{ backgroundImage: `url(${data.image})` }}
  >
    {/* <!-- sub contains text and arrow --> */}
    <div className="otherCollections__container--cards--image--sub">
      <div className="otherCollections__container--cards--image--sub--text">
       {data.title}
      </div>
      <img
        src={rightArrow}
        alt="Right Icon"
        className="otherCollections__container--cards--image--sub--icon"
      />
    </div>
  </div>
  )
}
