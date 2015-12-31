$ ->
	# for the menu, ajax loading for everything except resume
	$('#menu a').click (e)->
		if ($(this).attr('id') != 'resume') 
			e.preventDefault()
			$('#content').load($(this).attr('href'))
	# just for the contact link in my about
	# $('a#aboutContact').on 'click', (e) ->
	# 	e.preventDefault()
	# 	$('#content').load($(this).attr('href'))
	$('p a').on 'click', ->
		alert 'cmon!'
		