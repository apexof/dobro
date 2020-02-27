const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
const projects = require("./ejs/projects.js");
const techs = require("./ejs/techs.js");

const { dest, src, task } = gulp;

task("ejs", () => src("./src/index.ejs")
    .pipe($.ejs({
        ext: "jpg", or: "portrait", projects, techs, lazyCx: "lazy"
    }))
    .pipe($.rename({ extname: ".html" }))
    .pipe($.htmlhint())
    .pipe($.htmlhint.reporter())
    .pipe($.htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./build")));

task("ejs-modals", () => src("./src/components/modals/**/*.ejs")
    .pipe($.rename({ dirname: "" }))
    .pipe($.ejs({
        ext: "jpg", or: "landscape", lazyCx: "lazy"
    }))
    .pipe($.rename({ extname: ".html" }))
    .pipe($.htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./build/modals")));

task("sass", () => src("./src/**/*.scss")
    .pipe($.cached("sass"))
    .pipe($.sass())
    // .pipe($.purgecss({
    //     content: ["./build/index.html"]
    //     // rejected: true
    // }))
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
