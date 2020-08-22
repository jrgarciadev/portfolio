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
  var swiper = new Swiper('#swiper1', {
    spaceBetween: 30,
    pagination: {
      el: '#pagination1',
      clickable: true,
    },
  });
  var swiper = new Swiper('#swiper2', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '#pagination2',
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
  });

  var swiper = new Swiper('#swiper3', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

});