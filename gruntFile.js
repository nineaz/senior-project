module.exports = function(grunt){
grunt.initConfig({
 cssmin: {
   target: {
     files: {
       'stylesheets/min.css': ['stylesheets/*.css']
     }
   }
 }
});
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.registerTask('default',['cssmin']);
}
