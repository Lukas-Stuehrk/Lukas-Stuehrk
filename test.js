function isTouchDevice() {
  return ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
}

function translateYPropertyString(value) {
  return 'translateY(' + value + 'px)';
}

// TODO
if (!isTouchDevice()) {
  var $header = $('#frontpage-header');
  var $window = $(window);
  var $fixednav = $('#fixednav');

  $window.on('scroll', function () {
    var scrollTop = $window.scrollTop();
    if (scrollTop > 0) {
      if (scrollTop < 280) {
        $header.css('transform', translateYPropertyString(scrollTop / 0.6));
        $fixednav.addClass('hidden');
      } else {
        $fixednav.removeClass('hidden');
      }
    } else {
      $header.css('transform', translateYPropertyString(0));
    }
  });

  // TODO
  $fixednav.on('click', 'a', function () {
    $fixednav.addClass('hidden');
  });
}
