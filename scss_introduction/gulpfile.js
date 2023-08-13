const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function createStyle() {
  return src("ninja/**/*.scss").pipe(sass()).pipe(dest("css"));
}

function watchStyle() {
  watch(["ninja/**/*.scss"], createStyle);
}

exports.default = series(createStyle, watchStyle);
