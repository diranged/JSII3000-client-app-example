const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  authorName: 'Matt Wise',
  cdkVersion: '2.50.0',
  defaultReleaseBranch: 'main',
  name: 'clientapp',
  scripts: {
    "upgrade-coremodule": "yarn upgrade coremodule && cd node_modules/coremodule && yarn build",
  },
  gitignore: ["*.swp", "*.swo"],
});
project.addDeps("coremodule@https://github.com/diranged/JSII3000-coremodule-example#test");
project.synth();
