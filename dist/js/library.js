(function() {
  $(function() {
    $('#menu a').click(function(e) {
      if ($(this).attr('id') !== 'resume') {
        e.preventDefault();
        return $('#content').load($(this).attr('href'));
      }
    });
    return $('p a').on('click', function() {
      return alert('cmon!');
    });
  });

}).call(this);
