module.exports = {
  default: {
    expand: true,
    cwd: 'src/post',
    src: ['**/*.ejs', '!release/*.ejs'],
    dest: 'public/',
    ext: '.html'
  }
}
