"use strict";
var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var jsSources;

jsSources = [
	'app.js',
	'routes.js',
	'config/*.js'
];

gulp.task('lint', function() {
	return gulp.src(jsSources)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task('default', function() {
	gutil.log('Workflows are great');
});
