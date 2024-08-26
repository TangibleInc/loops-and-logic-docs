---
id: facet-wp-loop-tag
title: Use Loops & Logic with FacetWP
tags:
  - Facets
  - Filters
  - FacetWP
  - Default Query
---
## Necessary ingredients to make FacetWP recognize your Loop

1. Use `facetwp-template` as the wrapper class for your loop. When the page loads, FacetWP uses JavaScript to scan for the `facetwp-template` CSS class to find your loop. FacetWP calls this a **CSS-based template**.
2. Use the **default query** on an archive, meaning a loop without a specified type (`<Loop></Loop>`). If you need a modified query, modify the query in functions.php using pre_get_posts. [Click here to read FacetWP's Docs on modifying the default query](https://facetwp.com/how-to-customize-archive-queries/). Currently, L&L doesn't work with FacetWP outside of this context, meaning it couldn't be used on a page or post.
3. Place your facet placeholders on the page using FacetWP's provided shortcodes. [Click here to learn more about FacetWP Shortcodes](https://facetwp.com/documentation/shortcodes/). Remember that if you're placing shortcodes in an L&L editor you'll need to use the `<Shortcode />` tag. For example, `[facetwp facet="the_name"]` becomes `<Shortcode facetwp facet=the_name />`. You may also simply wrap your shortcodes like so: `<Shortcode>[facetwp facet="the_name"]</Shortcode>`
4. Be sure to include class="{Field post_class}" in the wrapper of your looped object. This will provide FacetWP with all the context it needs to filter your posts, since it contains data such as associated terms, post ID etc.

## Expert Level: Add taxonomy headings to a FacetWP-compatible loop

custom_post => post type slug  
custom_tax   => taxonomy slug

### Step 1: The markup

```html
<ul class="facetwp-template"> <!-- wrapper class -->
	<Loop> <!-- default loop -->

<!-- save the taxonomy slug and title of current post as variables -->

		<Loop type=taxonomy_term 
		      taxonomy=custom_tax 
		      post="{Field id}" >
			<Set taxonomy_slug><Field name /></Set>
			<Set taxonomy_title><Field title /></Set>
		</Loop> 
	
<!-- save the ID of the first post in the taxonomy as a variable -->
	
		<Loop type=custom_post 
		      taxonomy=custom_tax 
		      terms="{Get taxonomy_slug}" 
		      count=1 >
			<Set tax_first_post_id><Field id /></Set>
		</Loop> 

<!-- If the current post ID matches the first post ID, display the saved Taxonomy title -->   
   
		<If check="{Get tax_first_post_id}" 
		    value="{Field id}">
			<h2><Get taxonomy_title /></h2>
		</If> 

<!-- using post_class field fopr repeated loop item -->
		<li class="{Field post_class}"> 
		...
		</li>
		
	</Loop> <!-- close default Loop -->
</ul> <!-- close wrapper -->
```

### Step 2: Modifying the query

```php
// group posts by taxonomy

function group_cpt_by_tax( $query ) {
	if ( $query->is_post_type_archive( 'custom_post' ) && $query->is_main_query() && !is_admin() ) { 

		$post_ids = array();
		$terms = get_terms( 'custom_tax' );

		foreach ( $terms as $term ) {
            		$post_ids = array_merge( $post_ids, get_posts( array( 
                		'posts_per_page' => 99, // as you wish...
                		'post_type' => 'custom_post', // If needed. Default is posts
                		'fields' => 'ids', // get ids to use later in 'post__in'
                		'orderby' => 'title',
               			'order' => 'ASC',
                		'tax_query' => array( 
					array( 
						'taxonomy' => $term->taxonomy, 
						'field' => 'term_id', 
						'orderby'  => 'term_order',
						'order' => 'ASC', 
						'terms' => $term->term_id, 
					)
				)
			))); // getting posts in the current term
       		}

        	$query->query_vars['post_type'] = 'custom_post'; // Again, if needed... Default is posts
        	$query->query_vars['posts_per_page'] = 99; // If needed.
        	$query->query_vars['post__in'] = $post_ids; // Filtering with the post IDs obtained above
        	$query->query_vars['orderby'] = 'post__in'; // keep the order generated in the terms loop
        	$query->query_vars['ignore_sticky_posts'] = 1; // If you dont want your sticky posts to change the order
	}
}

// Hook above function to the pre_get_posts action
add_action( 'pre_get_posts', 'group_cpt_by_tax' );
```
