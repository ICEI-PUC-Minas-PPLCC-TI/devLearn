var db_cursos_iniciais = {
  data: [
    {
      id: 1,
      titulo: "O guia estelar de HTML",
      nome: "Rocketseat",
      idioma: "PT",
      conteudo: "HTML",
      tags: "Desenvolvimento WEB, HTML"
    },
    {
      id: 2,
      titulo: "O guia estelar de CSS",
      nome: "Rocketseat",
      idioma: "PT",
      conteudo: "CSS",
      tags: "Desenvolvimento WEB, CSS"
    },
    {
      id: 3,
      titulo: "O guia estelar de Javascript",
      nome: "Rocketseat",
      idioma: "PT",
      conteudo: "Javascript",
      tags: "Desenvolvimento WEB, Javascript"
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
    tags: curso.tags
  };

  db.data.push(novoCurso);
  displayMessage("Curso adicionado");

  localStorage.setItem("db_curso", JSON.stringify(db));
}

function updateCurso(index, curso) {

  // db.data.filter(id => index)[index - 1] = {
  //  ...curso
  // }

  (db.data.filter(id => index)[index - 1].titulo = curso.titulo),
  (db.data.filter(id => index)[index - 1].nome = curso.nome),
  (db.data.filter(id => index)[index - 1].idioma = curso.idioma),
  (db.data.filter(id => index)[index - 1].conteudo = curso.conteudo),
  (db.data.filter(id => index)[index - 1].tags = curso.tags);
  
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

