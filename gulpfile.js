"use strict";
var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var mocha = require('gulp-mocha');

var jsSources,
		unitTests;

jsSources = [
	'app.js',
	'routes.js',
	'config/*.js'
];

unitTests = [
	'test/app-spec.js'
];

gulp.task('utest', function() {
	return gulp.src(unitTests, {read: false})
	.pipe(mocha())
	.once('error', function() {
		process.exit(1);
	})
	.once('end', function() {
		process.exit();
	});
});

gulp.task('lint', function() {
	return gulp.src(jsSources)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(jshint.reporter('fail'));
});

gulp.task('default', ['lint']);

// continous integration tasks
gulp.task('ci', ['lint', 'utest']);
