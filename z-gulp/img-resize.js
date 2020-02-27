const gulp = require("gulp");

const { lastRun, dest, src, task } = gulp;
const $ = require("gulp-load-plugins")();
const Mozjpeg = require("imagemin-mozjpeg");

task("big", () => src("./src/components/review/*-big.jpg", { since: lastRun("big") })
    .pipe($.rename({ dirname: "" }))
    // .pipe($.newer("./build/img/big"))
    .pipe($.imagesResizer({ width: 500 }))
    .pipe($.imagemin({
        plugins: [
            Mozjpeg({
                progressive: true,
                quality: 75,
                sample: ["2x1"]
            })]
    }))
    .pipe($.debug({ title: "big" }))
    .pipe(dest("./build/img/big")));

// task("proj", () => src("./img/project-6/*.*")
// .pipe($.rename({ dirname: "" }))
// .pipe($.newer("./src/components/modals"))
// .pipe($.imagesResizer({ width: 700 }))

// .pipe($.imagemin({
//     plugins: [
//         Mozjpeg({
//             progressive: true,
//             quality: 75,
//             sample: ["2x1"]
//         })]
// }))
// .pipe($.rename({ suffix: "-big" }))
// .pipe($.debug({ title: "proj" }))
// .pipe(dest("./src/components/modals/project-6")));


task("proj1", () => src("./img/projects/res/project5.jpg")
    // .pipe($.rename({ dirname: "" }))
    // .pipe($.newer("./src/components/projects"))
    .pipe($.imageResize({
        height: 195,
        width: 641,
        crop: true,
        gravity: "North"

    }))


    // .pipe($.rename({ suffix: "-big" }))
    .pipe($.debug({ title: "proj" }))
    // .pipe(dest("./src/components/projects")));
    .pipe(dest("./img/projects/h")));
