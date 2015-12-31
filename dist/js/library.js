(function() {
  $(function() {
    $('#menu a').click(function(e) {
      if ($(this).attr('id') !== 'resume') {
        e.preventDefault();
        return $('#content').load($(this).attr('href'));
      }
    });
    return $('a#aboutContact').on('click', function(e) {
      e.preventDefault();
      return $('#content').load($(this).attr('href'));
    });
  });

}).call(this);
