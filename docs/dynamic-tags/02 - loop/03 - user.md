---
id: user
title: User
tags:
  - Dynamic Tags
  - Loop
---
For loop type `user`, here are the query parameters and fields.

## Query parameters

- `exclude` - Exclude users by ID or name  
    Type: string, array
- `id` - Get user by ID(s) or 'current' for the current user  
    Type: string, array  
    
- `include` - Include users by ID or name  
    Type: string, array  
    
- `name` - User by name/slug  
    Type: string, array  
    
- `not_role` - Exclude user role(s)  
    Type: string, array  
    
- `order` - Order: asc (ascending) or desc (descending)  
    Type: string  
    Default: `asc`  
    
- `orderby` - Order by field  
    Type: string, array  
    Default: `display_name`  
    
- `paged` - Items per page  
    Type: number  
    Default: `10`  
    
- `role` - User role(s)  
    Type: string, array  
    

## Fields

- `archive_url` - Post archive URL  
    
- `avatar` - Avatar image  
    
- `avatar_url` - Avatar URL  
    
- `edit_url` - Edit URL  
    
- `email` - Email  
    
- `full_name` - Full name  
    
- `id` - ID  
    
- `locale` - User locale from the Language setting in profile edit screen  
    
- `name` - Name  
    
- `post_count` - Post count  
    
- `registration_date` - Registration date  
    
- `roles` - User role(s)  
    
- `url` - URL  
    

## User conditions

Current user is logged in

```html
<If user exists>
```

Current user is not logged in

```html
<If not user exists>
```

Current user is admin

```html
<If user_role includes value=administrator>
```

User field value

```html
<If user_field=field_name value="something">
```

## User tag

The [`User` tag](/docs/dynamic-tags/user) is a shortcut to get a field from the current user.

## Examples

- [How to display a post editing link only when the current user is the post's author](/docs/how-to/display-post-edit-link-author)