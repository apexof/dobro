const gulp = require("gulp");
// const $ = require("gulp-load-plugins")();

const { src, task, dest } = gulp;

task("static", () => src("./assets/static/**/*")
    .pipe(dest("./build/assets/static")));

task("fonts", () => src("./assets/fonts/**/*.{woff,ttf,eot}")
    .pipe(dest("./build/assets/fonts")));
