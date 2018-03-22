module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		uglify: {
			options: {
				banner: '/*! <%= pkg.name%>-<%= pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd")%>*/\n'
			},

			build: {
				files: [
					{src: 'js/click.js',dest: 'build/click.min.js'},
					{src: 'js/plugin.js',dest: 'build/plugin.min.js'}
				]
				
			}
		},


		jshint: {
			build: ['Gruntfile.js', "js/*.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		watch: {
			build: {
				files: ['Gruntfile.js', 'js/*.js'],
				tasks: ["jshint", "uglify"],
				options: {
					spawn: false
				}
			}
		}
	});



	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.registerTask('default',['jshint','uglify',"watch"]);
	//grunt.registerTask('js-test',["jshint"]);

};

