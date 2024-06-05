# Documentation

The source code of the documentation site is at:

https://github.com/tangibleinc/loops-and-logic-docs

The website is built using [Docusaurus 3](https://docusaurus.io/), a static website generator.

#### Generate

See description of the [Generate script](generate), which is part of the build process to generate pages from the codebase.

## Develop

### Installation

```
git clone https://github.com/tangibleinc/loops-and-logic-docs
cd loops-and-logic-docs
npm install
```

Tangible team members with access to the Git repo can clone from `git@github.com:tangibleinc/loops-and-logic-docs`.

### Local Development

```
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deploy

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
