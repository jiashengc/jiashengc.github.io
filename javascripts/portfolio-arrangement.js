(function($) {
  $(document).ready(function() {
    $("[title]").style_my_tooltips();
  });
})(jQuery);

$(function() {
  var $container = $('#content');
  $container.imagesLoaded(function() {
    $container.masonry({
      itemSelector: '#characterbox',
    });
  });
  $container.infinitescroll({
      itemSelector: "#characterbox",
      navSelector: "div.pagination",
      nextSelector: ".pagination a#next",
      loadingImg: "",
      loadingText: "<em></em>",
      bufferPx: 10000,
      extraScrollPx: 12000,
    },
    // trigger Masonry as a callback
    function(newElements) {
      var $newElems = $(newElements).css({
        opacity: 0
      });
      // ensure that images load before adding to masonry layout
      $newElems.imagesLoaded(function() {
        $newElems.animate({
          opacity: 1
        });
        $container.masonry('appended', $newElems, true);
      });
    }
  );
});
