$ ->
	$('#menu a').click (e)->
		# linkID = $(this).attr 'id'
		# alert $(this).attr('id')
		if ($(this).attr('id') != 'resume') 
			e.preventDefault()
			$('#content').load($(this).attr('href'))
		