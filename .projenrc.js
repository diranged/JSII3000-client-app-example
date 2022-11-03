const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  authorName: 'Matt Wise',
  cdkVersion: '2.50.0',
  defaultReleaseBranch: 'main',
  name: 'clientapp',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();