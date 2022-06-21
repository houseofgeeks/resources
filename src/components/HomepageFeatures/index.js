import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import "./card.css"
import SD from "./Logosofsociety/SDlogo.png"
import Carousel from "react-elastic-carousel"
/* 
const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
]; */
/* 
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
} */
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
      <div className="cardcontainer">
        <h1 style={{ textAlign: "center", margin: "1rem 0 1rem 0" , fontFamily: "Charis SIL, serif" }}>
          OUR COMMUNITIES
        </h1>
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