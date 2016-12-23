/* jshint node:true */
module.exports = function(grunt) {

  grunt.registerTask('default', ['postcss']);

  // Options that combine just enough to make IE work, without minifying too much
  var cssBaseOptions = {
    failOnError: true,
    // map: { inline: false },
    processors: [
      require('postcss-partial-import')(),
      require('postcss-discard-comments')()
    ]
  };

  // Extra options that are used to pick up unnecessary things we should fix ourselves, not rely on filters
  var cssUnnecessaryFilters = {
    processors: [
      require('stylelint')({
        // More rules can be found here: http://stylelint.io/user-guide/rules/
        'rules': {
          'declaration-colon-space-after': 'always'
        }
      })
    ]
  };

  grunt.initConfig({
    postcss: {
      maketest: {
        src: 'src/test.css',
        dest: 'scratch/input.css'
      },
      test: {
        src: 'scratch/input.css',
        dest: 'scratch/test.css'
        ,options: cssUnnecessaryFilters
      }
        , options: cssBaseOptions
    }
  });

  grunt.loadNpmTasks('grunt-postcss');
};