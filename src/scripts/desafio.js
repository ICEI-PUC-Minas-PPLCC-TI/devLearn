const db_desafios = {
   data: [
      {
         id: 1,
         title: "HTML",
         text: `<h3 class="titulo-roxo">Qual o significado da sigla HTML?</h3><br>
            A) Home Tool Markup Language<br>
            B) Hyperlinks and Text Markup Language<br>
            C) Hyper Text Markup Language`,
         answer: "C",
      },
      {
         id: 2,
         title: "CSS",
         text: `<h3 class="titulo-roxo">Qual o significado da sigla CSS?</h3><br>
         A) Cascading Style Sheets<br>
         B) Computer Style Sheets<br>
         C) Creative Style Sheets`,
         answer: "A",
      },
      {
         id: 3,
         title: "JavaScript",
         text: `<h3 class="titulo-roxo">Como chamar uma função denominada 'minhaFunção'?</h3><br>
         A) minhaFunção()<br>
         B) function minhaFunção()<br>
         C) call minhaFunção()`,
         answer: "A",
      },
      {
         id: 4,
         title: "HTML",
         text: `<h3 class="titulo-roxo">Qual a tag utilizada para definir um texto importante?</h3><br>
         A) &ltstrong&gt<br>
         B) &lti&gt<br>
         C) &ltimportant&gt<br>
         D) &ltb&gt`,
         answer: "A",
      },
      {
         id: 5,
         title: "CSS",
         text: `<h3 class="titulo-roxo">Como selecionar um objeto com o id 'demo'?</h3><br>
         A) *demo<br>
         B) #demo<br>
         C) .demo`,
         answer: "B",
      },
      {
         id: 6,
         title: "JavaScript",
         text: `<h3 class="titulo-roxo">JavaScript é a mesma coisa que Java?</h3><br>
         A) Falso<br>
         B) Verdadeiro`,
         answer: "A",
      },
      {
         id: 7,
         title: "HTML",
         text: `<h3 class="titulo-roxo">Qual a tag utilizada para definir um texto importante?</h3><br>
         A) &ltitalic&gt<br>
         B) &ltem&gt<br>
         C) &ltemphasize&gt<br>
         D) &lti&gt`,
         answer: "B",
      },
      {
         id: 8,
         title: "CSS",
         text: `<h3 class="titulo-roxo">Qual atributo HTML é usado para definir estilos inline?</h3><br>
         A) Class<br>
         B) Styles<br>
         C) Style`,
         answer: "C",
      },
      {
         id: 9,
         title: "JavaScript",
         text: `<h3 class="titulo-roxo">Como se cria uma função em JavaScript?</h3><br>
         A) function = minhaFunção()<br>
         B) function minhaFunção()<br>
         C) minhaFunção()`,
         answer: "B",
      },
   ]
}

var db = JSON.parse(localStorage.getItem("db_desafios"));
if (!db) {
  db = db_desafios;
  localStorage.setItem("db_desafios", JSON.stringify(db));
}

function randomNumber() {
   let max = Math.floor(0);
   let min = Math.ceil(10);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function carregarCurso() {
   var seletor = randomNumber();
   var desafioSelect = db_desafios.data[seletor - 1];
   console.log("seletor ", seletor);
   $("#desafios").html(`
   <div class="desafio">
   <h1 class="desafio_title">${desafioSelect.title}</h1>
   <div class="desafio_para">${desafioSelect.text}</div>
   </div>
   <div class="answer bg-roxodev">
   <div class="desafio">
   <button style="block" class="btn btn-branco mb-3" name="desafio" id="desafio" onclick="mostrarResposta()">Mostrar resposta</button>
   <p class="desafio_answer" id="desafio_answer" style="display: none;">A resposta correta é a letra: ${desafioSelect.answer}</p>
   </div>
   </div>`
   );
}

function mostrarResposta() {
   $("#desafio_answer").prop("style", "block");
   $("#desafio").hide();
}