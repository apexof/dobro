const gulp = require("gulp");
const path = require("path");
const del = require("del");
const bSync = require("browser-sync");
const $ = require("gulp-load-plugins")();
const ghPages = require("gulp-gh-pages");

const { src, task, parallel, series, watch } = gulp;
require("./z-gulp/static");
require("./z-gulp/img");
require("./z-gulp/sass");
require("./z-gulp/js");

task("serve", () => {
    bSync({
        server: "./build",
        open: false
        // tunnel: true
    });
    watch("./build/**/*.*").on("change", bSync.reload);
});

task("watch", () => {
    watch("./src/**/*.scss", series("sass"));
    watch("./src/**/*.ejs", series("ejs"));
    watch("./src/**/*.js", series("js"))
        .on("unlink", (filepath) => {
            $.remember.forget("js", path.resolve(filepath));
            delete $.cached.caches.js[path.resolve(filepath)];
        });
    watch("./assets/**/*", series("static"));
    watch("./src/**/*.{png,gif,jpg,svg}", series("all-img"))
        .on("unlink", (filepath) => {
            const destFilePath = path.resolve("./build/img", path.basename(filepath));
            const destPreviewPath = path.resolve("./build/img/previews", path.parse(filepath).name + ".svg");
            const destWebpPath = path.resolve("./build/img/webp", path.parse(filepath).name + ".webp");
            del.sync(destPreviewPath);
            del.sync(destFilePath);
            del.sync(destWebpPath);
        });
    watch("./src/**/*.{png,jpg}", series("sqip"));
    watch("./src/**/*.{png,jpg}", series("webp"));
});

// task("gh-pages", () => src("./build/**/*").pipe($.ghPages()));

gulp.task("gh-pages", () => gulp.src("./build/**/*")
    .pipe(ghPages()));
task("clean", () => del("build/**/*"));

task("build", series("ejs", "js", "js-vendors", "sass", "sass-vendors", "img", "fonts", "static"));

task("default", series("build", parallel("watch", "serve")));
