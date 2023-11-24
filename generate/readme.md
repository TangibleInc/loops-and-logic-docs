# Generate

This script generates documentation pages from the codebase of Template System, Template System Pro, and Tangible Fields.

## Run

Run the NPM script.

```sh
npm run gen
```

On initial run, it clones Git repositories in `generate/vendor`, which is ignored from the Docs repo. On subsequent runs, it will generate docs from installed repos.

### Update repos

Optionally, add the command `update` to perform Git pull on every repo.

```sh
npm run gen update
```

This will keep them fresh. It is not done automatically because network requests takes time.


## Result

Currently, the script does the following steps.

- Template System: Loop type definitions
  - Parse classes in `template-system/loop/types`
  - Extract their definitions to `./loop-types` as JSON files

    These are imported from `docs/dynamic-tags/loop` to render **tables of query parameters and fields**.

    - Attachment
    - Base - Shared by all loop types: Sort by field
    - Calendar
    - Menu
    - Post
    - Taxonomy
    - Taxonomy term
    - Type
    - User

### TODO

- Template System Pro: Loop type definitions

- Fields module
  - Extract field definitions to `./field-types` as JSON files
  - Import them into docs pages and render a **list of all fields and their properties**.
    Maybe merge them with Block Control docs

