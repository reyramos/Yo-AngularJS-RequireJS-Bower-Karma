// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
module.exports = function( config ) {
	config.set ( {

					 // base path, that will be used to resolve files and exclude
					 basePath:'',
					 // testing framework to use (jasmine/mocha/qunit/...)
					 frameworks:['jasmine'],
					 // list of files / patterns to load in the browser
					 files:[
						 'app/lib/angular/angular.js',
//						 'app/lib/angular-mocks/angular-mocks.js',
						 'app/lib/angular-resource/index.js',
						 'app/lib/angular-route/index.js',
						 'app/lib/angular-cookies/index.js',
						 'app/lib/angular-mocks/index.js',
						 'app/lib/angular-sanitize/index.js',
						 'app/lib/angular-animate/index.js',
						 'app/lib/angular-touch/index.js',
						 'app/lib/requirejs/require.js',
						 'app/js/*.js',
						 'app/js/**/*.js',
//						 'test/mock/**/*.js',
						 'test/spec/**/*.js'
					 ],
					 // list of files / patterns to exclude
					 exclude:[],
					 // web server port
					 port:8081,
					 // level of logging
					 // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
					 logLevel:config.LOG_INFO,
					 // enable / disable watching file and executing tests whenever any file changes
					 autoWatch:false,
					 // Start these browsers, currently available:
					 // - Chrome
					 // - ChromeCanary
					 // - Firefox
					 // - Opera
					 // - Safari (only Mac)
					 // - PhantomJS
					 // - IE (only Windows)
					 //browsers:['Chrome'],
					 // Continuous Integration mode
					 // if true, it capture browsers, run tests and exit
					 singleRun:false
				 } );
};
