// no copyright - winarto panai


// Blokir klik kanan
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});


// smot scrol navbar
$('.page-scroll').on('click', function(e) {

 var yan = $(this).attr('href');

 var elemenTyan = $(yan);

 $('html , body').animate({
  scrollTop: elemenTyan.offset().top - 40
 }, 1000, 'easeInOutExpo');

 e.preventDefault();
})


// portofolio
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();


  if( wScroll > $('.portofolio').offset().top  - 250  ) {

    $('.portofolio .card').each(function(i) {

      setTimeout(function() {
        $('.portofolio .card').eq(i).addClass('muncul');
      }, 400 * (i+1));

    });


    

  }


});

// about
$(document).ready(function () {
  function checkVisibility() {
    $('.c-left, .c-right').each(function () {
      let top_of_element = $(this).offset().top;
      let bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > top_of_element + 200) {
        $(this).addClass('show');
      }
    });
  }

  // Jalankan saat halaman di-scroll dan saat pertama kali load
  $(window).on('scroll', checkVisibility);
  checkVisibility();
});



// jumbotron
$(document).ready(function () {
  // Fade in semua elemen secara lembut
  $('.avatar').fadeTo(4000, 1); // 1 detik
  $('.heading').delay(300).fadeTo(1000, 1); // delay 300ms
  $('.description').delay(600).fadeTo(1000, 1); // delay 600ms
});


// contact
$(document).ready(function () {
  // Animasi muncul dari kiri saat scroll
  $(window).on("scroll", function () {
    var wScroll = $(this).scrollTop();
    var target = $('.contact-animasi');

    if (wScroll > target.offset().top - 500) {
      target.addClass('muncul');
    }
  });
});
