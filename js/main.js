$(document).ready(function () {
  /* -------------------------------------------------------------
  Goto Href
  ------------------------------------------------------------- */
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
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

  /* -------------------------------------------------------------
  Swiper
  ------------------------------------------------------------- */
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});