const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  authorName: 'Matt Wise',
  cdkVersion: '2.50.0',
  defaultReleaseBranch: 'main',
  name: 'clientapp',
  scripts: {
    'upgrade-coremodule': 'yarn upgrade coremodule && cd node_modules/coremodule && yarn build',
  },
  gitignore: ['*.swp', '*.swo'],
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
      singleQuote: true,
    },
  },
  jestOptions: {
    jestConfig: {
      transformIgnorePatterns: ['/node_modules\\/(?!coremodule).+\\.[tj]s$'],
    },
  },
});
project.addDeps('coremodule@https://github.com/diranged/JSII3000-coremodule-example#test');
project.synth();
