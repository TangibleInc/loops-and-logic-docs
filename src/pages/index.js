import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
				<div className={clsx('row', styles.heroBannerRow)}>
					<div className={clsx('col col--5 padding-bottom--md')}>
						<h1 className="hero__title">{siteConfig.title}</h1>
						<p className="hero__subtitle">{siteConfig.tagline}</p>
						<div className={styles.buttons}>
							<Link
								className="button button--primary button--lg"
								to="/docs/getting-started/quick-start">
								Get Started
							</Link>
							<Link
								className="button button--primary button--lg"
								to="https://wordpress.org/plugins/tangible-loops-and-logic/">
								Download L&L
							</Link>
						</div>
					</div>
					<div className={clsx('col col--7')}>
					 <div className="video-responsive">
							<iframe width="950" height="534" src="https://www.youtube.com/embed/-ObJkmhJ3qU" title="We reinvented HTML for WordPress: Introducing Loops &amp; Logic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
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
      title={`${siteConfig.title}`}
      description="Loops & Logic Duck-umentation">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
