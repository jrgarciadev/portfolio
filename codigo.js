$(document).ready(function () {

  $("a[target = '_blank']").remove();

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });



  // Scroll reveal
  window.sr = ScrollReveal();
  sr.reveal('.img1', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);
});

(function($) {
  "use strict"; // Start of use strict
 //#to-top button appears after scrolling
 var fixed = false;
 $(document).scroll(function() {
   if ($(this).scrollTop() > 250) {
     if (!fixed) {
       fixed = true;
       $('#toTop').show("slow", function() {
         $('#toTop').css({
           position: 'fixed',
           display: 'block'
         });
       });
     }
   } else {
     if (fixed) {
       fixed = false;
       $('#toTop').hide("slow", function() {
         $('#toTop').css({
           display: 'none'
         });
       });
     }
   }
 });
})(jQuery); // End of use strict