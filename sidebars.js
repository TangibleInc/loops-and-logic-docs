/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
	gettingStarted: [{type: 'autogenerated', dirName: 'getting-started'}],
	dynamicTags: [{type: 'autogenerated', dirName: 'dynamic-tags'}],
  integrations: [{type: 'autogenerated', dirName: 'integrations'}],
	tangibleBlocks: [{type: 'autogenerated', dirName: 'tangible-blocks'}],
  howToGuides: [{type: 'autogenerated', dirName: 'how-to'}],
  reference: [{type: 'autogenerated', dirName: 'reference'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;