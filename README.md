## Yo-AngularJS-RequireJS-Bower-Karma ##

## Why AngularJS?

Angular is the only framework that doesn't make MVC scary at all.

- MVC done right: Most framework prefers that you split you MVC components, then you will need to follow their API to string them together, who wants to learn another framework API. With Angular, they prefer that you split your MVC components but they do all the work for you and string them together.

- A declarative UI: Angular uses HTML, which more intuitive and less brittle to reorganize than an interface written in JS. In addition you can determine what you want to load using special attributes, controlling when you want to load a module. 

- Directives: Do I need to say more, Angular way of bringing additional functionality to HTML.

- There are many more search the web ....

- Final "write less code"

Couple that with a few useful development tools like Yeoman, Grunt and Bower and you’ve got yourself an incredibly fast rapid prototyping process.


## Main features

- Generating a bare bones AngularJS app with Yeoman
- Using Grunt to speed up development and help perform repetitive tasks
- Using Bower to add third party plugins/frameworks
- Using RequireJS to optimize and load modules, read more about AMD JS


## Prerequisites

- A terminal and basic knowledge of the command line
- NodeJS and NPM install
- Fundamental JS, CSS, and HTML knowledge


## Let's get started
- Install Node.JS
Use your system package manager (brew,port,apt-get,yum etc)

- Install global Yeoman, Grunt and Bower commands, once you install the following commands globally, you can run 'npm install' to run the components in the package.json file

```bash
	npm install -g yo grunt-cli bower
	npm install //load all your additional package.json components
```

- Run 'grunt build serve' for the first time to load all the bower components

```bash
	grunt build serve
```

- When ever you make changes to bower.json files, you will need to run the command above, to update your lib folder, it will also start the development server. Otherwise you can run 'grunt serve'

```bash
	grunt serve
```

- If you don't want to run 'grunt build serve', you can call 'bower install', but also make sure the .bowerrc has the proper directory path of your libraries.

## Bare Essentials:
You have now loaded the bare essential of a Yeoman application, this build has RequireJS, and Karma.  You could also have run the following code to only get Yeoman+Grunt+AngularJS+Bower
```bash
	npm install -g generator-angular
	yo angular
```

## What you got!
So now you have a complete grunt build with automation for minification, single html application, and jslint, it will also bootstrap your application with RequireJS.

## Here is a list of just some of the tasks:

- 'clean:dist'  -clean directory
- 'bower:install' -run the bower install
- 'ngtemplates' -minify Angular Js, html files in $templateCache for single index
- 'requirejs' -get all dependencies and combine in one file
- 'concat' -concat all js files
- 'uglify' -uglify all js files
- 'less:dist' -compile less files in .tmp
- 'autoprefixer' -add all vendor prefixes to styles
- 'template:dist' -concat all the compile files into index.html
- 'htmlmin' -clean html
- 'concurrent:dist' -performs some task parallel to others, like copying files, minify images, svg
- 'copy:app' -copy the remaining app files to dist, after concurrent
- 'cdnify' -replace Google CDN references
- 'compress' -compress the index.html files






