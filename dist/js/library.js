(function() {
  $(function() {
    return $('#menu a').click(function(e) {
      if ($(this).attr('id') !== 'resume') {
        e.preventDefault();
        return $('#content').load($(this).attr('href'));
      }
    });
  });

}).call(this);
