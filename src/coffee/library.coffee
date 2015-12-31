$ ->
	$('#menu a').click (e)->
		# linkID = $(this).attr 'id'
		e.preventDefault()
		$('#content').load($(this).attr('href'))