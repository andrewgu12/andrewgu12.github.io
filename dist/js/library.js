(function() {
  $(function() {
    return $('#menu a').click(function(e) {
      e.preventDefault();
      return $('#content').load($(this).attr('href'));
    });
  });

}).call(this);
