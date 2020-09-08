// Adding scroll functionality for 'Learn More' button
$('.learn-more').click(function () {
  $('html,body').animate({ scrollTop: $('#about').offset().top }, 1500);
});

// Adding scroll functionality for the 'Reach Out' button in the footer
$('.reach_out_btn').click(function () {
  $('html,body').animate({ scrollTop: $('#contact').offset().top }, 2000);
});

// Adding scroll functionality so logo click brings back to top
$('.logo').click(function () {
  $('html,body').animate({ scrollTop: $('#home').offset().top }, 1500);
});

