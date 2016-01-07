// wow config
wow = new WOW({ boxClass: 'scroll', animateClass: 'animated', offset: 0, mobile: false, live: true })

// initiate wow
wow.init()

// lazyload
$("img").unveil(200, function() {
  $(this).load(function() {
    this.style.opacity = 1;
  });
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
