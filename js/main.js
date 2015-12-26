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
