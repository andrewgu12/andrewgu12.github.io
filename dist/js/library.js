(function() {
  $(function() {
    return $(document).on('click', '#menu a, a#aboutContact', function(e) {
      if ($(this).attr('id') !== 'resume') {
        e.preventDefault();
        return $('#content').load($(this).attr('href'));
      }
    });
  });

}).call(this);
