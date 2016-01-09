/**
 * Created by hezhiqiang on 16/1/9.
 */
var gulp = require("gulp"),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename");

gulp.task("js-min", function(){
   gulp.src("simple-dataset.js")
       .pipe(uglify())
       .pipe(rename({
           suffix: ".min"
       }))
       .pipe(gulp.dest("."));
});