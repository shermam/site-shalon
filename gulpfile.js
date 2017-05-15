var gulp = require('gulp');
var server = require('gulp-webserver');


//Main task
gulp.task('default', ['build', 'serve']);

//Serves the dist folder
gulp.task('serve', function () {
	gulp.src('dist')
		.pipe(server({open:true}));
})

//Task to build the project
gulp.task('build', function () {
	
	//TODO - clean build
	gulp.src('src/**/*')
		.pipe(gulp.dest('dist'));
});