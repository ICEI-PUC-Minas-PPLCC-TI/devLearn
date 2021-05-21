var db_cursos_iniciais = {
  data: [
    {
      id: 1,
      titulo: "O guia estelar de HTML",
      nome: "Rocketseat",
      idioma: "PT",
      conteudo: "HTML",
      tags: "WEB, HTML",
      url: "https://app.rocketseat.com.br/node/o-guia-estelar-de-html",
    },
    {
      id: 2,
      titulo: "O guia estelar de CSS",
      nome: "Rocketseat",
      idioma: "PT",
      conteudo: "CSS",
      tags: "WEB, CSS",
      url: "https://app.rocketseat.com.br/node/o-guia-estelar-de-css",
    },
    {
      id: 3,
      titulo: "O guia estelar de Javascript",
      nome: "Rocketseat",
      idioma: "PT",
      conteudo: "Javascript",
      tags: "WEB, Javascript",
      url: "https://app.rocketseat.com.br/node/o-guia-estelar-de-java-script",
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
