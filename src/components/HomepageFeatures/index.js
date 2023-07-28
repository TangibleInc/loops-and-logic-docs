import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Confused?',
    Svg: require('@site/static/img/shocked-duck.svg').default,
    description: (
      <>
        Read our Getting Started Docs
      </>
    ),
		destination: '/docs/getting-started/quick-start',
  },
  {
    title: 'Looking for a specific tag?',
    Svg: require('@site/static/img/smart-duck.svg').default,
    description: (
      <>
        Find it in our Learning Guides
      </>
    ),
		destination: '/docs/learning-guides/dynamic-tags/',
  },
  {
    title: 'Have a question or something cool to share?',
    Svg: require('@site/static/img/fast-duck.svg').default,
    description: (
      <>
        Check out our forum
      </>
    ),
		destination: 'https://discourse.tangible.one/',
  },
];

function Feature({Svg, title, description, destination}) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
			<Link className={clsx('card padding-horiz--md padding-top--sm padding-bottom--md text--center', styles.cardItem)} to={destination}>
				<Svg className={styles.featureSvg} role="img" />
				<div className="">
					<h4 className={clsx('margin-bottom--xs')}>{title}</h4>
					<p className={clsx('margin-bottom--xs')}>{description}</p>
				</div>
			</Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
