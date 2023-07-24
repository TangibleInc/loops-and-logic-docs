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
  gettingStarted: [
    {
      type: 'category',
      label: 'Getting Started with Loops & Logic',
      items:[
        'Getting_Started/Getting_Started_with_Loops_&_Logic/getting_started_with_loops_&_logic',
        'Getting_Started/Getting_Started_with_Loops_&_Logic/the_inner_workings_of_L&L',
        'Getting_Started/Getting_Started_with_Loops_&_Logic/the_syntax_of_L&L_markup',
        'Getting_Started/Getting_Started_with_Loops_&_Logic/creating_a_simple_template',
        'Getting_Started/Getting_Started_with_Loops_&_Logic/displaying_an_L&L_template',
        'Getting_Started/Getting_Started_with_Loops_&_Logic/importing_and_exporting_L&L_templates'
      ],
      link: {
        'type': 'generated-index',
        'description': 'Quick intro to getting started with Loops & Logic'
      }
    },
    {
      type: 'category',
      label: 'Getting Started with Tangible Blocks',
      items:[
        'Getting_Started/Getting_Started_with_Tangible_Blocks/getting_started_with_tangible_blocks',
      ],
      link: {
        'type': 'generated-index',
        'description': 'Quick intro to getting started with Tangible Blocks'
      }
    },
    {
      type: 'category',
      label: 'Two-Minute Quick-Start Guide to Loops & Logic',
      items:[
        'Getting_Started/Two_Minute_Quick_Start_Guide_To_Loops_&_Logic/two_minute_quick_start_guide_to_loops_&_logic',
      ],
      link: {
        'type': 'generated-index',
        'description': 'Quick intro to getting started with Loops & Logic'
      }
    },
  ],
  learningGuides: [
    {
      type: 'category',
      label: 'Two-Minute Quick-Start Guide to Loops & Logic',
      items:[
        'Getting_Started/Two_Minute_Quick_Start_Guide_To_Loops_&_Logic/two_minute_quick_start_guide_to_loops_&_logic',
      ],
      link: {
        'type': 'generated-index',
        'description': 'Quick intro to getting started with Loops & Logic'
      }
    }
  ],
  referenceGuides: [
    {
      type: 'category',
      label: 'Getting Started with Loops & Logic',
      items:['Getting_Started/Getting_Started_with_Loops_&_Logic/getting_started_with_loops_&_logic',],
      link: {
        'type': 'generated-index',
        'description': 'Quick intro to getting started with Loops & Logic'
      }
    }
  ],
  howToGuides: [
    {
      type: 'category',
      label: 'Getting Started with Loops & Logic',
      items:['Getting_Started/Getting_Started_with_Loops_&_Logic/getting_started_with_loops_&_logic',],
      link: {
        'type': 'generated-index',
        'description': 'Quick intro to getting started with Loops & Logic'
      }
    }

  ],


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
