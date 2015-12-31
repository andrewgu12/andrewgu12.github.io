module.exports = (grunt) ->
	grunt.initConfig
		coffee:
			compile:
				files: [
					'dist/library.js' : 'src/library.coffee'
				]
		jade:
			compile:
				options:
					pretty: true
				files: [
					'index.html' : 'src/index.jade'
				]
		sass:
			dist:
				options:
					style: 'expanded'
				files: [
					'dist/library.css' : 'src/library.sass'
				]
		watch:
			scripts:
				files: 'src/library.coffee'
				tasks: ['coffee']
			styles:
				files: 'src/library.sass'
				tasks: ['sass']
			template:
				files: 'src/*.jade'
				tasks: ['jade']
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-jade'
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-sass'
	grunt.registerTask "default", ['watch']