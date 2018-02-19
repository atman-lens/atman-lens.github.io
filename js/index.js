

// SMOOTH SCROLLING

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // STICKY NAVIGATION

  var $nav = $(".navigation");
  var navScrolled = "navigation__scrolled";
  var $win = $(window);

  $win.on("scroll", function () {
    if ($(this).scrollTop() > $win.height()) {
      
      // Add sticky nav
      $nav.addClass(navScrolled);
    } else {
      // remove sticky nav
      $nav.removeClass(navScrolled);
    }
  });
  
  // ANIMATE SKILL BAR

  $win.on("scroll", function (){

    if ($(this).scrollTop() > $win.height() * 0.2) {
      $('.skillbar').each(function(){
        $(this).find('.skillbar__bar').animate({
          width: $(this).attr('data-percent')
        },3000);
      });
    }
  }); 

  // TOGGLE NAV BAR

  $('.navigation__toggle').click(function(e) {
    // $(this).toggleClass('active');
    $('.navigation').toggleClass('active-fix', 8000);
    $('.navigation__list').toggleClass('active', 8000);
    $('.navigation-nav').toggleClass('active-nav', 8000);
    $('.navigation__item').toggleClass('active-link', 8000);
    e.preventDefault();
    });
});
