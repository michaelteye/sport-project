import React from "react"

export default function BannerCard({data}){
    return (
     
        <div className="yellowCards">
            <img
              src={data.image}
              alt="Phone Icon"
              className="yellowCards__icon"
            />
            <p className="yellowCards__text--big">{data.title}</p>
            <p className="yellowCards__text--small">{data.otherInfo}</p>
          </div>
    );
}