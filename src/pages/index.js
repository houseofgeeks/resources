import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Typerwriter from "typewriter-effect"
import hgimage from "../../static/img/hg-landing-page-pink.png";
import hgimageMobile from "../../static/img/hg-landing-page-blue.png";
/* import Astro from "../../static/img/Astro1.svg"; */
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header
      className={(clsx("hero hero--primary", styles.heroBanner), "hg-back")}
    >
     {/*  <Astro className="astro-image" /> */}
      <div className="container hg-inside">
        <div className="contain-landing-page-heading-hg">
          <div className="contain-img">
            <img src={hgimage} alt="" className="hg-image"></img>
            <img src={hgimageMobile} alt="" className="hg-image-mobile-v"></img>
          </div>

          <div className="Alexandria-library" style={{ textAlign: "center" }}>
            <Typerwriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["Library of Alexandria."],
              }}
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              className="button  button--lg  lets-get-started"
              to="/docs/intro"
            >
              Let's get you started 🚀
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

