const busca = document.getElementById("busca-2");
// let bancoDeDados = [];         - utilizar quando banco de dados de conteúdo estiver disponível

busca.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredContent = bancoDeDados.filter((content) => {
    return contentName.toLowerCase().includes(searchString);
  });
  displayContent(filteredContent);
});
