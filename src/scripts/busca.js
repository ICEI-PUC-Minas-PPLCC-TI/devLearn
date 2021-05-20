var db_cursos_iniciais = {
  data: [
    {
      id: 1,
      titulo: "O guia estelar de HTML",
      nome: "Rocketseat",
      idioma: "PT",
      conteudo: "HTML",
      tags: "Desenvolvimento WEB, HTML",
    },
    {
      id: 2,
      titulo: "O guia estelar de CSS",
      nome: "Rocketseat",
      idioma: "PT",
      conteudo: "CSS",
      tags: "Desenvolvimento WEB, CSS",
    },
    {
      id: 3,
      titulo: "O guia estelar de Javascript",
      nome: "Rocketseat",
      idioma: "PT",
      conteudo: "Javascript",
      tags: "Desenvolvimento WEB, Javascript",
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
  let obj = db.data.find((o) => o.conteudo.toLowerCase() == busca.toLowerCase());
  localStorage.setItem("obj_curso", JSON.stringify(obj));
  console.log("DEBUG: OBJ ", obj);
}

// busca.addEventListener("keyup", (e) => {
//   const searchString = e.target.value.toLowerCase();

//   const filteredContent = bancoDeDados.filter((content) => {
//     return contentName.toLowerCase().includes(searchString);
//   });
//   displayContent(filteredContent);
// });
