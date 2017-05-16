var gulp = require('gulp');
var uglify = require('gulp-uglify');
gulp.task('default',function(){
	console.log('hello World');
	gulp.src('1.js').pipe(uglify()).pipe()
});

