const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
const newProducts = require("./ejs/newProducts");

const { dest, src, task } = gulp;

task("ejs", () => src("./src/index.ejs")
    .pipe($.ejs({
        ext: "jpg", or: "portrait", newProducts, lazyCx: "lazy"
    }))
    .pipe($.rename({ extname: ".html" }))
    .pipe($.htmlhint())
    .pipe($.htmlhint.reporter())
    .pipe($.htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./build")));

task("sass", () => src("./src/**/*.scss")
    .pipe($.cached("sass"))
    .pipe($.sass())
    .pipe($.autoprefixer())
    .pipe($.shorthand())
    .pipe($.csso())
    .pipe($.remember("sass"))
    .pipe($.concat("style.css"))
    .pipe(dest("./build")));

task("sass-vendors", () => src("./assets/libs/**/*.scss")
    .pipe($.sass())
    .pipe($.concat("vendors.css"))
    .pipe(dest("./build")));
