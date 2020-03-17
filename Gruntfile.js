module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'
      }
    },
   cssmin: {  
         'baidu.min.css': 'baidu.css'
       },
  uglify: {
    release:{
      files: {
         'baidu.min.js': 'baidu.js',
         'button.min.js':'button.js'
      }              
    }                    
  }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');;

  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['htmlmin','cssmin','uglify']); 
};
