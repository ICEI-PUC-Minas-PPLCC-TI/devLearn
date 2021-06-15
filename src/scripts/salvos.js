function abrirAula(id) {
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
  var cursoAtual = db.data[id];
  localStorage.setItem("curso_atual", JSON.stringify(cursoAtual));
  window.location.href = "aula.html";
}

function salvarCurso() {
  var cursoAtual = JSON.parse(localStorage.getItem("curso_atual"));
  var salvos = JSON.parse(localStorage.getItem("cursos_salvos"));

  var usuario = JSON.parse(localStorage.getItem("usuarioCorrente"));
  if (!usuario) {
    usuario = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
  }

  if (usuario) {
    if (!salvos) {
      salvos = {
        data: [],
      };
    }
    let checarCursoAtualJaSalvo = 0;
    for (i = 0; i < salvos.data.length; i++) {
      if (salvos.data[i] == cursoAtual) checarCursoAtualJaSalvo++;
    }
    if (checarCursoAtualJaSalvo == 0) {
      let usuarioECursoAtual = [usuario, cursoAtual];
      salvos.data.push(usuarioECursoAtual);
      localStorage.setItem("cursos_salvos", JSON.stringify(salvos));
    }
    console.log(salvos);
  } else {
    console.log("Erro: Você precisa estar logado para salvar um curso!");
  }
}

function carregarTable() {
  let obj = JSON.parse(localStorage.getItem("cursos_salvos"));
  if (!obj) {
    console.log("ERRO: OBJ VAZIO");
  } 
  else {
    $("#table-cursos-salvos").html("");
    for (i = 0; i < obj.data.length; i++) {
      console.log("DEBUG (carregarTable()): ", obj.data[i][1])
      let resultado = obj.data[i][1];
      console.log("DEBUG resultado: ", resultado);
      $("#table-cursos-salvos").append(`<tr>
      <td>${resultado.titulo}</td>
      <td>${resultado.nome}</td>
      <td>${resultado.idioma}</td>
      <td>${resultado.conteudo}</td>
      <td>${resultado.tags}</td>
      <td><a href="${resultado.url}" target="_blank" style="color: white; font-weight: bold; font-size: 1rem; background-color: #694fa9; padding: 10px 15px; border-radius: 20px;">Curso</a></td>
      </tr>`);
    }
  }
}
