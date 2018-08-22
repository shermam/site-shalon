var gulp = require('gulp');
var server = require('gulp-webserver');
var imageResize = require('gulp-image-resize');
var htmlmin = require('gulp-htmlmin');


//Main task
gulp.task('default', ['build']);

gulp.task('watch', function () {
	gulp.watch('old/**/*', ['build']);
});

//Serves the dist folder
gulp.task('serve', function () {
	gulp.src('dist')
		.pipe(server({ open: true }));
})

//Task to build the project
gulp.task('build', function () {

	//TODO - clean build
	gulp.src('old/**/*')
		.pipe(gulp.dest('dist'));
});

// Convert images to webp
gulp.task('webp', function () {
	return gulp.src('old/img/*')
		.pipe(imageResize({ format: 'webp', imageMagick: true }))
		.pipe(gulp.dest('dist/webp'));
});


gulp.task('minify', function () {
	return gulp.src('old/*.html')
		.pipe(htmlmin({ collapseWhitespace: true, minifyCSS: true }))
		.pipe(gulp.dest('dist'));
});