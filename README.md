# ngration [![Build Status](https://travis-ci.org/PatMurp/ngration.svg?branch=dictionary)](https://travis-ci.org/PatMurp/ngration)

#### !! under construction !!

Demo Node.js project that aims to expirement with implementing security from the beginning using Continuous Integration (CI)

##Implemented 
* helmet module used to secure app using HTTP headers

### npm script CI tasks:  
* run mocha tests & generate test.tap report
* use nsp tool to check for node module  security vulnerabilities
* use istanbul to create code coverage reports, HTML report generated in coverage folder
* use es6-plato to generate complexity reports, HTML report generated in report folder
* use jsinspect to check for copy/pasted & structurally similar code & generate pmd.xml report
* eslint used to enforce airbnb es6 code standards & generate jshint.xml report
* npm build script to run all CI tasks

##### Install modules and libaries:

	$ npm install 
	$ bower install 
	
##### To run CI tasks individually:

	$ npm run -s eslint
	$ npm -s test
	$ npm run -s nsp
	$ npm run -s jsinspect
	$ npm run -s coverage
	$ npm run -s plato
	$ gulp ci-console
		
##### To run all CI tasks:

	$ npm run build
	
##### To run application:

	$ node app.js

point browser to: [localhost:4000](http://localhost:4000/)