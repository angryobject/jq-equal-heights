(function ($) {
  $.fn.equalHeights = function() {
    $(this).each(function(){
      var $elems = $(this).children(),
        maxHeight = 0;

      $elems.each(function(){
        var height = $(this).height();

        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      $elems.css({'min-height': maxHeight});
    });

    return this;
  };
}(jQuery));
