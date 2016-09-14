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
		src: 'src/vendor/poncho/src/css/*',
		input: 'src/vendor/poncho/src/css/poncho.scss',
		dest: 'src/vendor/poncho/dist/css/'
	},
	jekyll: {
		command: 'bundle exec jekyll serve',
		src: 'src/'
	}
};

// Default Task
gulp.task('default', ['serve:jekyll', 'build:poncho', 'build:poncho-min', 'poncho:watch']);


///////////////////////////
// Jekyll
///////////////////////////

// Runs Jekyll build + log
gulp.task('serve:jekyll', function() {
  	const jekyll = child.spawn('jekyll', ['serve',
	    '--watch',
	    '--incremental',
	    '--drafts'
	]);

	const JekyllLog = (buffer) => {
    	buffer.toString()
			.split(/\n/)
        	.forEach((message) => gutil.log('Jekyll: ' + message));
    };

    jekyll.stdout.on('data', JekyllLog);
 	jekyll.stderr.on('data', JekyllLog);
});

///////////////////////////
// Poncho
///////////////////////////

// Watch
gulp.task('poncho:watch', function() {
  return gulp
    .watch( options.sass.src, ['poncho', 'poncho-min'])
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