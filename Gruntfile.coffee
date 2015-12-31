module.exports = (grunt) ->
	grunt.initConfig
		coffee:
			compile:
				files: [
					'dist/main.js' : 'src/coffee/*.coffee'
				]
		jade:
			compile:
				options:
					pretty: true
				files: [
					'index.html' : 'src/template.jade'
					'dist/html/home.html' : 'src/jade/home.jade'
					'dist/html/about.html' : 'src/jade/about.jade'
					'dist/html/contact.html' : 'src/jade/contact.jade'
				]
		sass:
			dist:
				options:
					style: 'compressed'
					sourcemap: 'none'
				files: [
					'dist/library.css' : 'src/styles/library.scss'
				]
		watch:
			scripts:
				files: 'src/coffee/*.coffee'
				tasks: ['coffee']
			styles:
				files: 'src/styles/*.scss'
				tasks: ['sass']
			template:
				files: ['src/template.jade', 'src/jade/*.jade']
				tasks: ['jade']
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-jade'
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-sass'
	grunt.registerTask "default", ['watch']