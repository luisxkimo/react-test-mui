"use strict";

var gulp = require("gulp"),
	eslint = require("gulp-eslint"),
	browserify = require("browserify"),
	fs = require("fs"),
	watch = require("gulp-watch"),
	reactify = require("reactify");

var allJsFiles = ["Gulpfile.js", "./src/lib/**/*.js"];
 

gulp.task("lint", function () {

	return gulp.src(allJsFiles)
		.pipe(eslint({ configFile: "./eslint.json"}))
		.pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task("build", ["lint"], function () {

	return browserify({
				entries: "./src/lib/index.js",
				extensions: [".js"]
			})
			.transform(reactify)
			.bundle()
			.pipe(fs.createWriteStream("./src/dist/app.js"))
			.on("error", function (err) { console.log("Error [build]: " + err.message); });
});

gulp.task("watch", ["build"], function () {
		watch(allJsFiles, function() {
			gulp.start(["build"]);
	});
});

gulp.task("default", ["watch"]);
