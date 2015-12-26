// wow config
wow = new WOW({ boxClass: 'scroll', animateClass: 'animated', offset: 0, mobile: false, live: true })

// initiate wow
wow.init()

// lazyload
var layzr = new Layzr({
  selector: '[data-img]',
  attr: 'data-img',
  retinaAttr: 'data-img-retina',
  bgAttr: 'data-img-bg',
  hiddenAttr: 'data-img-hidden',
  threshold: 0,
  callback: null
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 300);
        return false;
      }
    }
  });
});
