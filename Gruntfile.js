module.exports = function(grunt){

    grunt.initConfig({

      copy: {
        public:{
          expand: true,
          cwd: 'src',
          src: '**',
          dest: 'build'
        }
      },
      clean: {
        dist: {
          src: 'build'
        }
      },
      sass: {
        dist: {
          options: {
            style: 'compressed'
          },
          files: {
            'src/css/css-components.css': 'src/sass/css-components.scss',
          }
        }
      },
      watch: {
        css: {
          files: 'src/sass/**/*.scss',
          tasks: ['sass'],
          options: {
            livereload: true,
          },
        },
      },
      browserSync: {
        public: {
          bsFiles: {
            src : ['src/**/*']
          },
          options: {
              watchTask: true,
              server: {
                  baseDir: "src"
              }
          }
        }
      }

    });

    grunt.registerTask('build', ['clean', 'copy']);
    grunt.registerTask('dev', ['sass']);
    grunt.registerTask('server', ['browserSync', 'watch']);
    grunt.registerTask('default', ['dev','server','build']);

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
}
