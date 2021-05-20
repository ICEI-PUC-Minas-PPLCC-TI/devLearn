// modal login
$(window).on('load', function () {
$('#preloader .inner').fadeOut();
$('#preloader').delay(200).fadeOut('slow');
$('body').delay(200).css({'overflow': 'visible'});
})

//table
$(window).on("load resize ", function() {
var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
$('.tbl-header').css({'padding-right':scrollWidth});
}).resize();
