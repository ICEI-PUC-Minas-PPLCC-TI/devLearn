function salvarPerfil() {
  var logado = JSON.parse(localStorage.getItem("usuarioCorrente"));
  if (!logado) {
    logado = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
  }
  var perfil = JSON.parse(localStorage.getItem("perfil"));
  if (!perfil) {
    let novoPerfil = {
      id: logado.id,
      nome: logado.nome,
      email: logado.email,
      foto: "assets/profile.png",
    };
    perfil = novoPerfil;
  }
  
  localStorage.setItem("perfil", JSON.stringify(perfil));
  return perfil;
}

function renderizarPagina() {
  var perfil = salvarPerfil();
  document.getElementById("tableNome").innerHTML = perfil.nome
  document.getElementById("tableEmail").innerHTML = perfil.email
  document.getElementById("fotoPerfil").src = perfil.foto
  document.getElementById("nomePerfil").innerHTML = perfil.nome
  document.getElementById("perfilDe").innerHTML = perfil.nome
}