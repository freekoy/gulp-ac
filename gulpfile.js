const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const watch = require("gulp-watch")
const gulp = require('gulp')

gulp.task('watch', function () {
  watch('./*.zh', function(event) {
    
    gulp.src('./*.zh')
    // 使任何语言 间接支持中文变量
    .pipe(replace(/.[\u4e00-\u9fa5]+/g, function(match, p1, offset, string) {

      // 不以$开头的中文直接转译 以$开头的中文不转译
      if(match[0] == "$") {
        let output = 'y'
        for(let i = 1,len = match.length;i < len;i++) {
          output = output + match.charCodeAt(i).toString(16)
        }
        return output
      }else {
        return match
      }
    }, {
      skipBinary: false
    }))
    .pipe(rename({ extname: '.py' }))
    .pipe(dest('./'));
  });
});