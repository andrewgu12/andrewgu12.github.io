$ ->
	# for the menu, ajax loading for everything except resume
	# $('#menu a').click (e)->
		
	# 		e.preventDefault()
	# 		$('#content').load($(this).attr('href'))
	# just for the contact link in my about
	# have to include document in the entire click >.<
	$(document).on 'click', '#menu a, a#aboutContact', (e) ->
		if ($(this).attr('id') != 'resume') 
			e.preventDefault()
			$('#content').load($(this).attr('href'))
		