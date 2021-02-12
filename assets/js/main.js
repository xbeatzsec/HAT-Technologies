
!(function ($) {
  "use strict";

  // Desafio para o professor :)!!
  $(document).keydown(function (event) {
    if (event.keyCode == 123) { //evitar  F12
      document.querySelector('#hero').scrollIntoView({
        behavior: 'smooth'
      });
      document.getElementById("h1_p").innerHTML = "F12? Really?"
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // evitar Ctrl+Shift+I
      document.querySelector('#hero').scrollIntoView({
        behavior: 'smooth'
      });
      document.getElementById("h1_p").innerHTML = "Ohhhhhhhh you really close!"

      return false;
    }
    document.addEventListener('contextmenu', event => event.preventDefault()); //Evitar o clike do lado direito
  });
  // ctrl + u evitado
  document.onkeydown = function (e) {
    if (e.ctrlKey &&
      (e.keyCode === 67 ||
        e.keyCode === 86 ||
        e.keyCode === 85 ||
        e.keyCode === 117)) {
      document.querySelector('#hero').scrollIntoView({
        behavior: 'smooth'
      });
      document.getElementById("h1_p").innerHTML = "Someone is trying to view the source code :)"
      return false;
    } else {
      return true;
    }
  };
  $(document).keypress("u", function (e) {
    if (e.ctrlKey) {
      return false;
    }
    else {
      return true;
    }
  });

  // smooth scroll
  var scrolltoOffset = $('#header').outerHeight() - 17;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // smooth scroll ativo
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });
  // toggle do header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // intro
  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
    (index === 0) ?
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>") :
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
  });

  heroCarousel.on('slid.bs.carousel', function (e) {
    $(this).find('h2').addClass('animate__animated animate__fadeInDown');
    $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
  });

  // back to the top botão
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });
})(jQuery);
