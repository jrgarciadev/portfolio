$(document).ready(function () {
  /* -------------------------------------------------------------
  Goto Href
  ------------------------------------------------------------- */
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  /* -------------------------------------------------------------
  Back to top
  ------------------------------------------------------------- */
  $(window).scroll(function(){
    if ($(this).scrollTop()>10) {
      $('#lc-toTop').addClass('backtop-top-show');
    } else {
      $('#lc-toTop').removeClass('backtop-top-show');
    }
  })
  $("#lc-toTop").on('click',function (e) {
    e.preventDefault();
    $("html, body").animate({scrollTop: 0}, 1000);
  });
});