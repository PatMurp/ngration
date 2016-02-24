# ngration [![Build Status](https://travis-ci.org/PatMurp/ngration.svg?branch=dictionary)](https://travis-ci.org/PatMurp/ngration)

#### !! under construction !!

Demo Node.js project that aims to expirement with implementing security from the beginning using Continuous Integration

###Implemented:  
* basic mocha test
* use nsp tool to check for node module  security vulnerabilities
* gulp ci task to analyze code complexity; outputs maintainibility index
* gulp ci task which run jshint on all JavaScript files. Configured to:
	* enforce "use strict"; 
	* Cyclomatic Complexity maximum value is 10 

##### To run application:

	$ npm install 
	$ bower install 
	$ npm test 
	$ node app.js


point browser to: [localhost:4000](http://localhost:4000/)