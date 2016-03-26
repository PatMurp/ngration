'use strict';
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const mocha = require('gulp-mocha');
const complexity = require('gulp-complexity');
const jsinspect = require('gulp-jsinspect');
const eslint = require('gulp-eslint');

const jsSources = [
  'app.js',
  'routes.js',
  'config/*.js',
  'public/js/*js',
  'gulpfile.js',
];

const unitTests = [
  'test/app-spec.js',
];

// run mocha unit tests
// !!bug!! mocha tests not exiting when finished
gulp.task('utest', () =>
    gulp.src(unitTests, { read: false })
  .pipe(mocha()));

// check for errors in code
gulp.task('lint', () =>
    gulp.src(jsSources)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail')));

// enforce airbnb code standards
gulp.task('eslint', () =>
  gulp.src(jsSources)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError()));

// analyse code complexity
gulp.task('complex', () =>
    gulp.src(jsSources)
  .pipe(complexity()));

// detect copy/pasted & structurally similar code
gulp.task('inspect', () =>
  gulp.src(jsSources)
  .pipe(jsinspect({
    threshold: 10,
    identifiers: true,
    supress: 0,
  })));

gulp.task('default', ['lint']);

// continous integration tasks
gulp.task('ci', ['complex']);
gulp.task('ci-console', ['eslint', 'inspect']);
