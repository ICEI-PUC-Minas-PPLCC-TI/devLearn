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
  console.log(cursoAtual);
  window.location.href = "aula.html";
}

$("#btnAdd").click(() => {
  let obj = JSON.parse(localStorage.getItem("db_videos"));
  let videoURL = $("inframe").prop("scr");
  for (let i = 0; i < obj.length; i++) {
    if (obj.data[i].url == videoURL) {
      localStorage.setItem("db_salvos", JSON.stringify(videoURL));
      break;
    }
  }
});
