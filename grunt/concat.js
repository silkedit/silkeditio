var fs = require('fs');
module.exports = {
  default: {
    options: {
      banner: "<% layout('../layout/base') -%>\n" +
        "<% block('title', 'Release -') -%>\n\n" +
        "<%- partial('partials/releaseHead') %>\n\n"
    },
    src: (function(){
      const files = fs.readdirSync(__dirname + '/../src/post/release');

      // ファイルの並びを逆順にする
      return files.reverse().map(function(file){
        return 'src/post/release/' + file;
      });
    })(),
    dest: 'src/post/release.ejs'
  }
}
