import React from 'react'

export default function PopularCard({data}) {
  return (
    <div className="mostPopular__card">
        <div className="mostPopular__card--image">
          <img
            src={data.imageSrc}
            alt="T-shirt image"
            className="mostPopular__card--image--photo"
          />
          <div className="mostPopular__card--image--save">Save {data.amountToSave}%</div>
        </div>

        <div className="mostPopular__card--description">
          {data.title}
        </div>

        <div className="mostPopular__card--pricelist">
          <div className="mostPopular__card--pricelist--price">${data.amount.toLocaleString()}</div>
          <div className="mostPopular__card--pricelist--discount">${data.discountAmount}</div>
        </div>
      </div>
  )
}

