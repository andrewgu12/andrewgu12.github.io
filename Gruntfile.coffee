module.exports = (grunt) ->
	grunt.initConfig
		coffee:
			compile:
				files: [
					'dist/js/library.js' : 'src/coffee/*.coffee'
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
		uglify:
			options:
				mangle: false
				compress: false
				beautify: true
			my_target:
				files: [
					'dist/library.js' : 'dist/js/*.js'
				]
		watch:
			scripts:
				files: 'src/coffee/*.coffee'
				tasks: ['coffee']
			styles:
				files: ['src/styles/*.scss', 'src/styles/**/*.scss']
				tasks: ['sass']
			template:
				files: ['src/template.jade', 'src/jade/*.jade']
				tasks: ['jade']
			uglify:
				files: ['dist/js/*.js']
				tasks: ['uglify']
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-jade'
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-sass'
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.registerTask "default", ['watch']