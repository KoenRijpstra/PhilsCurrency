import 'jquery'
import 'bootstrap'
import Typed from 'typed.js';
import {WOW} from 'wowjs';

(function ($) {
  'use strict'
  var app = {
    // Inverse header background when scroll
    hederInverse: function () {
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 5) {
          $('body').addClass('is-scrolling')
        } else {
          $('body').removeClass('is-scrolling')
        }
      })
    },

    accordianToggleIcon: function () {
      $('.accordion__title').on('click', function () {
        $('.accordion__title.active').removeClass('active')
        $(this).addClass('active')
      })
    },

    // Smooth scroll to target element

    scrollTo: function () {
      $('[data-scrollto]').on('click', function () {
        var id = '#' + $(this).data('scrollto')
        if ($(id).length > 0) {
          var offset = 0
          if ($('.header').length) {
            offset = $('.header').height()
          }
          $('html').animate({scrollTop: $(id).offset().top - offset}, 700)
        }
        return false
      })
    },

    /// Scroll to top
    scrollTop: function () {
      var documentOffsetHeight = document.body.offsetHeight
      var windowHeight = $(window).height()
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > (windowHeight + 500)) {
          $('.scroll-top.active').removeClass('active')
          $('.scroll-top').addClass('active')
        } else {
          $('.scroll-top').removeClass('active')
        }
      })
      $('.scroll-top').on('click', function () {
        $('html, body').animate({
          scrollTop: 0
        }, 600)
        return false
      })
    },

    wowInit: function () {
      var wow = new WOW(
        {
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: true,
          scrollContainer: null
        }
      )
      wow.init()
    },

    typingText: function () {
      if ($('[data-type]').data('type') === undefined) {
        return false
      }
      var typedTxt = $('[data-type]').data('type').split(',')
      var typed = new Typed('[data-type]', {
        strings: typedTxt,
        typeSpeed: 80,
        loop: true,
        backSpeed: 80,
        showCursor: false
      })
    },

    // Init the main function
    init: function () {
      app.hederInverse()
      app.accordianToggleIcon()
      app.scrollTo()
      app.scrollTop()
      app.wowInit()
      app.typingText()
    }

  }

  app.init()

}(jQuery))