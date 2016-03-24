'use strict';
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var mocha = require('gulp-mocha');
var complexity = require('gulp-complexity');
var jsinspect = require('gulp-jsinspect');
var eslint = require('gulp-eslint');

var jsSources,
		  unitTests;

jsSources = [
	  'app.js',
	  'routes.js',
	  'config/*.js',
	  'public/js/*js',
	  'gulpfile.js'
];

unitTests = [
	  'test/app-spec.js'
];

// run mocha unit tests
// !!bug!! mocha tests not exiting when finished
gulp.task('utest', function () {
	  return gulp.src(unitTests, { read: false })
	.pipe(mocha());
});

// check for errors in code
gulp.task('lint', function () {
	  return gulp.src(jsSources)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(jshint.reporter('fail'));
});

// enforce airbnb code standards
gulp.task('eslint', function () {
	return gulp.src(jsSources)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

// analyse code complexity
gulp.task('complex', function () {
	  return gulp.src(jsSources)
	.pipe(complexity());
});

// detect copy/pasted & structurally similar code
gulp.task('inspect', function () {
	  return gulp.src(jsSources)
	.pipe(jsinspect({
		  'threshold': 10,
		  'identifiers': true,
		  'supress': 0
	}));
});

gulp.task('default', ['lint']);

// continous integration tasks
gulp.task('ci', ['complex']);
gulp.task('ci-console', ['eslint', 'inspect']);
