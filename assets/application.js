/**
* Smooth scrolling to anchor link under various conditions:
* - from within the page where the target is (both on page load and after cliking on an anchor link on the same page)
* - from a different the page where the target is
**/


function smooth_scroll_to(hash, e) {
  if(hash === '') {
    return false;
  } else {
    if($(hash).length > 0) {
      if(typeof e !== 'undefined') {
        e.preventDefault();
        history.pushState(null, null, $(e.target).attr('href'));
      }
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 250
      }, 750 );
      location.hash = hash;
      $('.navbar-toggler').click();
    }
  }
}

function autoWidthFlexbox () {
  $('.home-mediaList-link').each(function (e, i) {
    this.style.width = "auto";
  });
  $('.footer-mediaList-link').each(function (e, i) {
    this.style.width = "auto";
  });
  $('.home-image-title--bold').each(function (e, i) {
    this.style.width = "auto";
  });
  $('.home-image-title--normal').each(function (e, i) {
    this.style.width = "auto";
  });
  $('.footer-mediaList-item').each(function (e, i) {
    this.style.width = "auto";
  });
}



$(window).on('load',function() {
  smooth_scroll_to(window.location.hash);
});

$(document).ready(function() {

  if (!(/MSIE 10/i.test(navigator.userAgent)) && !(/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) && !(/Edge\/\d./i.test(navigator.userAgent))) {
    autoWidthFlexbox();
  }

  var $videoGallery = $('.videoGallery');

  $('#video').on('hidden.bs.modal', function (e) {
    $('.videoIframe').each(function(){
      this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    });
  });
  
  $('#video').on('shown.bs.modal', function (e) {
    if ($videoGallery.length) {
      $videoGallery.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          draggable: false,
          vertical: false,
          infinite: false,
          arrows: true,
          dots: false,
          pauseOnHover: false,
          pauseOnFocus: false,
          variableWidth: true,
          autoplaySpeed: 5500,
          speed: 800,
          prevArrow: $('.prev'),
          nextArrow: $('.next')
      });
    }
  });

});
