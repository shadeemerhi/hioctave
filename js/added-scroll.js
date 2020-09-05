// Adding scroll functionality for 'Learn More' button
$('.learn-more').click(function () {
  $('html,body').animate({ scrollTop: $('#about').offset().top }, 1500);
});

// Adding scroll functionality so logo click brings back to top
$('.logo').click(function () {
  $('html,body').animate({ scrollTop: $('#home').offset().top }, 1500);
});

