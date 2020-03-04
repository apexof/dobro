const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
const products = require("./ejs/products");

const { dest, src, task } = gulp;

task("ejs", () => src("./src/pages/**/*.ejs")
    .pipe($.ejs({
        ext: "jpg", or: "portrait", products, lazyCx: "lazy"
    }))
    .pipe($.rename({ extname: ".html" }))
    .pipe($.htmlhint())
    .pipe($.htmlhint.reporter())
    // .pipe($.htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./build")));

task("sass", () => src(["./src/**/*.scss", "!./src/assets/libs/**/*.scss"])
    .pipe($.cached("sass"))
    .pipe($.sass())
    .pipe($.autoprefixer())
    .pipe($.shorthand())
    // .pipe($.csso())
    .pipe($.remember("sass"))
    .pipe($.concat("style.css"))
    .pipe(dest("./build")));

task("sass-vendors", () => src("./src/assets/libs/**/*.scss")
    .pipe($.sass())
    .pipe($.csso())
    .pipe($.concat("vendors.css"))
    .pipe(dest("./build")));
