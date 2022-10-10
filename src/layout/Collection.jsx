import React from "react";
import CollectionCard from "../components/CollectionCard";
import HeadingText from "../components/HeadingText";
import { collectionCardData } from "../data/collectionCardData";
export default function Collection() {
  // const data = {}
  return (
    <>
      <div className="otherCollections">
        <div className="otherCollections__heading">
          <HeadingText text="other collections" />
        </div>

        <div className="otherCollections__container">
          {
            collectionCardData.map((data)=> <CollectionCard data={data}/>)
          }
         {/* <CollectionCard data={data} /> */}
        </div>
        
      </div>
    </>
  );
}
