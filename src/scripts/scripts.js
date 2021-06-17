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

// tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

function usuarioLogado() {
  var usuarioCorrenteLocal = JSON.parse(localStorage.getItem("usuarioCorrente"));
  var usuarioCorrenteSession = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
  console.log("Checando login...");
  if (!usuarioCorrenteLocal && !usuarioCorrenteSession) {
    window.location.href = "index.html";
  }
}

function removerCurso() {
  localStorage.removeItem("curso_atual")
}