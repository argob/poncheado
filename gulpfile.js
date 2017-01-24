const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const gutil = require('gulp-util');
const child = require('child_process');


///////////////////////////
// Options
///////////////////////////

var options = {
	sass: {
		default: {
			errLogToConsole: true,
			outputStyle: 'expanded'
		},
		compressed: {
			errLogToConsole: true,
			outputStyle: 'compressed'
		},
		src: 'src/vendor/poncho/src/css/**/*.scss',
		input: 'src/vendor/poncho/src/css/poncho.scss',
		input_lite: 'src/vendor/poncho/src/css/ponchito.scss',
		dest: 'src/vendor/poncho/dist/css/'
	}
};

// Default Task
gulp.task('default', ['build:poncho', 'build:ponchito', 'build:poncho-min', 'poncho:watch']);


///////////////////////////
// Poncho
///////////////////////////

// Watch
gulp.task('poncho:watch', function() {
  return gulp
    .watch( options.sass.src, ['build:poncho', 'build:ponchito', 'build:poncho-min'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// Poncho
gulp.task('build:poncho', function() {
    gulp.src( options.sass.input )
	    .pipe(sourcemaps.init())
        .pipe(sass( options.sass.default).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest( options.sass.dest ));
});

// Poncho.min
gulp.task('build:poncho-min', function() {
    gulp.src( options.sass.input )
	    .pipe(sourcemaps.init())
	    .pipe(sass( options.sass.compressed ).on('error', sass.logError))
	    .pipe(rename('poncho.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest( options.sass.dest ));
});

// Poncho.lite
gulp.task('build:ponchito', function() {
    gulp.src( options.sass.input_lite )
	    .pipe(sourcemaps.init())
	    .pipe(sass( options.sass.compressed ).on('error', sass.logError))
	    .pipe(rename('ponchito.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest( options.sass.dest ));
});