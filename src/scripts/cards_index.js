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

var db = JSON.parse(localStorage.getItem("db_curso"));
if (!db) {
  db = db_cursos_iniciais;
}

//Função para criar mais de 4 cards
$(document).ready(function () {
  if (db.data.length > 4) {
    //Condição para que eles sejam criados
    $("#cards").html(""); //Apaga o html original da div de cards
    $("#cardcontainer").append('<div class="row" id ="cards-2"></div>'); //Cria um div nova onde eles irão ficar
    for (
      i = 0;
      i < db.data.length;
      i++ //Criaa mais 4 cards dentro da div nova
    ) {
      let obj = db.data[i];
      $("#cards")
        .append(`<div id="${obj.id}" class="card mt-4 mr-3 cardi" style="width: 16rem; border-radius: 30px;">
          <img class="card-img-top filtro-curso" style=" border-radius: 30px;" src="assets/img-curso.png">
          <div class="card-body">
              <h5 class="card-title">${obj.titulo}</h5>
              <p class="card-text mb-2">Autor: ${obj.nome}</p>
              <p class="card-text mb-2">Idioma: ${obj.idioma}</p>
              <p class="card-text mb-2">Conteúdo: ${obj.conteudo}</p>
              <p class="card-text mb-2">Tags: ${obj.tags}</p>
              <button id="${obj.id}" onclick = "abrirAula(this.id)" class="btn btn-roxo btn-sm btn-block font-weight-bold"><i
              class="fas fa-arrow-right"></i>
          Ver curso</button>
          </div>`);
    }
  } else if (db.data.length <= 4) {
    //caso só tenham 4 cursos -> ativa a função inicial
    $("#cards").html(""); //Apaga o html original da div de cards
    for (
      i = 0;
      i < db.data.length;
      i++ //Cria os 4 cards através de um looping de append
    ) {
      let obj = db.data[i];
      $("#cards")
        .append(`<div class="card mt-4 mr-3 cardi" style="width: 16rem; border-radius: 30px;">
          <img class="card-img-top filtro-curso" style=" border-radius: 30px;" src="assets/img-curso.png">
          <div class="card-body">
              <h5 class="card-title">${obj.titulo}</h5>
              <p class="card-text mb-2">Autor: ${obj.nome}</p>
              <p class="card-text mb-2">Idioma: ${obj.idioma}</p>
              <p class="card-text mb-2">Conteúdo: ${obj.conteudo}</p>
              <p class="card-text mb-2">Tags: ${obj.tags}</p>
              <button id="${obj.id}" onclick = "abrirAula(this.id)" class="btn btn-roxo btn-sm btn-block font-weight-bold"><i
              class="fas fa-arrow-right"></i>
              Ver curso</button>
          </div>`);
    }
  }
});
