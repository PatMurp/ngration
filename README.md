# ngration [![Build Status](https://travis-ci.org/PatMurp/ngration.svg?branch=master)](https://travis-ci.org/PatMurp/ngration)

#### !! under construction !!

Demo Node.js project that aims to expirement with implementing security from the beginning using Continuous Integration

###Implemented:  
* run mocha tests
* use nsp tool to check for node module  security vulnerabilities
* use istanbul to create code coverage reports
* gulp ci task to analyze code complexity; outputs maintainibility index
* gulp ci task to check for copy/pasted & structurally similar code
* npm lint task which runs jshint on all JavaScript files. Configured to:
	* view gist of jshintrc file [here](https://gist.github.com/PatMurp/9ff6aef85deeb91c3c6b)

##### To run CI tasks individually:

	$ npm install 
	$ bower install 
	$ gulp ci
	$ npm test
	$ npm run nsp
	$ npm run coverage
	$ npm run lint

##### To run application:

	$ node app.js

point browser to: [localhost:4000](http://localhost:4000/)