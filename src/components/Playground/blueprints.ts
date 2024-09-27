import type { Blueprint, Step } from '@wp-playground/client'

export const mergeBlueprints = (b1: Blueprint, b2: Blueprint) => ({
  ...b1,
  ...b2,
  steps: [...(b1.steps || []), ...(b2.steps || [])],
})

/**
 * A blueprint is a set of steps to initialize the Playground environmennt
 * @see https://wordpress.github.io/wordpress-playground/blueprints-api/index
 */
export const defaultBlueprint: Blueprint = {
  landingPage: '/wp-admin/post-new.php?post_type=tangible_template',
  steps: [
    {
      step: 'login',
      username: 'admin',
      password: 'password',
    },
    {
      // Install L&L
      step: 'installPlugin',
      pluginZipFile: {
        // resource: 'wordpress.org/plugins', slug: 'tangible-loops-and-logic',
        resource: 'url',
        url: `https://github-proxy.com/proxy/?repo=TangibleInc/template-system`,
        // url: 'https://raw.githubusercontent.com/TangibleInc/releases/main/plugins/tangible-template-system.zip',
        /**
         * Testing from development build of plugin
         * Must be served with CORS enabled - GitHub releases don't work.
         */
        // resource: 'url', url: 'http://localhost:3333/static/tangible-loops-and-logic.zip'
      },
    },
    {
      // Dismiss admin notice
      step: 'request',
      request: {
        url: '/wp-admin/options-general.php?page=tangible-loops-and-logic-settings&tab=welcome&dismiss_admin_notice=true',
      },
    },
    {
      // Run once to set up site
      step: 'runPHP',
      code: `<?php
include 'wordpress/wp-load.php';

// Set permalink structure
global $wp_rewrite;
$wp_rewrite->set_permalink_structure('/%postname%/');
$wp_rewrite->flush_rules();

// Site title
update_option('blogname', 'Loops & Logic');
`,
    },
  ],
}

export const codeExampleSteps: Step[] = [
  {
    // Run on every request
    step: `writeFile`,
    path: '/wordpress/wp-content/mu-plugins/entry.php',
    data: /*php*/ `<?php

// Admin notice to introduce playground

add_action( 'admin_notices', function() {
  if (isset($_GET['template_id'])
    || get_option('playground_admin_notice_dismissed')
  ) return;
  if (isset($_GET['dismiss'])) {
    update_option('playground_admin_notice_dismissed', true);
    return;
  }
  ?>
  <div id=dismiss-this class="updated notice notice-success is-dismissible">
    <p>This is a temporary site running entirely in the browser using <a href="https://wordpress.org/playground/" target=_blank>WordPress Playground</a>.</p>
  </div>
  <script>
    setTimeout(function() {
      const $el = document.querySelector('#dismiss-this .notice-dismiss')
      $el && $el.addEventListener('click', function(e) {
        e.preventDefault()
        window.location.search += '&dismiss=1'
      })
    }, 300) // Wait until WP creates admin notice
  </script>
  <?php
});

add_filter('template_include', function($template) {

// Provide minimal page to render template

if (!isset($_GET['template_id'])
  || !function_exists('tangible_template_system')
) return $template;

// Remove admin top bar on frontend

add_filter( 'show_admin_bar', function() {
  remove_action('wp_head', '_admin_bar_bump_cb');
  return false;
});

$content = tangible_template_system()->render_template_post(
  (int) $_GET['template_id']
);

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<style>html, body { margin: 0 }</style>
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php

echo $content;

wp_footer();
?>
</body>
</html><?php

exit;
});
`,
  },
]
