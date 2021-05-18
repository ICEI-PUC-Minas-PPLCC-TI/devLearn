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
  let novoId = db.data[db.data.length - 1].id + 1;
  let novoCurso = {
    id: novoId,
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

function updateCurso(id, curso) {
  let index = db.data.map((obj) => obj.id).indexOf(id);

  (db.data[index].titulo = curso.titulo),
    (db.data[index].nome = curso.nome),
    (db.data[index].idioma = curso.idioma),
    (db.data[index].conteudo = curso.conteudo),
    (db.data[index].tags = curso.tags);

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


/* $(function () {
  var operacao = "A";
  var indice_selecionado = -1;
  var tbCursos = localStorage.getItem("tbCursos");
  tbCursos = JSON.parse(tbCursos);
  if (tbCursos == null)
    tbCursos = [];
});

function Adicionar() {
  var curso = JSON.stringify({
    Titulo:   $("txtTitulo").val(),
    Nome:     $("txtNome").val(),
    Idioma:   $("txtIdioma").val(),
    Conteudo: $("txtConteudo").val(),
    Duracao:  $("txtDuracao").val(),
    Tags:     $("txtTags").val()
  });
  tbCursos.push(curso);
  localStorage.setItem("tbCursos", JSON.stringify(tbCursos));
  alert("Curso cadastrado.");
  return true;
}

function Editar() {
  tbCursos[indice_selecionado] = JSON.stringify({
      Titulo    :$("#txtTitulo").val(),
      Nome      :$("#txtNome").val(),
      Idioma    :$("#txtIdioma").val(),
      Conteudo  :$("txtConteudo").val(),
      Duracao   :$("#txtDuracao").val(),
      Tags      :$("#txtTags").val()
    }); //Altera o item selecionado na tabela
  localStorage.setItem("tbCursos", JSON.stringify(tbCursos));
  alert("Informações editadas.");
  operacao = "A"; //Volta ao padrão
  return true;
}

function Excluir() {
  tbCursos.splice(indice_selecionado, 1);
  localStorage.setItem("tbCursos", JSON.stringify(tbCursos));
  alert("Curso removido");
}

function Listar() {
  $("#tbListar").html("");
  $("#tbListar").html(
    "<thead>"+
    "  <tr>"+
    "    <th></th>"+
    "    <th>Titulo</th>"+
    "    <th>Nome</th>"+
    "    <th>Idioma</th>"+
    "    <th>Conteudo</th>"+
    "    <th>Duracao</th>"+
    "    <th>Tags</th>"+
    "  </tr>"+
    "</thead>"+
    "<tbody>"+
    "</tbody>"
  );
  for (var chave in tbClientes) {
    var cur = JSON.parse(tbClientes[chave]);
    $("#tbListar tbody").append("<tr>"+
      "   <td><i class='far fa-edit btn btnEditar' alt='"+chave+"'></i><i class='far fa-trash-alt btn btnExcluir' alt='"+chave+"'></i></td>"+
      "   <td>"+cur.Titulo+"</td>"+
      "   <td>"+cur.Nome+"</td>"+
      "   <td>"+cur.Idioma+"</td>"+
      "   <td>"+cur.Conteudo+"</td>"+
      "   <td>"+cur.Duracao+"</td>"+
      "   <td>"+cur.Tags+"</td>"+
      "</tr>");
  }
  // $("#tbListar tbody").append("</tr>");
}

$("#frmCadastro").on("submit", function () {
  if (operacao == "A")
    return Adicionar();
  else
    return Editar();
});

$("#tblListar").on("click", ".btnEditar", function () {
  operacao = "E";
  indice_selecionado = parseInt($(this).attr("alt"));
  var cli = JSON.parse(tbClientes[indice_selecionado]);
  $("#txtTitulo").val(cli.Titulo);
  $("#txtNome").val(cli.Nome);
  $("#txtIdioma").val(cli.Idioma);
  $("#txtConteudo").val(cli.Conteudo);
  $("#txtDuracao").val(cli.Duracao);
  $("#txtTags").val(cli.Tags);
  $("#txtTitulo").val("readonly", "readonly");
  $("#txtNome").focus();
}); 

$("#tblListar").on("click", ".btnExcluir", function(){
	indice_selecionado = parseInt($(this).attr("alt"));
	Excluir();
	Listar();
});
 */