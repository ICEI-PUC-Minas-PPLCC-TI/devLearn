var db_cursos_iniciais = {
  data: [
    {
      id: 1,
      titulo: "O guia estelar de HTML",
      nome: "Rocketseat",
      idioma: "PT",
      conteudo: "HTML",
      tags: "WEB",
      url: "https://app.rocketseat.com.br/node/o-guia-estelar-de-html",
    },
    {
      id: 2,
      titulo: "O guia estelar de CSS",
      nome: "Rocketseat",
      idioma: "PT",
      conteudo: "CSS",
      tags: "WEB",
      url: "https://app.rocketseat.com.br/node/o-guia-estelar-de-css",
    },
    {
      id: 3,
      titulo: "O guia estelar de Javascript",
      nome: "Rocketseat",
      idioma: "PT",
      conteudo: "Javascript",
      tags: "WEB",
      url: "https://app.rocketseat.com.br/node/o-guia-estelar-de-java-script",
    },
    {
      id: 4,
      titulo: "HTML que faz sentido, para todos",
      nome: "Rocketseat",
      idioma: "PT",
      conteudo: "HTML",
      tags: "WEB",
      url: "https://app.rocketseat.com.br/node/html-que-faz-sentido-para-todos",
    },
  ],
};

let obj = JSON.parse(localStorage.getItem("curso_atual"));

$(document).ready(function(){
  console.log(3);

  $("#titulo").html('');
  $("#titulo").append(`<div class="py-5 py-lg-0">
    <h5 class="text-white display-4 titulo-roxo mt-4" style="font-size: 35px;">
      <span style="color: #472d87">resultado da pesquisa:</span>
      <br>
      ${obj.titulo}
    </h5>
    <p class="mb-4 text-white">
      <i>Autor: ${obj.nome} <br>Idioma: ${obj.idioma} <br>Tags: ${obj.tags}</i>
    </p>
    <p class="mb-4 text-white">
      <span class="mr-4"><i class="fas fa-clock"></i> 1h 30 minutos</span>
      <span style="font-size: 15px">★★★★☆</span>
    </p>
  </div>`);
  $("#introTitulo").html("");
  $("#introTitulo").append(`
  <div class="mr-auto">
  ${obj.titulo}
  </div>`)
  $("#descricao").html("");
  $("#descricao").append(`
  <div class="mb-4">
  <h3 class="mb-2">Descrição do curso</h3>
  <p class="text-muted">
  Autor: ${obj.nome} <br>Idioama: ${obj.idioma} <br>Tags: ${obj.tags}
  </p>
  </div>`);
});