import React from 'react'
import Layout from '@theme/Layout'
import Playground from '@site/src/components/Playground'
import styles from './styles.module.css'

export default function PlaygroundPage() {
  return (
    <Layout
      title="Playground"
      description="WordPress Playground with Loops & Logic"
    >
      <main className={styles.main}>
        <h1>Playground</h1>
        <p>
          Here is a WordPress site with Loops & Logic installed, running
          entirely in the browser.
        </p>
        <Playground
          route="/wp-admin/post-new.php?post_type=tangible_template"
          iframeStyle={{
            height: '680px',
          }}
        />
      </main>
    </Layout>
  )
}
