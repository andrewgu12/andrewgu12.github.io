(function() {
  $(function() {
    $('#menu a').click(function(e) {
      if ($(this).attr('id') !== 'resume') {
        e.preventDefault();
        return $('#content').load($(this).attr('href'));
      }
    });
    return $(document).on('click', 'a#aboutContact', function() {
      return alert('cmon!');
    });
  });

}).call(this);
