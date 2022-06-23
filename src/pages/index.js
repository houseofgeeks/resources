import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Typerwriter from "typewriter-effect"
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header
      className={(clsx("hero hero--primary", styles.heroBanner), "hg-back")}
    >
      <div className="container hg-inside">
        {/* <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div>
          <h1 className="House-of-geeks-intro" style={{ textAlign: "center" }}>
            House Of Geeks’
          </h1>
          <p className="Alexandria-library" style={{ textAlign: "center" }}>
            <Typerwriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["Library of Alexandria."],
              }}
            />
          </p>
          <div /* className={styles.buttons} */ style={{ textAlign: "center" }}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Let's get you started🚀
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
