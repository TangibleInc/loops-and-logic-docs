import React, { useLayoutEffect } from 'react'
import Layout from '@theme/Layout'
import Playground from '@site/src/components/Playground'
import styles from './styles.module.css'

export default function PlaygroundPage() {
  useLayoutEffect(() => {
    document.documentElement.style = `
position: absolute;
width: 100dvw;
height: 100dvh;
margin: 0;
padding: 0;
overflow: hidden;
    `
    return () => {
      document.documentElement.style = ''
    }
  }, [])
  return (<>
    {/* <Layout
      title="Playground"
      description="WordPress Playground with Loops & Logic"
    > */}
      <main className={styles.main}>
        {/* <h1>Playground</h1> */}
        {/* <p>
          Here is a WordPress site with Loops & Logic installed, running
          entirely in the browser.
        </p> */}
        <Playground
          route="/wp-admin/post-new.php?post_type=tangible_template"
        />
      </main>
    {/* </Layout> */}
    </>  )
}
