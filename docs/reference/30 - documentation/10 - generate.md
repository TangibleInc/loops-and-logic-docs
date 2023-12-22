# Generate

This script generates documentation pages from the codebase of Template System and Template System Pro.

## Use

Run the NPM script.

```sh
npm run gen
```

On initial run, it clones Git repositories in `generate/vendor`, which is ignored from the Docs repo.

On subsequent runs, it will generate pages from installed repos.

### Update repos

Optionally, add the command `update` to perform Git pull on every repo.

```sh
npm run gen update
```

This will keep them fresh. It is not done automatically because network requests may take time.

### Watch

Watch for changes in vendor folder's Markdown files, and re-generate.

```sh
npm run gen:watch
```

Currently this only watches in the `system` export mode (see below).

### Link repos

If you have a central place for Git repos on your local system, you can replace the installed repos in `generate/vendor` with a symbolic link to your repo, for example, `~/lib/modules/template-system`. 

This can be convenient for developing the module and its documentation at the same time, as a kind of documenation-driven development.

## Export modes

The script is organized into export modes, which can be run individually.

```sh
npm run gen [mode]
```

- `loops`
  - Extract loop type definitions from Template System
  - Save them to `generate/loop-types` as JSON files
  - These are imported from `docs/dynamic-tags/loop` to render a **table of query parameters and fields**.
- `pro`
  - Same as `loops`, but for all Pro integrations
- `system`
  - Gather all Markdown files in Template System, Framework, and their modules
  - Generate pages under `/reference`
- `docs`
  - Generate pages under `/reference/documenation` by copying Markdown files from this docs repo 
- `all` - All of the above

## Plan

- `fields`
  - Extract field definitions from **Fields module**
  - Save them to `generate//field-types` as JSON files
  - Import them from docs pages and render a **table of all fields and their parameters**.

    Maybe merge them with Block Control docs

- `fields-pro`
  - Same as `fields`, but for Fields Pro module
  - Copy any Markdown files as pages
