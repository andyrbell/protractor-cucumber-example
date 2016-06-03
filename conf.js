exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['features/*.feature'],
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  allScriptsTimeout: 60000,
  getPageTimeout: 60000,

  cucumberOpts: {
  	format: 'pretty',
  	require: ['features/steps/*.js','features/support/*.js']
  }
};
