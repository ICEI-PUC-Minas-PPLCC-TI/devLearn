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
    {
      id: 1,
      titulo: "O SEGUNDO guia estelar de HTML",
      nome: "Rocketseat",
      idioma: "PT",
      conteudo: "HTML",
      tags: "WEB, HTML",
      url: "https://app.rocketseat.com.br/node/o-guia-estelar-de-html",
    },
  ],
};

var db = JSON.parse(localStorage.getItem("db_curso"));
if (!db) {
  db = db_cursos_iniciais;
}

function buscarCurso() {
  const busca = $("#busca-1").val();
  console.log("DEBUG: FUNCAO buscarCurso: ", busca);
  /* let obj = JSON.parse(localStorage.getItem("obj_curso"));
  if (!obj) {
    obj = {
      data: [],
    }
  } */
  let obj = {
    data: [],
  }
  for (i = 0; i < db.data.length; i++) {
    // obj.data.push(db.data.find((o) => o.conteudo.toLowerCase() == busca.toLowerCase()));
    if (busca.toLowerCase() == db.data[i].titulo.toLowerCase() ||
        busca.toLowerCase() == db.data[i].nome.toLowerCase() ||
        busca.toLowerCase() == db.data[i].idioma.toLowerCase() ||
        busca.toLowerCase() == db.data[i].conteudo.toLowerCase() ||
        busca.toLowerCase() == db.data[i].tags.toLowerCase() ||
        busca.toLowerCase() == db.data[i].url.toLowerCase()) {
      obj.data.push(db.data[i]);
    } 
    localStorage.setItem("obj_curso", JSON.stringify(obj));
    console.log("DEBUG: OBJ ", obj);
  }
  
}

// busca.addEventListener("keyup", (e) => {
//   const searchString = e.target.value.toLowerCase();

//   const filteredContent = bancoDeDados.filter((content) => {
//     return contentName.toLowerCase().includes(searchString);
//   });
//   displayContent(filteredContent);
// });
