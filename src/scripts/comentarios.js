onload = () => {
  var countId = 0;
  if (localStorage.getItem("countId") != null) {
    countId = localStorage.getItem("countId");
  }
  for (let index = 0; index < countId; index++) {
    echoComentario(index);
  }
};
function echoComentario(last_coment) {
  var coment = JSON.parse(localStorage.getItem("comentario" + last_coment));
  $("#lista-comentarios").append(
    `<div class="media border-bottom pb-4 mb-4"><img src="assets/nerd.png" alt="" class="rounded-circle avatar-lg" style="opacity: 0.7;"width="30" /><div class="media-body ml-3"><h4 class="mb-1 texto-escuro font-weight-bold" style="font-size: 15px;">${coment.usuario}<span class="ml-1 roxo font-weight-bold" style="font-size: 13px;">postado no dia ${coment.data}</span></h4><p class="text-muted" style="font-size: 14px;">${coment.comentario}</p></div></div>`
  );
}
var salvaComentario = function (comentario) {
  comentario.preventDefault();
  var countId = 0;
  if (localStorage.getItem("countId") != null) {
    countId = localStorage.getItem("countId");
  } else {
    countId = 0;
  }
  var p_coment = document.getElementById("inpt_comentario").value;
  var p_usuario = document.getElementById("inpt_nome").value;
  var p_data = document.getElementById("id_01").value;
  var coment = { comentario: p_coment, usuario: p_usuario, data: p_data };
  var JSONcoment = JSON.stringify(coment);
  localStorage.setItem("comentario" + countId, JSONcoment);
  echoComentario(countId);
  countId++;
  localStorage.setItem("countId", countId);
  Swal.fire({
    title: "Comentário enviado!",
    icon: "success",
    showConfirmButton: false,
    timer: 1500,
  });
};
document.getElementById("enviar").addEventListener("click", salvaComentario);
