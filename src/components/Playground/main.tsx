import React, { useEffect, useRef } from 'react'
import { startPlaygroundWeb } from '@wp-playground/client'
import type { StyleHTMLAttributes } from 'react'
import type { PlaygroundClient } from '@wp-playground/client'
import { defaultBlueprint, codeExampleSteps } from './blueprints'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

// https://docusaurus.io/docs/markdown-features/code-blocks#usage-in-jsx
import CodeBlock from '@theme/CodeBlock'

type PlaygroundProps = {
  title?: string
  template?: string
  style?: string
  script?: string
  content?: {
    [postType: string]: PostDefinition[]
  }
  route?: string
  lazy?: boolean
  iframeStyle?: StyleHTMLAttributes<any>
  // Persistence not working - remote.html returns a nested iframe?
  storage?: 'opfs-host' | 'opfs-browser' | 'temporary'
  // https://wordpress.github.io/wordpress-playground/blueprints-api/steps
  // blueprint?: Blueprint
  buttonText?: string
}

type PostDefinition = {
  post_title: string
  [field: string]: any
}

const PLAYGROUND_SERVER_URL = 'https://playground.wordpress.net'
// 'https://play.tangible.one'
// 'http://localhost:3333'

export function Playground(props: PlaygroundProps = {}) {
  // Lazy load by default
  const [isRunning, setIsRunning] = React.useState(props.lazy === false)

  const { iframeStyle = {}, buttonText = 'Run' } = props

  const ref = useRef()

  useEffect(
    function () {
      if (!isRunning) return

      const iframe = ref.current
      if (!iframe) return

      start({
        ...props,
        iframe,
        fullSite: !props.template,
      }).catch(console.error)

      return () => {
        // Clean up
      }
    },
    [isRunning]
  )

  const example = props.template && (
    <Tabs>
      <TabItem value="template" label="Template" default>
        <CodeBlock language="html">{props.template}</CodeBlock>
      </TabItem>
      <TabItem value="style" label="Style">
        <CodeBlock language="scss">{props.style}</CodeBlock>
      </TabItem>
      <TabItem value="script" label="Script">
        <CodeBlock language="js">{props.script}</CodeBlock>
      </TabItem>
    </Tabs>
  )

  if (!isRunning) {
    const start = () => setIsRunning(true)
    return (
      <>
        {example}
        <p>
          <button className="button button--primary" onClick={start}>
            {buttonText}
          </button>
        </p>
      </>
    )
  }

  return (
    <>
      {example}
      <p>
        <iframe
          ref={ref}
          style={{
            width: '100%',
            maxWidth: '1400px',
            height: '420px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            ...iframeStyle,
          }}
        />
      </p>
    </>
  )
}

async function start(
  props: PlaygroundProps & {
    iframe: HTMLIFrameElement
    fullSite?: boolean
  }
) {
  const {
    iframe,

    title = 'Example Template',
    template,
    style = '',
    script = '',
    // TODO: Other template fields like location, assets, controls

    // Create content
    content = {},

    storage = window.location.protocol === 'https:' ? 'browser' : 'temporary',
    route = '/',
    fullSite,
  } = props

  if (fullSite) {
    iframe.src = `${PLAYGROUND_SERVER_URL}/?storage=${storage}&mode=browser-full-screen&plugin=tangible-loops-and-logic&url=${encodeURIComponent(
      '/wp-admin/options-general.php?page=tangible-loops-and-logic-settings&tab=welcome&dismiss_admin_notice=true'
    )}`

    // Passing blueprint JSON in URL hash is not working
    // '#'+encodeURIComponent(JSON.stringify(defaultBlueprint))

    return
  }

  // Code example has no browser chrome around the playground site

  const playground: PlaygroundClient = await startPlaygroundWeb({
    // playground = startPlaygroundWeb({
    iframe,
    remoteUrl: `${PLAYGROUND_SERVER_URL}/remote.html?storage=${storage}`,
    blueprint: {
      ...defaultBlueprint,
      steps: [...defaultBlueprint.steps, ...codeExampleSteps],
      landingPage: route,
    },
  })

  if (!playground) return

  /**
   * Create demo content
   * @see https://developer.wordpress.org/reference/functions/wp_insert_post/
   */
  if (content) {
    const { errors } = await playground.run({
      code: `<?php
      include 'wordpress/wp-load.php';
      wp_set_current_user(1);

      $content = json_decode(${
        // Object -> JSON -> Quoted JSON string
        JSON.stringify(JSON.stringify(content))
      }, JSON_OBJECT_AS_ARRAY);

      foreach ($content as $post_type => $posts) {
        foreach ($posts as $post) {
          wp_insert_post(array_merge([
            "post_author" => 1,
            "post_type" => $post_type,
            "post_title" => 'Post Title',
            "post_content" => '',
            "post_status" => "publish",
            "meta_input" => [
            ]
          ], $post));
        }
      }
      `,
    })

    if (errors) console.error('Error creating content', errors)
  }
  if (template) {
    // Create template and show it on frontend

    const { text: templateId, errors } = await playground.run({
      code: `<?php
      include 'wordpress/wp-load.php';
      wp_set_current_user(1);
      
      $template_id = wp_insert_post([
        "post_author" => 1,
        "post_type" => "tangible_template",
        "post_title" => ${JSON.stringify(title)},
        "post_content" => ${JSON.stringify(template)},
        "post_status" => "publish",
        "meta_input" => [
          'style' => ${JSON.stringify(style)},
          'script' => ${JSON.stringify(script)},
        ]
      ]);

      echo $template_id;
      exit;
      `,
    })

    if (errors) console.error('Error creating template', errors)

    if (templateId) {
      await playground.goTo(`/?template_id=${templateId}`)
    }
  }
}
