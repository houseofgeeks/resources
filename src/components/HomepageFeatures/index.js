import React from 'react';

import "./card.css"

import Carousel from "react-elastic-carousel"

import dataofsociety from "./dataofsociety"
import Items from './Items';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function HomepageFeatures() {
  return (
    <>
      <div className="cardcontainer" >
        <h1 className="our-communities">OUR COMMUNITIES</h1>
        <div className="innerContainer">
          <Carousel breakPoints={breakPoints}>
            {dataofsociety.map((data) => {
              return (
                <Items
                  id={data.id}
                  title={data.title}
                  description={data.description}
                  imagesrc={data.imagesrc}
                ></Items>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}


{
  /* <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section> */
}