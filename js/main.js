// lazyload
$("img").unveil(200, function() {
  $(this).load(function() {
    this.style.opacity = 1;
  });
});

// anchor scroll
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

console.log("░░░░░░░░░▄░░░░░░░░░░░░░░▄░░░░")
console.log("░░░░░░░░▌▒█░░░░░░░░░░░▄▀▒▌░░░")
console.log("░░░░░░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐░░░")
console.log("░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐░░░")
console.log("░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐░░░")
console.log("░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌░░░")
console.log("░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌░░")
console.log("░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐░░")
console.log("░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌░")
console.log("░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌░")
console.log("▀▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐░")
console.log("▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌")
console.log("▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐░")
console.log("░▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌░")
console.log("░▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐░░")
console.log("░░▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌░░")
console.log("░░░░▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀░░░")
console.log("░░░░░░▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀░░░░░")
console.log("░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▀▀░░░░░░░░")
console.log("░░░ n e w s a p p s . i o ░░░")
console.log("░░░ wassap? ░░░░░░░░░░░░░░░░░")
