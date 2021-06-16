onLoadLinha = () => {
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
  $("#lista-linha").append(
    `<div class="album box mt-2"><div class="status-main" style="padding-top: 7px;"><img id="fotoPerfil" src="assets/profile.png" alt="usuario" class="rounded-circle mt-2" width="50"><div class="album-detail"><div class="album-title m-2" ><strong id="nomePerfil">Nome</strong></div></div></div><div class="album-content m-3 mb-4" style="font-size: 14px; padding-bottom: 18px;">${coment.comentario}</div></div></div></div></div>`
  );
}
var salvaLinha = function (comentario) {
  comentario.preventDefault();
  var countId = 0;
  if (localStorage.getItem("countId") != null) {
    countId = localStorage.getItem("countId");
  } else {
    countId = 0;
  }
  var p_coment = document.getElementById("inpt_linha").value;
  var coment = { comentario: p_coment };
  var JSONcoment = JSON.stringify(coment);
  localStorage.setItem("comentario" + countId, JSONcoment);
  echoComentario(countId);
  countId++;
  localStorage.setItem("countId", countId);
  Swal.fire({
    title: "Postagem realizada!",
    icon: "success",
    showConfirmButton: false,
    timer: 1500,
  });
};
document.getElementById("enviar").addEventListener("click", salvaLinha);
