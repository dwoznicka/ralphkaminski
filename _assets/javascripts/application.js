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

$(window).on('load',function() {
  smooth_scroll_to(window.location.hash);
});

$(document).ready(function() {
  
  var $homeGallery = $('.home-gallery');
  if ($homeGallery.length) {
    $homeGallery.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      draggable: true,
      vertical: false,
      infinite: true,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      variableWidth: true,
      autoplaySpeed: 5500,
      speed: 1000
    });
  }
});
