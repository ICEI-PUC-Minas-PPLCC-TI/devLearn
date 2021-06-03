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

function displayMessage(msg) {
  $("#msg").html('<div class="alert alert-warning">' + msg + "</div>");
}

function insertCurso(curso) {
  let novoCurso = {
    id: curso.id,
    titulo: curso.titulo,
    nome: curso.nome,
    idioma: curso.idioma,
    conteudo: curso.conteudo,
    tags: curso.tags,
    url: curso.url,
  };

  db.data.push(novoCurso);
  displayMessage("Curso adicionado");

  localStorage.setItem("db_curso", JSON.stringify(db));
}

function updateCurso(index, curso) {
  // db.data.filter(id => index)[index - 1] = {
  //  ...curso
  // }

  let obj = db.data.find((o) => o.id == index);
  let pos = db.data.indexOf(obj);

  (db.data.filter((id) => index)[pos].titulo = curso.titulo),
    (db.data.filter((id) => index)[pos].nome = curso.nome),
    (db.data.filter((id) => index)[pos].idioma = curso.idioma),
    (db.data.filter((id) => index)[pos].conteudo = curso.conteudo),
    (db.data.filter((id) => index)[pos].tags = curso.tags);
    (db.data.filter((id) => index)[pos].url = curso.url);

  displayMessage("Curso alterado com sucesso");

  localStorage.setItem("db_curso", JSON.stringify(db));
}

function deleteCurso(id) {
  // Filtra o array removendo o elemento com o id passado
  db.data = db.data.filter(function (element) {
    return element.id != id;
  });

  displayMessage("Curso removido com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_curso", JSON.stringify(db));
}

function exibirCursos() {
  $("#table-cursos").html("");
  for (i = 0; i < db.data.length; i++) {
    let curso = db.data[i];
    $("#table-cursos").append(`<tr><td scope="row">${curso.id}</td>
<td>${curso.titulo}</td>
<td>${curso.nome}</td>
<td>${curso.idioma}</td>
<td>${curso.conteudo}</td>
<td>${curso.tags}</td>
<td>${curso.url}</td>
</tr>`);
  }
}
var db = JSON.parse(localStorage.getItem("db_curso"));
if (!db) {
  db = db_cursos_iniciais;
}

function init() {
  $("#btnInsert").click(function () {
    var novoId = db.data.length == 0 ? 1 : db.data[db.data.length - 1].id + 1;
    let campoTitulo = $("#inputTitulo").val();
    let campoNome = $("#inputNome").val();
    let campoIdioma = $("#inputIdioma").val();
    let campoConteudo = $("#inputConteudo").val();
    let campoTags = $("#inputTags").val();
    let campoUrl = $("#inputUrl").val();
    let curso = {
      id: novoId,
      titulo: campoTitulo,
      nome: campoNome,
      idioma: campoIdioma,
      conteudo: campoConteudo,
      tags: campoTags,
      url: campoUrl,
    };
    exibirCursos();
    insertCurso(curso);
    exibirCursos();

    $("#frmCadastro")[0].reset();
  });

  $("#btnUpdate").click(function () {
    let campoId = $("#inputId").val();
    let campoTitulo = $("#inputTitulo").val();
    let campoNome = $("#inputNome").val();
    let campoIdioma = $("#inputIdioma").val();
    let campoConteudo = $("#inputConteudo").val();
    let campoTags = $("#inputTags").val();
    let campoUrl = $("#inputUrl").val();

    let curso = {
      id: Number(campoId),
      titulo: campoTitulo,
      nome: campoNome,
      idioma: campoIdioma,
      conteudo: campoConteudo,
      tags: campoTags,
      url: campoUrl,
    };

    updateCurso(campoId, curso);
    exibirCursos();

    $("#frmCadastro")[0].reset();
  });

  $("#btnDelete").click(function () {
    let campoId = $("#inputId").val();
    if (campoId == "") {
      displayMessage("Selecione um curso a ser excluído.");
      return;
    }
    deleteCurso(parseInt(campoId));
    exibirCursos()
    $("#frmCadastro")[0].reset()
  });

  $("#grid-cursos").on("click", "tr", function (e) {
    let linhaCurso = this;
    colunas = linhaCurso.querySelectorAll("td");

    $("#inputId").val(colunas[0].innerText);
    $("#inputTitulo").val(colunas[1].innerText);
    $("#inputNome").val(colunas[2].innerText);
    $("#inputIdioma").val(colunas[3].innerText);
    $("#inputConteudo").val(colunas[4].innerText);
    $("#inputTags").val(colunas[5].innerText);
    $("#inputUrl").val(colunas[6].innerText);
  });

  exibirCursos();
}