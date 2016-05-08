module.exports = {
  options: {
    livereload: true
  },
  concat: {
    files: ['src/post/release/*.ejs'],
    tasks: ['concat']
  },
  ejs: {
    files: ['**/*.ejs', '!release/*.ejs'],
    tasks: ['ejs']
  },  
  rsync: {
    files: ['src/static/**/*'],
    tasks: ['rsync']
  }
};

