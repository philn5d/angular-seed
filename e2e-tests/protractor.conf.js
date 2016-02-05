exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {        
	'browserName': 'internet explorer',
        'platform': 'ANY',
        'version': '11'
  },

  baseUrl: 'http://localhost:8000/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  seleniumArgs: ['-Dwebdriver.ie.driver=c:/IEDriverServer64.exe']
};
