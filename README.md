# ngration [![Build Status](https://travis-ci.org/PatMurp/ngration.svg?branch=master)](https://travis-ci.org/PatMurp/ngration)

#### !! under construction !!

Demo Node.js project that aims to expirement with implementing security from the beginning using Continuous Integration

###Implemented:  
* run mocha tests
* use nsp tool to check for node module  security vulnerabilities
* use istanbul to create code coverage reports
* gulp ci task to analyze code complexity; outputs maintainibility index
* gulp ci task to check for copy/pasted & structurally similar code
* gulp ci task which run jshint on all JavaScript files. Configured to:
	* enforce "use strict"; 
	* Cyclomatic Complexity maximum value is 10 

##### To run CI tasks locally:

	$ npm install 
	$ bower install 
	$ gulp ci
	$ npm test
	$ npm run coverage

##### To run application:

	$ node app.js

point browser to: [localhost:4000](http://localhost:4000/)