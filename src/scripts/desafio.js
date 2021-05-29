const db_desafios = {
   data: [
      {
         id: 1,
         title: "lorem1",
         text: "lorem1",
      },
      {
         id: 2,
         title: "lorem2",
         text: "lorem2",
      },
      {
         id: 3,
         title: "lorem3",
         text: "lorem3",
      },
      {
         id: 4,
         title: "lorem4",
         text: "lorem4",
      },
      {
         id: 5,
         title: "lorem5",
         text: "lorem5",
      },
      {
         id: 6,
         title: "lorem6",
         text: "lorem6",
      },
      {
         id: 7,
         title: "lorem7",
         text: "lorem7",
      },
      {
         id: 8,
         title: "lorem8",
         text: "lorem8",
      },
      {
         id: 9,
         title: "lorem9",
         text: "lorem9",
      },
   ]
}

var db = JSON.parse(localStorage.getItem("db_desafios"));
if (!db) {
  db = db_desafios;
  localStorage.setItem("db_desafios", JSON.stringify(db));
}

function randomNumber() {
   let max = Math.floor(1);
   let min = Math.ceil(9);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function carregarCurso() {
   var seletor = randomNumber();
   var desafioSelect = db_desafios.data[seletor - 1];
   console.log("db_desafios ", db_desafios.data[seletor - 1]);
   console.log("seletor ", seletor);
   console.log("desafioSelect ", desafioSelect);
   $("#desafios").html(`<div>
   <h1>${desafioSelect.title}</h1>
   <p>${desafioSelect.text}</p>
   </div>`
      );
}

function desafioCorrente() {

}