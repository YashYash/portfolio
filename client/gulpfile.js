var gulp       = require('gulp'),
    nodemon    = require('gulp-nodemon'),
    uglify     = require('gulp-uglify'),
    minifyCss  = require('gulp-minify-css'),
    csslint    = require('gulp-csslint'),
    plumber    = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    jade       = require('gulp-jade'),
    concat     = require('gulp-concat'),
    prefix     = require('gulp-autoprefixer'),
    ts         = require('gulp-typescript'),
    config     = require('../client/config')
    tsProject  = ts.createProject('tsconfig.json');


/**
 * Compile typescript to js
 */
gulp.task('scripts', function() {
  console.log("#### Compiling typescript to javascript - tsconfig.json");
  var tsResult = tsProject.src()
    .pipe(ts(tsProject));

	return tsResult.js.pipe(gulp.dest('build'))
});

/**
 * Lint Home app css
 */
gulp.task('cssLint:home', function() {
  console.log("#### Lint css - Home app");
  var path = "home/styles/**.css";
  gulp.src(path)
    .pipe(csslint('csslintrc.json'))
    .pipe(csslint.reporter());
});

/**
 * Lint Dashboard app css
 */
gulp.task('cssLint:dashboard', function() {
  console.log("#### Lint css - Dashboard app");
  var path = "dashboard/styles/**.css";
  gulp.src(path)
    .pipe(csslint())
    .pipe(csslint.reporter());
});

/**
 * Lint Global css
 */
gulp.task('cssLint:global', function() {
  console.log("#### Lint css - Global app");
  var path = "global/styles/**.css";
  gulp.src(path)
    .pipe(csslint())
    .pipe(csslint.reporter());
});

/**
 * Concatinate Home app css
 */
gulp.task('styles:home', function() {
  console.log("#### Concat css - Home app");
  var path = "home/styles/**.css";
  var cssDest = "build/home/styles";
  var cssFileName = "home-app.min.css";

  gulp.src(path)
    .pipe(plumber())
    .pipe(concat(cssFileName))
    .pipe(minifyCss())
    .pipe(prefix('last 5 versions'))
    .pipe(gulp.dest(cssDest))
    .pipe(livereload());
});

/**
 * Concatinate Dashboard app css
 */
gulp.task('styles:dashboard', function() {
  console.log("#### Concat css - Dashboard app");
  var path = "dashboard/styles/**.css";
  var cssDest = "build/dashboard/styles";
  var cssFileName = "dashboard-app.min.css";

  gulp.src(path)
    .pipe(plumber())
    .pipe(concat(cssFileName))
    .pipe(minifyCss())
    .pipe(prefix('last 3 versions'))
    .pipe(gulp.dest(cssDest))
    .pipe(livereload());
});

/**
 * Concatinate Global css
 */
gulp.task('styles:global', function() {
  console.log("#### Concat css - Global");
  var path = "global/styles/**.css";
  var cssDest = "build/global/styles";
  var cssFileName = "global-app.min.css";

  gulp.src(path)
    .pipe(plumber())
    .pipe(concat(cssFileName))
    .pipe(minifyCss())
    .pipe(prefix('last 3 versions'))
    .pipe(gulp.dest(cssDest))
    .pipe(livereload());
});

/**
 *	Start the server
 */
gulp.task('start', function() {
  console.log("#### Start the server");
  var src = '../start.js';
  nodemon({
    script: src,
    ext: "js html"
  }).on('restart', function() {
    gulp.src(src)
      .pipe(livereload())
  })
});


/**
 *	Watch server and client files change
 */
gulp.task('watch', function() {

  console.log('#### Watching file changes');
  livereload.listen();

  // SERVER
  gulp.watch('../server/app.js', ['scripts']);
  gulp.watch('../server/start.js', ['scripts']);
  gulp.watch('../server/routes/*.js', ['scripts']);
  gulp.watch('../server/api/*.js', ['scripts']);
  gulp.watch('../server/models/*.js', ['scripts']);

  // CLIENT
  // Home App
  gulp.watch("home/styles/*.css", ['cssLint:home', 'styles:home']);
  gulp.watch("home/scripts/**.ts", ['scripts']);
  gulp.watch("home/scripts/directives/**.ts", ['scripts']);
  gulp.watch("home/scripts/factories/**.ts", ['scripts']);
  gulp.watch("home/scripts/services/**.ts", ['scripts']);
  gulp.watch("home/scripts/interfaces/**.ts", ['scripts']);
  gulp.watch("home/templates/**", ['styles:home']);

  // Dashboard App
  gulp.watch("dashboard/styles/*.css", ['cssLint:dashboard', 'styles:dashboard']);
  gulp.watch("dashboard/scripts/**.ts", ['scripts']);
  gulp.watch("dashboard/scripts/directives/**.ts", ['scripts']);
  gulp.watch("dashboard/scripts/factories/**.ts", ['scripts']);
  gulp.watch("dashboard/scripts/services/**.ts", ['scripts']);
  gulp.watch("dashboard/scripts/interfaces/**.ts", ['scripts']);  
  gulp.watch("dashboard/templates/**", ['styles:dashboard']);  

  // Global
  gulp.watch("global/styles/*.css", ['cssLint:global', 'styles:global']);
  gulp.watch("global/scripts/**.ts", ['scripts']);
  gulp.watch("global/scripts/directives/**.ts", ['scripts']);
  gulp.watch("global/scripts/factories/**.ts", ['scripts']);
  gulp.watch("global/scripts/services/**.ts", ['scripts']);
  gulp.watch("global/scripts/interfaces/**.ts", ['scripts']);  
  gulp.watch("global/templates/**", ['styles:global']);    

});

/**
 * The script that starts it all
 */
gulp.task('server', function() {
  gulp.start([
  	'watch',
    'cssLint:home',
    'cssLint:dashboard',
    'cssLint:global',
    'styles:home',
    'styles:dashboard',
    'styles:global',
    'scripts',
    'start'
  ]);
});
