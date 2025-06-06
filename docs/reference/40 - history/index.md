# History

This is an archive of Loops & Logic plugin's version releases.

- Improve develop/build/test setup and workflow for plugin and modules

## 4.2.1

Release Date: 2025-04-21

- Atomic CSS: Utility classes and variables compatible with Tailwind v4
- Attachment loop type
  - Add field "audio" for audio file metadata from ID3 tags
  - Add field "filepath" for path to file
- Editor: Improve passing language definition of closed tags to formatter
- Elandel (template language in TypeScript): Start Expression and Interactivity modules
- Enable by default new features that reached stability; Can be deactivated in settings page
  - Elementor integration: Use new code editor based on CodeMirror 6
  - Object cache for parsed and pre-processed templates
- Export page: Improve select template types for L&L and Blocks
- Field tag: Support "." dot syntax for subfields (object/array/loop)
- Gutenberg integration: Improve enqueue editor assets in iframe
- Improve compatibility with PHP 8.4
- Improve development setup and tests for supported PHP versions with Docker and wp-env; end-to-end tests with Playwright; and running tests on plugin zip archive before publish
- Layout template type: Improve loading logic to pass through redirects
- REST API: Improve compatibility with Checkview
- Start new features: Content Structure and Form templates; ACF Extended integration; Tangible Fields integration
- WP Grid Builder facet integration with support for pagination; Thanks to @zackpyle!

## 4.1.8

Release Date: 2025-02-26

- Improve compatibility with PHP 8.4
- Improve dev/build/test setup and release pipeline

## 4.1.7

Release Date: 2024-11-21

- Fix Gutenberg enqueue inside editor iframe: Register Template block dependencies
  - [Block Editor: Enqueueing Assets in the Editor](https://developer.wordpress.org/block-editor/how-to-guides/enqueueing-assets-in-the-editor/#backward-compatibility-and-known-issues)
- Optional object cache for parsed and preprocessed template posts; See admin settings

## 4.1.5

Release Date: 2024-08-31

- Fix XSS vulnerability when visiting admin settings page URL

## 4.1.4

Release Date: 2024-06-13

- Editor and language integration
  - New HTML and CSS engines, linter, formatter
  - Organize general-purpose editor and template language features independent of WordPress
- Improve plugin zip package build/test/release workflow
  - File size ~42% smaller
  - Remove source maps for production
- Improve support for SQLite database integration
- Logic module: Build and evaluate conditional rules for frontend (TypeScript) and backend (PHP)
  - Tags: Logic, Rule, All, Any, Not
  - Integrate with If tag using attribute "logic"
- Pager module: Start new foundation for more modular pagination features
  - Tags: Pager, PagerButtons, PagerFields, PagerLoading
  - Support loop ID
  - First/last, previous/next actions
  - Multiple button groups and fields before/after loop
- Post loop: Get loop context in taxonomy archive to return current taxonomy and term
- Start features in progress (alpha)
  - Content: Template type for content structure templates
  - Views: Unified interface to edit and manage all template types (layouts, scripts, styles, assets, libraries)
- Table module
  - Fix error with method enqueue_table
  - Fix warning when sorting value is null instead of string
- Test environment with [wp-now](https://github.com/WordPress/playground-tools/tree/trunk/packages/wp-now)
  - Tests for supported PHP versions
  - End-to-end tests with Chromium
  - Verify plugin zip package

## 4.1.3

Release Date: 2024-03-22

- ACF Date/Time field: Add tests for field comparison with timestamps
- Base loop: Improve casting query parameter to array when non-string value is passed
- Beaver integration: Ensure Template module restores current post in context
- Taxonomy term loop: Handle case when include/exclude is given as integer ID
- Template save and format slugify: Use remove_accents() to convert all accent characters to ASCII characters, before creating slug with sanitize_title_with_dashes()

## 4.1.2

Release Date: 2024-03-15

- ACF integration
  - Date field types: Ensure unformatted value is passed to date conditions
  - Group, Flexible Content, Repeater: Correctly set up subfield loop after change to List loop type to support extended parameters such as offset/count/sort/filter
- Post loop: Handle case when extended query parameter for post/user/category/tag slug is not array
- Sass module: Revert to SCSS-PHP 1.11.1 to keep compatibility with PHP 7.4
- Taxonomy term loop: Correctly pass post object IDs to query

## 4.1.0

Release Date: 2024-03-12

- ACF integration
  - **Breaking change**: Date field types now get their default formatting from the field setting for Return Format. Previously the defaults were from site setting (Date field), "Y-m-d H:i:s" (Date/Time), and "H:i:s" (Time). Now they use the selected format in each field's settings, or ACF's default return format: "d/m/Y" (Date), "d/m/Y g:i a" (Date/Time), and "g:i a" (Time).
  - Improve handling of "format" and "locale" attributes
- Editor
  - Formatter
    - Add keyboard shortcuts to support formatting by entire document or selected lines
    - Start a fork of Prettier HTML formatter to customize based on template language definition
  - Linter: Improve HTML linter rule for unique ID so it applies only to static tags
  - Update CodeMirror modules and Prettier
- HTML module
  - Add comprehensive HTML test suite with test files from Parse5, Prettier, and Unified
  - Refactor to improve performance: ~3% faster
- Loop types
  - Consolidate everywhere that accepts a list to support comma-separated list and JSON array
  - Improve sort by field using "field_compare" 
  - List, Map, Map Keys: Support query parameters for base loop, such as offset, count, sort, filter, pagination
    - List: Use field name "value", like "sort_field=value"
    - Map keys: Use field name "key" or "value". Keep default order of keys as defined, unless "sort_field=key" is applied - previously was sorted alphabetically.
- Gutenberg integration: Template block: Remember previously selected template when switching tabs
- Sass module: Upgrade Sass compiler (scssphp) to 1.12.1, and CodeMirror Sass language support
- Taxonomy term loop: Ensure "post" attribute accepts list variable
- Template post types: Ensure templates always have a universal ID assigned, during post save and before exporting. This improves how duplicate templates are handled during import.
- Template tag/shortcode: Ensure no post matches if attribute "name" is an empty string - See [WP_Query matches *any* post when query parameter "name" is an empty string](https://core.trac.wordpress.org/ticket/60468)

## 4.0.2

Release Date: 2024-01-18

- ACF integration: For relational fields, apply loop query parameters such as sort, order, paged, and exclude
- Editor: Change key map to expand Emmet abbreviation to Shift+TAB, to prevent conflict with TAB to select autocomplete suggestion
- Framework: Improve plugin settings page styles
- Paginator: Improve how AJAX script is loaded
- Post loop: Support use of `exclude` and `include` together, which is not natively supported by WP_Query

## 4.0.1

Release Date: 2024-01-04

- Fix issues related to code reorganization: Mobile Detect and WP Fusion; Add integration tests to ensure no regression

## 4.0.0

Release Date: 2024-01-03

- [Documentation](https://docs.loopsandlogic.com/reference/template-system): Reference pages for developers and contributors, with technical details of how the codebase is organized.
- [Editor](https://docs.loopsandlogic.com/reference/template-system/editor/): New code editor based on CodeMirror 6 is enabled by default for template post types, Gutenberg, and ACF Template field. The old editor is still used for Elementor and Beaver Builder until integration is complete.
- Framework and Modules: Features have been organized into modules which can be independently built, documented, tested, and optionally published. This replaces the previous Plugin Framework and Interface module.
- [GitHub repository](https://github.com/tangibleinc/template-system): New home of the Template System source code and project, with better developer experience and social collaboration. Welcome to start new issues, pull requests, and discussions.
- Testing: Improve coverage of unit tests, and prepare foundation for end-to-end tests with headless browser and WordPress environment in Docker. This is an on-going effort to exercise and verify all features of the plugin.

Other improvements:

- ACF integration: Add Field tag attribute "acf_textarea" to apply formatting based on field settings
- Archive screen: Add bulk action to move selected posts to trash
- Assets edit screen: Improve documentation
- Atomic CSS: Generate CSS utility classes on demand.
  Similar to Tailwind, this feature uses a style engine called [UnoCSS](https://unocss.dev/) to generate CSS rules from utility classes found in an HTML template, every time it is saved. On the frontend, the generated styles are minified together, removing any redundant rules. Enable in plugin settings.
- Edit screen: Add Preview pane with auto-refresh
- Editor: Hyperlink extension - Add clickable link icon next to a valid URL; Improve color picker
- Import/Export
  - Add export rule to include/exclude template categories
  - Update PNG Compressor with better support for Firefox
  - Use compressed format (PNG) by default
- Show admin menu, edit screens, and template editor (Gutenberg, Elementor, Beaver) only to admins with `unfiltered_html` capability. On multisite installs, by default only network admins have this capability, not subsite admins.
- Update included libraries
  - HJSON, Select2, Chart.js, Mermaid, ..
  - Prism: Update library to 1.29.0 - Replace Clipboard.js with browser-native `navigator.clipboard`


## 3.3.1

Release Date: 2023-11-09

- Admin menu: For multisite installs, register menus per site, not network admin, because post types are site-specific and not shared across sites
- Remove use of deprecated function setImmediate when loading Select2; Fixes issue on import/export page

## 3.3.0

Release Date: 2023-11-02

- ACF integration
  - Flexible Content and Repeater field: Improve compatibility with PHP 8
  - Template field
    - Add support for editor inside repeater field
    - **Breaking change**: Make feature optional and disabled by default to prevent ACF from loading field assets (JS & CSS) on every admin screen; Enable in the new settings page 
- Admin settings page: Tangible -> Settings
  - Features under development: New editor based on CodeMirror 6
  - Optional features: ACF Template field
- Field tag: Add format shortcuts: join, replace, replace_pattern
- Format tag: Support capture groups for replace_pattern; When invalid regular expression is passed, emit a warning instead of throwing an error
- Gutenberg integration
  - Improve compatibility with standalone Gutenberg plugin
  - Remove dependency on lodash
- If tag: Pass attribute "matches_pattern" without rendering, to support regular expression with curly braces; Use syntax `<If check=".." matches_pattern="..">`; Support dynamic tags in attribute "matches_pattern" without delimiters; Display warning instead of throwing error for invalid pattern syntax
- Import/export
  - Add new template package format using browser-native gzip compressor and encoded as PNG image file; This could be useful for uploading and sharing on forums where JSON is not suitable
  - Ensure JSON and SVG file types are allowed during import
- Inteface module: Build Select2 from full version instead of minimal to improve compatibility with other plugins like ACF and WooCommerce which bundle their own Select2 library 
- Menu loop: Return empty list if menu not found
- Post loop: Add field "modified_author" and "modified_author_*"
- Taxonomy term loop: Support taxonomy fields created with PODS

## 3.2.9

Release Date: 2023-07-17

- Format tag
  - Format list index: Fix warning from array_shift()
  - Support capture groups for replace_pattern, for example: replace_pattern="/(\d{3})/" with="$1"
  - When invalid regular expression is passed, emit a warning instead of throwing an error

## 3.2.8

- Date module: Upgrade Carbon date library to version 2.68.1 with better PHP 8.x compatibility
- Format tag
  - Add list and string format methods
    - index, offset, length, words - Cut a piece of string by position
    - split, join - Split string to list, and back
    - trim, trim_left, trim_right - Remove whitespace or given characters from start/end 
    - prefix, suffix - Add string before or after
    - reverse - Reverse a string or list
  - Regular expressions - replace_pattern, match_pattern
  - Multibyte string: uppercase, lowercase, capital, capital_words
  - Format list
    - Format every item in a list
    - Nested list formats
- If tag
  - Add comparison "matches_pattern" to match value to regular expression
  - Improve comparison "includes" to support a List loop instance, for example: `<If acf_checkbox=field_name includes value=some_value>`

## 3.2.7

Release Date: 2023-06-01

- Link tags: Ensure any null is converted to empty string before passing to str_replace - Compatibility with PHP 8.x

## 3.2.5

Release Date: 2023-05-27

- Elementor integration: Improve dynamic module loader by removing AJAX library from dependency list of Template Editor script
- Post loop
  - Improve handling when called directly without "type" or "post_type" parameter
  - For loop types that inherit from post loop, such as attachment, ensure backward compatibility with deprecated query parameter "type"

## 3.2.3

Release Date: 2023-05-18

- Elementor integration: Enqueue dynamic module loader only when inside preview iframe
- Gutenberg integration: Improve compatibility with WP 6.2.1 - Remove the do_shortcode filter workaround that was necessary in previous versions; See https://core.trac.wordpress.org/ticket/58333#comment:59
- List and Map tag
  - Add Item/Key tag attribute "type" for value type: number, boolean, list, map
  - Improve Item/Key tag to treat single List or Map inside as direct value, instead of converting it to string
- Loop tag
  - Add attribute "post_type" as the recommended way to create a post loop with custom post type
    This makes it distinct from attribute "type", which creates an instance of a loop type (such as "post" or "user") and only falls back to post loop if there's no loop type with the same name
  - Fix pagination issue when attribute "tag" is used

## 3.2.1

Release Date: 2023-05-08

- Elementor integration: Ensure dynamic modules are activated inside preview iframe
- Format tag: Add attribute "remove_html" to remove HTML and make plain text
- Post loop: Improve sticky posts - Ensure "orderby" is only applied to non-sticky posts

## 3.2.0

Release Date: 2023-04-26

- Add JSON-LD tag: Create a map and generate script tag for [JSON Linked Data](https://json-ld.org/)
- Add Raw tag: Prevents parsing its inner content; Useful for passing literal text, such as HTML, to other tags and tag attributes
- Format tag
  - Add attributes "start_slash" and "end_slash" to add slash to URL or any string; Use "start_slash=false" and "end_slash=false" to remove slash; These can be combined in one tag
  - Improve support for replace/with text that includes HTML
- HTML module: Improve "tag-attributes" feature to support dynamic tags
- Layout template type
  - Add theme position "Document Head" for adding Meta tags, JSON-LD schema, or link tag to load CSS files
  - Add theme position "Document Foot" for adding script tag to load JavaScript files
- Loop tag
  - Add attribute "sticky" for improved sticky posts support
    - Without sticky set, treat sticky posts as normal posts; this is the default behavior (backward compatible)
    - With sticky=true, put sticky posts at the top
    - With sticky=false, exclude sticky posts
    - With sticky=only, include sticky posts only
  - Deprecate "ignore_sticky_posts" due to WP_Query applying it only on home page
- Query variable type: Support passing loop attributes via AJAX, such as for pagination
- Url tag
  - Add attribute "query=true" to include all query parameters in current URL
  - Add attributes "include" and "exclude" to selectively pass query parameters by name; Accepts comma-separated list for multiple names

## 3.1.9

Release Date: 2023-04-06

- Format: Improve handling of spaces for kebab and snake case
- If tag
  - Deprecate "is_not" in favor of "not", which supports all condition types and operators including "is"
  - Convert "is_not" to "not" and "is" for backward compatibility
- Improve PHP 8.2 compatibility
- Template post types: Fix drag-and-drop sort in post archive

## 3.1.8

Release Date: 2023-03-15

- Gutenberg integration
  - Improve content filter logic to protect template HTML
    - Ensure it applies only when inside do_blocks before do_shortcode
    - Handle edge case when a template shortcode is rendered inside an HTML attribute, and its content is a URL
    - Support block themes
  - Improve getting current post ID when inside builder

## 3.1.5

Release Date: 2023-03-02

- Calendar loop types
  - For week number, use Carbon method isoWeek() instead of format('W') which adds unnecessary prefix "0" (zero)
  - Month loop type: Ensure the "year" attribute is taken into consideration; Organize how the attributes "year", "quarter", "from" and "to" are handled
- Format tag: Add support for replace/with string that includes HTML
- Gutenberg integration
  - Improve content filter logic
  - Improve getting current post ID when inside builder
  - Improve workaround for Full-Site Editor bug
    https://github.com/WordPress/gutenberg/issues/46702
- Redirect tag: Disable when inside page builder, AJAX, or REST API
- Switch tag: Improve converting non-default "When" to "Else if"
- Template post types: Remove max-width to let editor take up the full available width
- WP Grid Builder integration: Improve compatibility for PHP version before 7.3

## 3.1.3

Release Date: 2023-02-27

- Add WP Grid Builder integration with Tangible Template widget
- Embed module: Use CSS feature for aspect-ratio, and remove padding-top workaround
- Gutenberg integration
  - Improve compatibility with Full-Site Editor, which is still in beta stage
  - Solve issue with shortcode inside pagination loop - Protect template HTML result from Gutenberg applying content filters, such as wptexturize and do_shortcode, after all blocks have been rendered
- Sass module: Solve issue with first style rule selector - Prevent compiler from adding @charset rule or "byte-order mark", which are only valid for CSS stylesheet as a file, when it detects a multibyte character within the Sass source code
- Table module: Make column filter case-insensitive, and add support for multibyte characters
- Template post types
  - Add support for user option "Disable the visual editor when writing" by preventing it from filtering template content
  - Improve generating template slug from title, including converting em dash to regular dash

## 3.1.2

Release Date: 2023-02-01

- Improve compatibility with PHP 8.2
- Loop: Improve logic to set current post as loop context for templates loaded inside shortcodes and builder-specific post loops, such as Elementor Loop Grid widget and Beaver Post Loop
- Plugin framework: Fix invalid hook name of ready action specific to module and version
- Post Loop: Add alias "current" (same as "today") for parameter "custom_date_field_value"
- Taxonomy Term Loop: Support multiple IDs for parameter "post"

## 3.1.1

Release Date: 2022-12-30

- Loop: Improve getting default loop context for search results archive
- Sass module
  - Upgrade compiler library to ScssPhp 1.11.0
    - Improve compatibility with newer CSS features such as variables, functions, selectors, media queries
    - Improve compatibility with PHP 7 and 8
    - Improve error handling
  - Remove Autoprefixer and its dependency CSS Parser; Internet Explorer no longer supported
  - Improve passing Sass variables - Handle all known value types to be compatible with new compiler
  - Convert any compiler error message to CSS comment
- JavaScript and Sass variable types: Make default value type "raw" (unquoted) instead of "string" (quoted)
- Template post types
  - Support any database table prefix including `wp_`
  - Remove default slug metabox in edit screen to support AJAX save; Related issue in WP core: [Can't change page permalink if slug metabox is removed](https://core.trac.wordpress.org/ticket/18523)

## 3.0.1

Release Date: 2022-10-05

- Calendar loop types
  - Improve handling in case invalid values are passed
  - Week loop: Correctly handle January which can have a week row that starts in the previous year
- HTML Hint: Add exception for Shortcode tag to allow self-closing raw tag
- Loop and Field tags: Get current post context inside builder preview when post status is other than publish
- Template editor: Improve compatibility with Beaver Builder's CSS

## 3.0.0

Release Date: 2022-09-13

- ACF select: Support looping field with single select value
- ACF image url field: Support size attribute
- Add feature module: Mermaid - Diagram library
- BaseLoop: Add `sort_date_format` parameter when using `sort_type=date`, to convert from date format to timestamp for sorting
- Compatibility with PHP 8.1
- Compatibility with WordPress 6.0.2
- Dynamic module assets loader - Support loading scripts and styles on demand, such as when page builders fetch and insert dynamic HTML
  - Implemented: Embed, Glider, Mermaid, Prism, Slider
  - In progress: Chart, Paginator, Table
- Gutenberg, Beaver, and Elementor integrations
  - Ensure current post as default loop context in page builder preview, saved templates, builder-specific loops, and template shortcode
  - Remove unused styles
- HTML module: Add special tag attribute named "tag-attributes" for dynamic attributes with or without value
- HTML Lint library
  - Fork and wrap in unique namespace to improve compatibility with Customizer and other plugins that may load a different version
  - Modify core/rules/tag-pair.ts to be case-sensitive for tag names
- Import & Export
  - Clear any cached field values such as compiled CSS when overwriting an existing template
  - Export all template types with orderby=menu_order, to ensure that location rules are applied in the correct priority
  - Support templates with post status other than publish: draft, future, pending, private (skip auto-draft, inherit/revision, and trash)
- If tag: user_role condition
  - Add alias "admin" for administrator
  - Support all common comparison operators
  - Support shortcut for includes: user_role=admin
- Layout template type
  - Correctly apply rule for "Singular - All post types"
  - Improve support for block themes
  - Render page content before head to support Meta tag in block themes
- List and Loop tag: Add attribute "items" to create a list from comma-separated values
- Logic module: Improve rules
  - For subject "list", add support for all common comparisons
  - Convert subject to list as expected: any_is, any_is_not, all_is, all_is_not, any_starts_with, all_starts_with, any_ends_with, all_ends_with
  - Convert value to list: in, not_in
  - For starts_with and ends_with, if subject is list then check first/last item
- Map tag: Add "type" attribute for Key tag to specify value type: number, boolean, string, map, list
- Script and Style template type: Add location rule "Nowhere" to disable loading
- Start Comment loop type
- Start developer docs: architecture, plan, design system
- Style template type: Load earlier at wp_head action priority 9, before default (10)
- Template archive view
  - Correctly show location rules for imported templates
  - Support select and copy template ID
- Template editor
  - Disable AJAX save until following issues are resolved
    - Form nonce expiring after one day
    - Reliably save the post slug
    - Show confirmation dialog on window unload only when necessary
  - Make editor full height of template
  - Remember and restore current tab in template edit screen

## 2.4.4

Release Date: 2022-05-19 

- Add variable type "math" to get/set variables for Math tag
- If tag: Add condition "query" to check if query variable exists
- Improve compatibility with Elementor v3 - Use register_controls() instead of deprecated _register_controls()
- Loop tag: Add shortcut for List loop type to pass comma-separated list with `<Loop items="..">`
- Paginator
  - Add option to scroll to top on page change
    - Set attribute `scroll_top=true`
    - Optionally, attribute `scroll_animate` can be "false", or a number for duration in milliseconds (default: 300)
  - Support ACF relationship field
  - Support `orderby=random` by passing list of IDs
- Template editor: Correctly save template category; Fix browser autocomplete changing checkbox values
- Template variable type: Pass attributes from Get tag as local variables

## 2.4.3

Release Date: 2022-05-12

- Add Mobile Detect module
  - Variable type "device"
    - `<Get device=type />` is mobile, tablet, or desktop
  - Device conditions
    - `<If device=mobile>`
    - `<If device=tablet>`
    - `<If device=desktop>`
    - `<If not device=desktop>`
- Attachment loop: Add field for file "size" and "type"
- Base loop
  - Filter by field - For `field_compare` parameter, use the same common comparison operators as If tag
  - Set default loop context on author and taxonomy term archive pages
- Format tag
  - Add case "lower" and "upper"
  - Consolidate case conversions: camel, kebab, snake, pascal
- Post loop: Taxonomy query
  - Add parameter `child_terms=true` to include child terms for hierarchical taxonomies
  - Improve `terms=current` to support taxonomy term loop as well as archive page
- Taxonomy term loop
  - Add alias "terms" for "include"
  - Field `posts` gets posts of any post type that belong to current term
- Test compatibility with WordPress 6.0

## 2.4.2

Release Date: 2022-05-03

- Improve compatibility with Local by Flywheel

## 2.4.1

Release Date: 2022-04-26

- ACF: Support sort/order posts in relationship field
- Base loop: Filter by multiple fields: field_2, field_value_2, ..
- Calendar loop
  - Support month given by name instead of number
  - Catch error thrown by Carbon date library if invalid date string is given
- Format tag
  - Support multiple replace values: replace_2, with_2, ..
  - Add format type "url_query" to encode URL query string
- If tag
  - Add shortcut for operator with value, such as `is=".."` instead of is `value=".."`
  - Support multiple operators with value, such as combining `more_than` and `less_than`
  - Add condition If variable="x" as shortcut for If check="{Get x}"
- Layout template type: Add location rule for matching URL route with wildcard support
- Math tag: Add modulo operator `%`
- Post loop
  - For auto-generated excerpt, wrap read more text in link to post
  - Query by multiple fields: custom_field_2, custom_field_value_2, ..
- Shortcode tag
  - Add attribute "debug" to inspect tag attributes passed
  - Improve use inside tag attribute
- Start media tags based on WP core shortcodes: Audio, Gallery, Playlist, Video
- Taxonomy term loop
  - Add query parameter children=true to get only child terms
  - Add field "posts" to get loop instance of posts that belong to current term
  - Taxonomy tag: Improve to loop current post's taxonomy terms;
  - Term tag: Shortcut to get a field from current taxonomy term
- Vidstack Player: Add required callback for permission check

## 2.4.0

Release Date: 2022-03-31

- Start HyperDB integration

## 2.3.9

Release Date: 2022-02-28

- Fix issue with backslash escape when saving precompiled CSS
- URL tag: Solve issue with getting URL query

## 2.3.7

Release Date: 2022-02-23

- Add Query variable type
  - Support multiple loops reusing same query
  - Set default query with variable name "default"
- Add Template Category for organizing templates
  - Add admin column and filter
  - Support import and export
- Template archive screen: Sortable post type
  - Improve table row display while being dragged/sorted
  - Disable drag/sort when Quick Edit panel is open

## 2.3.6

Release Date: 2022-02-16

- Loop tag: Ensure previous total is correctly set to 0 if last loop had no items
- Post loop: Add alias "tag" for taxonomy "post_tag"
- User loop: Add field "locale" for user's Language setting, with fallback to site locale
- User condition: Support multiple values for If user_role includes
- HTML module: Support passing empty string as attribute value, distinct from attribute without value
- Improve compatibility with PODS

## 2.3.5

Release Date: 2022-02-09

- Add ACF Time field type
- Default loop context
  - Handle case when called too early, for example before action 'wp'
  - Clone WP_Query object so it's not affected when posts rewind at the end of loop
- If tag: Add date conditionals (before/before_inclusive/after/after_inclusive) for check, field, and ACF date/date-time/time fields
- If and Field tag: Add "from_format" attribute to convert from non-standard date format
- Improve formatting ACF Date and Date/Time fields
- Improve template preview on page builder initial load
- Improve Beaver/Elementor/Gutenberg integrations
- Post loop: Pass optional attribute reverse=true to field "ancestors"

## 2.3.3

Release Date: 2022-02-08

- Add Async tag: Asynchronously render template via AJAX
- Add Cache tag: Cache rendered template using Transient API, which supports external object cache such as Memcached, Redis, or LiteSpeed
- Add Random tag: Generate a random number with attributes "from" (default: 1) and "to" (default: 99)
- Add Taxonomy and Term tags: Shortcut for current post's taxonomy/terms
- Add User tag: Shortcut for current user's field
- Ensure logic rules exist for all ACF field types
- Fix warning when admin menu does not include Tangible section for non-admin users
- Loop paginator
  - Refactor and consolidate common logic with async render
  - Remove deprecated method with Paginate tag
- Simplify Timer tag: start/check/stop
- Taxonomy term loop: Add field "link" to create an anchor tag with term title
- User loop: Optimize for getting current user; Add field "role" as alias of "roles"

## 2.3.2

Release Date: 2022-01-31

- Improve PHP 8 compatibility
- Template edit screen: Ensure post slug is passed to AJAX save
- Add Timer tag for profiling render time of template sections

## 2.3.0

Release Date: 2022-01-19

- Template location rules
  - Support include/exclude by taxonomy terms
  - Support extensible theme positions, such as header, footer, and parts
    - Add theme integrations: Astra, Kadence
    - Beaver Builder Theme is not designed for replacing theme positions
  - Start plugin integrations: Beaver Themer, Elementor Pro
- Template edit screen
  - Remove extra metaboxes added by WP core or other plugins/themes
  - Use AJAX save for the publish button, except for new or draft posts which require form submit and page reload
  - Ensure universal ID is passed when saving via AJAX
- Template script: Load *after* content, unlike styles which are loaded before content
- Template assets: Improve inline documentation
- Importer: Create new universal ID for duplicates in "keep both" mode
- Format tag: Correctly apply decimal=0 for format type "number"
- Post loop: Order by custom field is higher priority than normal "orderby" parameter

## 2.2.9

Release Date: 2021-12-22

- Universal ID - Unique and immutable across sites
  - Implement for all template types
  - Dynamic blocks in supported builders
  - Import/export
- Exporter: Save and restore settings from browser local storage
- Gutenberg integration: Disable links in blocks when inside editor preview (Elementor and Beaver already does this by default)
- Format tag: Correctly trim by length
- Form tag: Improving default content type action "create"; Add redirect on success/error
- Add ACF field type "Tangible Message" - Based on default message field, it renders a template instead of plain text
- Add build script to remove sourcemap comment from vendor libraries used for CodeMirror editor

## 2.2.7

Release Date: 2021-11-26

- Loop pagination: Automatically pass variables used in inner template
- Fix typo in importer message for "Layouts"
- Improve handling when block control config type is empty
- If tag: Improve handling when else node has no attributes property

## 2.2.4

Release Date: 2021-11-18

- Location field for Layout template: Improve updating selected rule parts on initial render
- Field tag: Add attribute "custom" to get custom field whose name overlaps with an alias, for example, "name"
- Start Form module - Work in progress
  - Add Form tag with local tags: BeforeSubmit, Success, Error, Mail
  - AJAX form handler
  - Form actions with dynamic variables and templates

## 2.2.3

Release Date: 2021-11-11

- Make template assets map available as Sass and JS variables (See "Assets" tab for documentation)
- Taxonomy term loop: Add query parameter "name" as alias of "include"
- Improve user access control for Template module
- New templates are assigned "universal ID", which is unique and immutable across sites

## 2.1.7

Release Date: 2021-11-02

- Add Exit and Catch tag
- Add variable types: local, sass, and js
- Template tag and shortcode: Pass attributes to template as local variables
- Update CodeMirror library: Relax lint rules for Sass "property-sort-order" and HTML "id-unique"
- Improve admin menu organization

## 2.1.6

Release Date: 2021-10-20

- Add menu loop type
- Calendar loop types
  - Add "year" loop
  - Add "locale" attribute to translate names
  - Add "format" attribute for field "date"
  - Add fields: name, short_name, month_with_zero, week, weekday

## 2.1.5

Release Date: 2021-10-07

- ACF fields: Add special subfields for getting field config, such as labels and choices
- Base loop: Improve handling of query argument "count"
- Template editor: Solve Gutenberg issue with keyboard shortcuts

## 2.1.4

Release Date: 2021-09-30

- Template editor improvements
  - Scope all CSS styles under wrapper class so editor can co-exist with other instances of CodeMirror
  - Implement line wrapping feature
  - Document common keyboard shortcuts: https://loop.tangible.one/overview/template-editor
  - Update CodeMirror add-ons and modes

## 2.1.3

Release Date: 2021-09-29

- Url tag: Support attribute "query" without value
- Improve welcome message; Add link to new documentation site
- Move WP Fusion integration from Pro plugin

## 2.1.2

Release Date: 2021-09-22

- Improve escaping outputs
- CodeMirror editor improvements: Update dependencies; Implement code folding add-on; Improve close tag add-on behavior

## 2.1.0

Release Date: 2021-09-15

- Importer: Ensure escape characters are preserved in template fields
- Base loop: Improve field_compare=exists to recognize loop instance

## 2.0.7

Release Date: 2021-09-07

- Initial release of Template Assets feature to import/export media attachments
- Clear compiled styles when Style field is empty
- Add loop type "acf_group" for ACF group field
- Add field "acf_key" to get field by ACF key
- Export: Add setting for package name
- Attachment loop: Add field "mime" for MIME type

## 2.0.5

Release Date: 2021-09-05

- Importer: Show links to newly created templates
- Loop default context: Improve checking if we're already inside current post content
- Beaver Builder integration: Improve checking if current post is being edited in the builder
- Add workaround to preserve escape characters in template fields

## 2.0.3

Release Date: 2021-09-01

- Chart tag
  - Add ticks options - percentage, before text, after text
  - Add tooltip values
  - Add data labels

## 2.0.2

Release Date: 2021-08-19

- Improve support for nested ACF flexible content and repeater fields
- Post Loop: Improve query by raw field value
- Base Loop: Improve filter/sort by field

## 2.0.0

Release Date: 2021-08-10

- Import/export templates
- Support third-party integrations

## 1.2.8

Release Date: 2021-07-20

- Add template include filter for Layout templates
- Prepare interface for third-party integrations, including Loops & Logic Pro
- ACF "editor" field type (WYSIWYG): Format field value by default

## 1.2.7

Release Date: 2021-07-16

- Simplify logic to reliably prevent infinite loop for default loop context and post content in general

## 1.2.6

Release Date: 2021-07-10

- Loop module: Improve logic to prevent infinite loop, when using default loop context (global $wp_query)
- Gutenberg and Elementor integration: Improve handling template style/script

## 1.2.3

Release Date: 2021-07-01

- If tag: Add ACF field type conditions, such as acf_checkbox, acf_relationship, etc.
- Taxonomy and taxonomy term loop: Improve sort by custom field

## 1.2.1

Release Date: 2021-06-30

- Taxonomy term loop: Add query parameters "hide_empty", "orderby_field", "orderby_field_number"; Add field "count"
- Template post types: Add "name" field (post slug) in admin edit screen and Template tag
- Template tag: Add "theme" attribute to load theme templates: sidebar, search, and part
- Layout post type: Add "Theme parts" settings to load alternate header or footer
- Loop tag: Add logic to prevent infinite loop when a post loads itself; Improve handling default loop context (global $wp_query) when used without "type" attribute, especially in the context of Beaver template and layout

## 1.2.0

Release Date: 2021-06-22

- Add ACF field type "Tangible Template" (under Content section)
- Add template types Style, Script, and Layout, with theme location rules builder
- Gutenberg, Elementor, Beaver Builder: Add ability to select from saved templates
- Field tag: Add attributes "template" and "acf_template" to render Template field
- If tag: Add conditions for main query: "singular" and "archive" (category, tag, taxonomy, post, author, and date)
- If tag: Add common operators "in" and "not_in" to check if value is in given list
- Template tag: Add attribute "type" for layout, style, script, block

## 1.1.8

Release Date: 2021-06-10

- Attachment Loop: Add fields "srcset" and "sizes" for responsive image attributes
  - For featured image in post loop, the field names are "image_srcset" and "image_sizes"
- Field tag: Add attribute "item" to get an item from a list, using index starting with 1
- Meta tag: Support "viewport" attribute

## 1.1.6

Release Date: 2021-06-02

- Chart tag: Add options chart_title, chart_legend, axis_x, axis_y
- HTML module: Improve handling JSON object and array in tag attributes
- Template shortcode: Support passing template as inner content

## 1.1.3

Release Date: 2021-05-21

- Publish to WordPress plugin directory


== Pre-History ==

Old versions before publishing to WP plugin directory

## 1.1.2

Release Date: 2021-05-17

- Add template post type action "Copy to new draft"
- Remove PHP short tags

## 1.1.1

Release Date: 2021-05-15

- Prepare for WordPress plugin repository
  - Improve plugin welcome screen, description page, tags
  - Add "Stable tag" to readme.txt with specific version
  - Sanitize template post fields on save
  - Remove PHP short tags
  - Remove plugin update checker by using Git branch "variant/without-updater" of plugin framework

## 1.1.0

Release Date: 2021-05-14

- Start Chart tag
- Use generic "post" loop type if default WP query returns multiple post types

## 1.0.7

Release Date: 2021-04-27

- Link: Improve handling of page anchor for current page
- Post loop: Add field "menu_order"

## 1.0.6

Release Date: 2021-04-16

- Meta tag: Add shortcuts for title, description, image
- Add support for id=current in core loop types: Post (and custom post type), taxonomy term, user
- Post loop: Make fallback excerpt optional with auto=true; Improve generation of fallback excerpt; Add attributes "words" and "more"
- Date tag: Add attribute "timestamp" as shortcut to format attribute value (or tag content) as timestamp; Add support for values "start_of_day" and "end_of_day"

## 1.0.5

Release Date: 2021-04-08

- Link
  - Improve handling of URL protocol such as "tel"
  - If "href" attribute is telephone number, ensure valid HTML by replacing spaces with dashes
- Format, Field tags: Add attribute "replace" and "with" for string replacement

## 1.0.3

Release Date: 2021-03-26

- Support query parameters "count" and "offset" for all loop types
- Template post type: Add Style/Script fields that enqueue once per template
- Template editor: Update CodeMirror, with better default options; Improve JS/CSS/SCSS lint rules; Improve handling tab with multiple editor instances

## 1.0.0

Release Date: 2021-03-15

- Slider: Support loop option with multiple items per slide
- Beaver integration: Solve Beaver's CSS styles interfering with Template editor on settings panel float
- Paginator: Use class instead of data attribute for faster query of subscribers
- Add Switch/When tags - Shortcut to generate a series of If/Else conditions

## 0.9.9

Release Date: 2021-03-11

- Post loop
  - For orderby "menu_order", default order is descending for expected order
  - Add field "edit_url"
- Add Redirect tag
- Improve support for "count" attribute with field loops, including ACF repeater and flexible content
- Get tag: Add shortcut to get loop variables from a field, using "field", "acf_repeater", etc.
- Shortcode tag: Ensure attribute values are rendered

## 0.9.8

Release Date: 2021-02-16

- Add Template tag and shortcode: Render a template post by ID or title
- Add Shortcode tag
  - Render shortcodes inside a template
  - Add parameter "render" to control if/when dynamic tags in inner content are rendered
- Embed tag: Improve responsive behavior for non-iframe embeds such as audio player
- Add HelpScout button in plugin settings screen for live support

## 0.9.7

Release Date: 2021-01-29

- Template editor
  - Update CodeMirror and its modules
  - Update HTML Lint rules to accept attributes starting with uppercase
- Taxonomy term loop
  - Add field "url" for term archive
  - Improve support for hierarchical terms
    - Add query parameter "parent" to get terms by its parent term's ID or slug
    - Add query "parents=true" to get top-level parent terms only
    - Add field "children" to get child terms of current term
    - Add field "ancestors" to get ancestor terms (parent and their parents) of current term
- Post loop
  - Improve support for hierarchical posts
    - Improve query parameter "parent" and "children"
    - Add field "ancestors" to get ancestor posts

## 0.9.6

Release Date: 2021-01-27

- Support offset and count to modify main query from URL
- Divi integration: Tangible Template widget - Work in progress

## 0.9.5

Release Date: 2021-01-19

- Elementor integration: Tangible Template widget
- Slider tag: Add options "items" and "responsive" to show multiple item per page like a carousel
- Field and Loop tag: Add attribute from=options to get fields from ACF options pages

## 0.9.4

Release Date: 2021-01-13

- Date tag
  - Always use default timezone from site settings
  - Add attributes timezone, ago, add, subtract
- Add support for ACF Link field type
- Improve styling for template editor in Beaver Builder

## 0.9.3

Release Date: 2020-12-23

- Base loop: Implement custom sort by field, integrated with pagination and offset
- Loop paginator: Rewrite front/backend logic to support large number of pages with custom sort and pagination
- Slider
  - Add options: auto, loop, drag, controls, pager, speed, pause
  - Improve default options when one or zero slides
- ACF gallery field: Add option `count` to limit number of images

## 0.9.1

Release Date: 2020-12-17

- Support getting currently queried object of an archive page as field loop: archive_author, archive_term, archive_post_type
- ACF integration: Support repeater and flexible content field types for non-posts (user and taxonomy term)

## 0.9.0

Release Date: 2020-12-14

- Field tag: Support ACF field types for taxonomy terms
- Field tag: Improve handling of ACF date and date-time fields to support any return value
- Slider module: Adaptive height false by default
- Start dynamic module loader to support when page builders fetch and insert HTML that requires scripts and styles
- Links: Set site root as base URL if outside of views template context
- Post loop: For parent and image fields, ensure current post of $wp_query

## 0.8.7

Release Date: 2020-12-07

- Start welcome page for plugin onboarding
- Performance optimization of HTML parse and render
- Embed tag: Responsive by default
- Date tag: Add attribute "all_locale" to get/set default locale for subsequent use of Date tag
- Site tag: For variable type "site", such as name and description
- Improve support for absolute or relative route for link and image URLs
- ACF field group: Ensure unique and static name on registration

## 0.8.6

Release Date: 2020-11-26

- Table module
  - Support template when table is empty
  - Improve sort/filter by column values
  - Refactor pagination algorithm to improve UI for large number of pages

## 0.8.3

Release Date: 2020-11-17

- Taxonomy term loop: Add field parent as loop instance; Update fields definition
- Taxonomy loop: Add work-around for WP core issue with getting taxonomies by name, if it was registered with multiple post types; see https://core.trac.wordpress.org/ticket/27918
- For Tangible Views theme, improve handling relative URLs and enqueue in link and script tags

## 0.8.1

Release Date: 2020-11-06

- Date tag: Improve error handling; Support operations: set/get locale, add, subtract, ago, duration
- Table tag
  - Support template for when table is empty
  - Add/remove class during fetch data, for styling purpose
  - Improve horizontal overflow container
- Calendar loop types: quarter, month, week, weekday, day
- Base loop: Support extended sort by field

## 0.7.8

Release Date: 2020-10-15

- AJAX module: Improve behavior when no other Tangible scripts are loaded

## 0.7.7

Release Date: 2020-10-14

- If tag: Add list attribute to check if list is not empty
- List tag: Support first argument as shortcut for name
- List and Map tags: Support passing JSON string
- Loop and Field tags: Improve support for getting field of list and map

## 0.7.5

Release Date: 2020-10-06

- Format tag: Add uppercase, lowercase, capital, capital_words
- If tag
  - Evaluate logic variable type for complex conditions
  - Add attribute any=true, to combine conditions as OR statement
- Loop tag: Improve support for default loop context from $wp_query
- Post loop - Add fields:
  - publish_date - Publish date
  - modify_date - Modify date
  - post_class - Post classes - See https://developer.wordpress.org/reference/functions/post_class/
- Table module: Dynamic table with sort/filter/pagination via AJAX

## 0.7.1

Release Date: 2020-09-16

- Taxonomy term loop: Improve support for custom taxonomies
- Conditional logic UI and If tag
  - Support extending existing rule
  - Improve show/hide available values based on selected operand
- Integrate Interface modules: Slider and Glider (fullscreen gallery slider)

## 0.6.7

Release Date: 2020-09-14

- Loop tag: Add attribute "times" to repeat X times (a list loop of indexes starting from 1)
- Load tag: Improve handling style/script path and URL
- Field group: Improve handling location rule groups
- File field: Support option "extensions" to limit accepted file extensions
- Improve support for ACF field types: select, multi-select, date, date-time, editor, post, flexible
- Loop and Field tags: Add shortcut "user" for user field
- User loop: Improve handling filtered fields

## 0.6.2

Release Date: 2020-09-10

- Advanced Custom Fields integration: Support all field types
- Support content structure templates in Tangible Views theme
  - Content types
  - Field groups
  - Taxonomies
- Improve support for templates and module scripts/styles on admin side

## 0.6.1

Release Date: 2020-09-08

- Start content structure tags: create post types, field groups, taxonomies, user roles
- Support template lifecycle actions on admin side
- Map tag: Add shortcut attributes for list and map
- Improve code editor styling

## 0.6.0

Release Date: 2020-09-03

- Template post type with code editor
- Add Template tag

## 0.5.9

Release Date: 2020-09-02

- Loop module
  - Post loop
    - Query by author, category, tag, taxonomy
    - Query by publish date and date field
    - Seach by keyword
    - Order by field, id, author, title, name, type, date, modified, random, comments, relevance, menu
  - Taxonomy and TaxonomyTerm loop: queries and fields
- Template module
  - Improve route matching logic with wildcards "*" (single route) and "**" (multiple routes)
  - Route tag: Support negative index to get last part(s) of route with the "~" operator
  - Add Setting tag; Add variable type "setting" for site settings

## 0.5.4

Release Date: 2020-08-24

- Update dependencies
- Include Tangible Interface module for further integration: date picker, sortable, table

## 0.5.2

Release Date: 2020-08-15

- Add Meta tag for SEO meta: title, author, description, image
- Post loop: Support passing WP_Query instance directly
- Beaver template module: Improve editor styling
- Plugin framework: Theme updater for use by Tangible Views theme

## 0.4.8

Release Date: 2020-08-08

- Logic
  - Add route conditions
  - Compare correct value for ends_with
  - Add comparisons for arrays - any_starts_with, all_starts_with, any_end_with, all_end_with
- Add tag Shortcode

## 0.4.6

Release Date: 2020-08-04

- Beaver Builder integration: Use Tangible CodeMirror editor for Template module

## 0.4.5

Release Date: 2020-08-03

- Field tag: Support attributes for loop type fields, like user=full_name
- Loop tag: Support user_field attribute; Improve support for attributes that get same loop type as its name
- Get/Set tags: Trim string value by default upon set
- Improve support for fields that return a loop instance
- Variable type template: Add attribute `render=false` to allow displaying template as is
- Prism module: Add attribute `render`, to show rendered result as code block
- Improve loop paginator

## 0.4.2

Release Date: 2020-07-31

- Post loop
  - Support fields of a loop instance: author, parent, children, image
  - Improve field excerpt to accept parameters
- Field and field keys loop: Support fields of a loop instance
- Attachment loop: Refactor based on post loop
- If tag: Compare "exists" checks for empty loop instance
- Start loop type `taxonomy_term`
- Url tag
  - Support `query` attribute
  - child_theme, network_admin, network_site, network_home
- Path tag: Support current `file` and `folder` for templates
- Route tag: Support getting parts between x~y; Support setting response status code

## 0.3.7

Release Date: 2020-07-28

- Improve getting default loop context from WP_Query
- If tag: Support "if not loop exists"
- Post loop: include/exclude, ID, name, parent, children
- User loop: Support value "current" for id, include, exclude
- Route variable type: Support getting route part as x, ~x, or x~

## 0.3.4

Release Date: 2020-07-25

- Logic: Add user_field condition and evaluator
- Load tag: Fix handling of absolute paths on Windows
- All core loop types now support extended fields

## 0.2.9

Release Date: 2020-07-16

- Organize and improve core logic rules
- Improve logic UI integration
- Add variable type "loop": count, total, previous_total
- Add variable type "logic": Get and set compound conditions
- Markdown: Support setting element attributes
- If tag: Support nested contexts for "If loop exists"
- Field tag
  - Cast boolean to a string that works with If tag
  - Add format attribute

## 0.2.4

Release Date: 2020-07-10

- Logic module: Add categories for rules
- Template module: Organize core conditional rules

## 0.2.3

Release Date: 2020-07-07

- Loop module
  - Add loop type field_keys, a loop of key-value pairs from field
  - Base and list loop: Improve handling empty item
- Template module
  - Loop tag: Add type field_keys
  - If tag: Add comparisons starts_with, ends_with, includes, not_includes
  - Load tag: Support absolute path (starting with "/", from template folder root) and relative path (based on current template path)
  - Load tag: Add support for Human JSON
  - List and Map: Add attribute "load" to get list/map from JSON file
  - Link and Route: Support absolute and relative paths
- Plugin framework
  - Add module for Human JSON - https://hjson.github.io
  - Add plugin methods get_missing_dependencies, has_all_dependencies

## 0.2.1

Release Date: 2020-07-03

- Loop module
  - Improving coverage of core content types and fields
  - Improved loop types: list, map, and map_keys
- Logic module
  - Improving tests
- Template module
  - Template editor
  - Template block for Gutenberg
- Plugin framework
  - Preact module
  - Tester moduler for server and client side tests

## 0.1.6

Release Date: 2020-06-17

- Update dependencies

## 0.1.5

Release Date: 2020-06-01

- Loop types: list, object, field

## 0.1.4

Release Date: 2020-05-26

- Organize Loop, Logic, Date, HTML, Template modules

## 0.0.2

Release Date: 2019-12-30

- Add Gutenberg integration; Start Template block

## 0.0.1

Release Date: 2019-12-21

- Initial release
