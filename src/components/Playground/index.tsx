import React from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'

/**
 * Wrap browser-only component to prevent server-side rendering
 * @see https://docusaurus.io/docs/next/advanced/ssg#browseronly
 */

export default function PlayerWrapper(props: any) {
  return (
    <BrowserOnly>
      {() => {
        const { Playground } = require('./main')
        return <Playground {...props} />
      }}
    </BrowserOnly>
  )
}