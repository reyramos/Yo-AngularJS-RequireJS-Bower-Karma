// Require JS  Config File
require( {
			 baseUrl: '/js/',
			 paths: {
				   'angular': '../lib/angular/angular'
				 , 'angular-resource': '../lib/angular-resource/index'
				 , 'angular-route': '../lib/angular-route/index'
				 , 'angular-cookies': '../lib/angular-cookies/index'
				 , 'angular-mocks': '../lib/angular-mocks/index'
				 , 'angular-sanitize': '../lib/angular-sanitize/index'
				 , 'angular-animate': '../lib/angular-animate/index'
				 , 'angular-touch': '../lib/angular-touch/index'
			 }
			 , shim: {
				 'app': { 'deps': [
					 'angular'
					 , 'angular-route'
					 , 'angular-resource'
					 , 'angular-sanitize'
					 , 'angular-animate'
					 , 'angular-cookies'
					 , 'angular-touch'
					 , 'angular-mocks'
				 ]}
				 , 'angular-route': { 'deps': ['angular']}
				 , 'angular-resource': { 'deps': ['angular'] }
				 , 'angular-cookies': { 'deps': ['angular'] }
				 , 'angular-mocks': { 'deps': ['angular'] }
				 , 'angular-sanitize': { 'deps': ['angular'] }
				 , 'angular-animate': { 'deps': ['angular'] }
				 , 'angular-touch': { 'deps': ['angular'] }
				 , 'controllers/main': { 'deps': [
					 'app'
				 ]}
			 }
		 }
	, [
			 'require'
			 , 'controllers/main'
		 ]
	, function ( require ) {
		return require(
			[
				'bootstrap'
			]
		)
	}
);
