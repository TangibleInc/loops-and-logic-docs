### Core fields

*    `all` - Shows all custom fields (for development purposes)
*    `id` - ID
*    `name` - name/slug
*    `menu_order` - Menu order
*    `post_class` - Post classes
*    `url` - URL
*    `edit_url` - Edit URL
*    `status` - Status
*    `type` - Post type
*    `publish_date` - Publish date
*    `modify_date` - Modify date
*    `author` - Author
*    `author_*` - Author's user field where the asterisk can be replaced with any field from the user loop such as `author_avatar_url`.
*    `title` - Title
*    `image` - Featured image
*    `image_*` - Featured image field where the asterisk can be replaced with any field from the attachment loop such as image_url.
*    `excerpt` - Excerpt. For post excerpts, the attribute auto=true can be used to optionally generate an excerpt from post content for posts that don't already have content in their excerpt field.  
     ```html
     <Field excerpt auto=true />
     ```  
     Attributes to customize:  

     *    `words` Maximum number of words - default 55
     *    `more` Text to display after content is trimmed - default: [&hellip;]
*    `content` - Content

#### Hierarchical
Data representing post's hierarchical relationships with other posts
*    `ancestors` - Ancestor posts from lowest to highest level; Set reverse=true to go from top-level down
*    `children` - Children
*    `children_ids` - Children IDs
*    `parent` - Parent
*    `parent_*` - Parent field where the asterisk can be replaced with any field from the post loop such as parent_title.
*    `parent_ids` - All parent IDs from current to top.