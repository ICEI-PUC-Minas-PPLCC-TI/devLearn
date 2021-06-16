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

function buscarCurso() {
  const busca = $("#busca-1").val();
  let obj = {
    data: [],
  };
  for (i = 0; i < db.data.length; i++) {
    if (
      busca.toLowerCase() == db.data[i].titulo.toLowerCase() ||
      busca.toLowerCase() == db.data[i].nome.toLowerCase() ||
      busca.toLowerCase() == db.data[i].idioma.toLowerCase() ||
      busca.toLowerCase() == db.data[i].conteudo.toLowerCase() ||
      busca.toLowerCase() == db.data[i].tags.toLowerCase() ||
      busca.toLowerCase() == db.data[i].url.toLowerCase()
    ) {
      obj.data.push(db.data[i]);
    }
    localStorage.setItem("obj_curso", JSON.stringify(obj));
    // console.log("DEBUG: OBJ ", obj);
  }
}

function carregarTable() {
  let obj = JSON.parse(localStorage.getItem("obj_curso"));
  if (!obj) {
    console.log("ERRO: OBJ VAZIO");
  } else {
    console.log("DEBUG (carregarTable()): ", obj);
    if (!obj.data.length) {
      window.location.href = "erro.html";
    }
    for (i = 0; i < obj.data.length; i++) {
      let resultado = obj.data[i];
      $("#table-cursos").append(`<tr><td scope="row">${i + 1}</td>
      <td>${resultado.titulo}</td>
      <td>${resultado.nome}</td>
      <td>${resultado.idioma}</td>
      <td>${resultado.conteudo}</td>
      <td>${resultado.tags}</td>
      <td><a style="color: white;" href="${resultado.url}">${
        resultado.url
      }</a></td>
      <td><button id= "${
        resultado.id
      }" onclick = "abrirAulaPesquisa(${i})" class="btn btn-roxo btn-sm btn-block font-weight-bold"><i class="fas fa-arrow-right"></i>Ver curso</button></td>
      </tr>`);
    }
  }
}

function abrirAulaPesquisa(indice) {
  let obj = JSON.parse(localStorage.getItem("obj_curso"));
  if (obj) {
    let curso = obj.data[indice];
    console.log("abrirAulaPesquisa");
    localStorage.setItem("curso_atual", JSON.stringify(curso));
    window.location.href = "aula.html";
  } else {
    console.log("erro");
  }
}
