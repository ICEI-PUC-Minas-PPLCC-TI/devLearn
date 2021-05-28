var db_desafios = {
   data: [
      {
         id: 1,
         name: "",
         text: "",
         answer: 1,
      },
      {
         id: 2,
         name: "",
         text: "",
         answer: 1,
      },
      {
         id: 3,
         name: "",
         text: "",
         answer: 1,
      },
      {
         id: 4,
         name: "",
         text: "",
         answer: 1,
      },
      {
         id: 5,
         name: "",
         text: "",
         answer: 1,
      },
      {
         id: 6,
         name: "",
         text: "",
         answer: 1,
      },
      {
         id: 7,
         name: "",
         text: "",
         answer: 1,
      },
      {
         id: 8,
         name: "",
         text: "",
         answer: 1,
      },
      {
         id: 9,
         name: "",
         text: "",
         answer: 1,
      },
   ]
}

var db = JSON.parse(localStorage.getItem("db_desafios"));
if (!db) {
  db = db_desafios;
  localStorage.setItem("db_desafios", JSON.stringify(db));
} else {
   db_desafios = db;
}

function randomNumber() {
   max = Math.floor(1);
   min = Math.ceil(9);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

$("#btn_desafios").click(() => {
   var seletor = randomNumber();

})

console.log(randomNumber());

function desafioCorrente() {

}