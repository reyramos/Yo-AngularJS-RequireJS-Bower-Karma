// Generated on 2014-05-03 using generator-angular 0.8.0
'use strict';

var  modRewrite, mountFolder;

modRewrite = require ( "connect-modrewrite" );
mountFolder = function( connect, dir ) {
	return connect["static"] ( require ( "path" ).resolve ( dir ) );
};

module.exports = function( grunt ) {

	// Load grunt tasks automatically
	require ( 'load-grunt-tasks' ) ( grunt, {config:'package.json', scope:['devDependencies', 'dependencies']} );
	// Time how long tasks take. Can help when optimizing build times
	//	require ( 'time-grunt' ) ( grunt );
	// Define the configuration for all the tasks
	grunt.initConfig ( {

						   // Project settings
						   yeoman:{
							   // configurable paths
							   app:require ( './bower.json' ).appPath || 'app',
							   dist:'dist'
						   },
						   // Watches files for changes and runs tasks based on the changed files
						   watch:{
							   options:{
								   livereload:true,
								   spawn:false
							   },
							    js:{
							      files:['<%= yeoman.app %>/js/**/*.js'],
							      tasks:['newer:jshint'],
							      options:{
							   	   livereload:true
							   	   }
							     },
							   less:{
								   files:["<%= yeoman.app %>/css/**/*.less"],
								   tasks: ['newer:less:dev']

							   },
							   jsTest:{
								   files:['test/spec/**/*.js'],
								   tasks:['newer:jshint:test', 'karma']
							   },
							   livereload:{
								   options:{
									   livereload:true
								   },
								   files:[
									   '<%= yeoman.app %>/{,*/}*.html',
									   '<%= yeoman.app %>/img/**/*.{png,jpg,jpeg,gif,webp,svg}'
								   ],
								   tasks:['template:dev']
							   }
						   },
						   //Compile less files to css
						   less:{
							   dev:{
								   options:{
									   paths:["<%= yeoman.app %>/css"]
								   },
								   files:{
									   ".tmp/styles.css":"<%= yeoman.app %>/css/styles.less"
								   }
							   },
							   dist:{
								   options:{
									   paths:["<%= yeoman.app %>/css", ".tmp/css"],
									   compress:true,
									   dumpLineNumbers:false,
									   ieCompat:true,
									   cleancss:true,
									   syncImport:true,
									   relativeUrls:false,
									   yuicompress:false
								   },
								   files:{
									   ".tmp/styles.css":"<%= yeoman.app %>/css/styles.less"
								   }
							   }
						   },
						   concat:{
							   dist:{
								   src:['.tmp/scripts-require.js', '.tmp/js/views.js', 'app/js/bootstrap.js'],
								   dest:".tmp/scripts-concat.js"
							   }
						   },
						   requirejs:{
							   dist:{
								   options:{
									   baseUrl:"app/js",
									   findNestedDependencies:true,
									   logLevel:0,
									   mainConfigFile:"app/js/main.js",
									   name:'main',
									   include:['../../.tmp/js/views.js'],
									   onBuildWrite:function( moduleName, path, contents ) {
										   var modulesToExclude, shouldExcludeModule;
										   modulesToExclude = ['main', 'bootstrap'];
										   shouldExcludeModule = modulesToExclude.indexOf ( moduleName ) >= 0;
										   if( shouldExcludeModule )
										   {
											   return '';
										   }
										   return contents;
									   },
									   optimize:"none",
									   out:".tmp/scripts-require.js",
									   preserveLicenseComments:false,
									   skipModuleInsertion:true
								   }
							   }
						   },
						   template:{
							   dev:{
								   files:{
									   ".tmp/index.html":"<%= yeoman.app %>/index.html"
								   },
								   environment:"dev"
							   },
							   dist:{
								   files:{
									   ".tmp/index-concat.html":"<%= yeoman.app %>/index.html"
								   },
								   environment:"dist",
								   css_sources:'<%= grunt.file.read(".tmp/styles.css") %>',
								   js_sources:'<%= grunt.file.read(".tmp/scripts.js") %>',
								   buildVersion:grunt.option ( 'buildVersion' )
							   }
						   },
						   //minify Angular Js, html files with $templateCache
						   ngtemplates:{
							   app:{
								   options:{
									   base:'app/', prepend:'/'
								   },
								   src:["app/views/**/*.html"],
								   dest:'.tmp/js/views.js'
							   }
						   },
						   // The actual grunt server settings
						   connect:{
							   options:{
								   port:9000,
								   hostname:"0.0.0.0"
							   },
							   livereload:{
								   options:{
									   middleware:function( connect ) {
										   return [
											   modRewrite ( ["!png|jpg|gif|css|js|less|html|otf|ttf|eot|woff|svg|mp3|ogg$ /index.html [L]"]),
											   mountFolder ( connect, ".tmp" ), mountFolder ( connect, "app" )];
									   }
								   }
							   },
							   test:{
								   options:{
									   port:9001,
									   base:[
										   '.tmp',
										   'test',
										   '<%= yeoman.app %>'
									   ]
								   }
							   },
							   dist:{
								   options:{
									   base:'<%= yeoman.dist %>'
								   }
							   }
						   },
						   // Make sure code styles are up to par and there are no obvious mistakes
						   jshint:{
							   options:{
								   jshintrc:'.jshintrc',
								   reporter:require ( 'jshint-stylish' )
							   },
							   test:{
								   options:{
									   jshintrc:'test/.jshintrc'
								   },
								   src:['test/spec/**/*.js']
							   }
						   },
						   // Empties folders to start fresh
						   clean:{
							   dist:{
								   files:[
									   {
										   dot:true,
										   src:[
											   '.tmp',
											   '<%= yeoman.dist %>/*',
											   '!<%= yeoman.dist %>/.git*'
										   ]
									   }
								   ]
							   },
							   server:'.tmp'
						   },
						   // Add vendor prefixed styles
						   autoprefixer:{
							   options:{
								   browsers:['last 1 version']
							   },
							   dist:{
								   files:[
									   {
										   expand:true,
										   cwd:'.tmp/css/',
										   src:'**/*.css',
										   dest:'.tmp/css/'
									   }
								   ]
							   }
						   },
						   imagemin:{
							   dist:{
								   files:[
									   {
										   expand:true,
										   cwd:'<%= yeoman.app %>/img',
										   src:'**/*.{png,jpg,jpeg,gif}',
										   dest:'<%= yeoman.dist %>/img'
									   }
								   ]
							   }
						   },
						   svgmin:{
							   dist:{
								   files:[
									   {
										   expand:true,
										   cwd:'<%= yeoman.app %>/img',
										   src:'**/*.svg',
										   dest:'<%= yeoman.dist %>/img'
									   }
								   ]
							   }
						   },
						   htmlmin:{
							   dist:{
								   options:{
									   collapseWhitespace:true,
									   collapseBooleanAttributes:true,
									   removeCommentsFromCDATA:true,
									   removeOptionalTags:true,
									   removeAttributeQuotes:true,
									   removeComments:true, // Only if you don't use comment directives!
									   removeEmptyAttributes:true,
									   removeRedundantAttributes:true,
									   removeScriptTypeAttributes:true,
									   removeStyleLinkTypeAttributes:true
								   },
								   files:{
									   ".tmp/index.html":".tmp/index-concat.html"
								   }
							   }
						   },
						   // ngmin tries to make the code safe for minification automatically by
						   // using the Angular long form for dependency injection. It doesn't work on
						   // things like resolve or inject so those have to be done manually.
						   ngmin:{
							   dist:{
								   files:[
									   {
										   expand:true,
										   cwd:'.tmp',
										   src:'*.js',
										   dest:'.tmp'
									   }
								   ]
							   }
						   },
						   // Replace Google CDN references
						   cdnify:{
							   dist:{
								   html:['<%= yeoman.dist %>/*.html']
							   }
						   },
						   // Copies remaining files to places other tasks can use, do not override the index.html file
						   copy:{
							   app:{
								   files:[
									   {
										   expand:true,
										   dot:true,
										   cwd:'<%= yeoman.app %>',
										   dest:'<%= yeoman.dist %>',
										   src:[
											   '*.{ico,png,txt}'
											   , '.htaccess'
											   //, 'views/**/*.html' //not needed for single index files
											   , 'img/**/*.{gif,jpeg,jpg,png}'
											   , 'fonts/*.{png,jpg,jpeg,gif,webp,svg,eot,ttf,woff}'
										   ]
									   },
									   {
										   expand:true,
										   cwd:'.tmp/images',
										   dest:'<%= yeoman.dist %>/img',
										   src:['generated/*']
									   }
								   ]
							   },
							   temp:{
								   files:[
									   {
										   expand:true,
										   dot:true,
										   cwd:".tmp",
										   dest:"<%= yeoman.dist %>",
										   src:[
											   'img/**/*.{gif,jpeg,jpg,png}'
											   , 'index.html'
										   ]
									   }
								   ]
							   },
							   //copy any json files that lies inside of the app folder
							   json:{
								   files:[
									   {
										   expand:true,
										   cwd:"<%= yeoman.app %>/json",
										   dest:"<%= yeoman.dist %>/json",
										   src:["**/*.json"]
									   }
								   ]
							   },
							   styles:{
								   expand:true,
								   cwd:'<%= yeoman.app %>/css',
								   dest:'.tmp/css/',
								   src:'**/*.css'
							   }
						   },
						   // Run some tasks in parallel to speed up the build process
						   concurrent:{
							   server:[
								   'copy:styles'
							   ],
							   test:[
								   'copy:styles'
							   ],
							   dist:[
								   'copy:temp'
								   , 'copy:json'
								   , 'imagemin'
								   , 'svgmin'
							   ],
							   options: {
								   limit:5,
								   logConcurrentOutput: true
							   }
						   },
						   uglify:{
							   options:{
								   mangle:false,
								   compress:true
							   },
							   dist:{
								   files:{
									   '.tmp/scripts.js':'.tmp/scripts-concat.js'
								   }
							   }
						   },
						   bower:{
							   install: {
								   options: {
									   targetDir: "app/lib",
									   layout: 'byComponent',
									   install: true,
									   verbose: true,
									   cleanTargetDir: false,
									   cleanBowerDir: false,
									   bowerOptions: {
										   forceLatest:true
									   }
								   }
							   }
						   },
						   compress:{
							   dist:{
								   options:{
									   mode:'gzip',
									   pretty:true
								   },
								   src:['dist/index.html'],
								   dest:'dist/index.html',
								   ext:'.html'
							   }
						   },
						   // Test settings
						   karma:{
							   unit:{
								   configFile:'karma.conf.js',
								   singleRun:true
							   }
						   }
					   } );

	grunt.registerTask("socket.io", function() {
		return require("./server/server.js");
	});

	grunt.registerTask ( 'serve', function( target ) {
		if( target === 'dist' )
		{
			return grunt.task.run ( ['build', 'connect:dist:keepalive'] );
		}
		grunt.task.run ( [
							 'clean:server',
							 'socket.io',
							 'template:dev',
							 'concurrent:server',
							 'autoprefixer',
							 'connect:livereload',
							 'watch'
						 ] );
	} );
	grunt.registerTask ( 'server', function( target ) {
		grunt.log.warn ( 'The `server` task has been deprecated. Use `grunt serve` to start a server.' );
		grunt.task.run ( ['serve:' + target] );
	} );
	grunt.registerTask ( 'test', [
		'clean:server',
		//'socket.io',
		'concurrent:test',
		'autoprefixer',
		'connect:test',
		'karma'
	] );

	grunt.registerTask ( 'build', [
		'clean:dist' //clean directory
		, 'bower:install' //run the bower install
		, 'ngtemplates' //minify Angular Js, html files in templateCache
		, 'requirejs' //get all dependencies and combine in one file
		, 'concat' //concat all js files
		, 'uglify' //uglify all js files
		, 'less:dist' //compile less files in .tmp
		, 'autoprefixer' //add all vendor prefixes to styles
		, 'template:dist' //concat all the compile files into index.html
		, 'htmlmin' //clean html
		, 'concurrent:dist' //performs some task paraller to others
		, 'copy:app' //copy the remaining app files to dist
		//		, 'cdnify' //replace Google CDN references
		//		, "compress" //compress the index.html files
	] );
	grunt.registerTask ( 'default', [
		'newer:jshint',
		'test',
		'build'

	] );
};
