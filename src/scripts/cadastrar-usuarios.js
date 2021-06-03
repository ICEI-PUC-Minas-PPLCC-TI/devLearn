const LOGIN_URL = "login.html";

var db_usuarios = {};

var usuarioCorrente = {};

function generateUUID() {
  var d = new Date().getTime();
  var d2 = (performance && performance.now && performance.now() * 1000) || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}
const dadosIniciais = {
  usuarios: [
    {
      id: generateUUID(),
      email: "admin@example.com",
      senha: "123",
      nome: "Administrador do Sistema",
    },
    {
      id: generateUUID(),
      email: "user@example.com",
      senha: "123",
      nome: "Usuario Comum",
    },
  ],
};

/* var lembrarUsuario = JSON.parse(localStorage.getItem("lembrarUsuario"));
  if (lembrarUsuario.valor) {
    usuarioCorrente = JSON.parse(localStorage.getItem("usuarioCorrente"));   
  } else {
    usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
  } */

function initLoginApp() {
  var lembrarUsuario = JSON.parse(localStorage.getItem("lembrarUsuario"));
  if (lembrarUsuario == null) {
    usuarioCorrenteJSON = sessionStorage.getItem("usuarioCorrente");
  } else {
    if (lembrarUsuario.valor) {
      usuarioCorrenteJSON = localStorage.getItem("usuarioCorrente");   
    } else {
      usuarioCorrenteJSON = sessionStorage.getItem("usuarioCorrente");
    }
  }
  
  if (usuarioCorrenteJSON) {
    usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
  }

  var usuariosJSON = localStorage.getItem("db_usuarios");
  if (!usuariosJSON) {
    console.log(
      "Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial."
    );

    db_usuarios = dadosIniciais;

    localStorage.setItem("db_usuarios", JSON.stringify(dadosIniciais));
  } else {
    db_usuarios = JSON.parse(usuariosJSON);
    localStorage.setItem("db_usuarios", JSON.stringify(db_usuarios));
  }
}

function loginUser(email, senha) {
  var lembrarUsuario = document.getElementById("lembrar").checked;
  for (var i = 0; i < db_usuarios.usuarios.length; i++) {
    var usuario = db_usuarios.usuarios[i];

    if (email == usuario.email && senha == usuario.senha) {
      usuarioCorrente.id = usuario.id;
      usuarioCorrente.email = usuario.email;
      usuarioCorrente.nome = usuario.nome;
      lembrarUsuario = {
        valor: lembrarUsuario,
      }
      // console.log("Funcao loginUser - lembrarUsuario = ", lembrarUsuario, "lembrarUsuario.valor = ", lembrarUsuario.valor);
      localStorage.setItem(
        "lembrarUsuario",
        JSON.stringify(lembrarUsuario)
      );
      if(lembrarUsuario.valor) {
        localStorage.setItem(
          "usuarioCorrente",
          JSON.stringify(usuarioCorrente)
        );
      } else {
        sessionStorage.setItem(
          "usuarioCorrente",
          JSON.stringify(usuarioCorrente)
        );
      }
      return true;
    }
  }
  return false;
}

function addUser(nome, email, senha) {
  let newId = generateUUID();
  let usuario = { id: newId, email: email, senha: senha, nome: nome };

  db_usuarios.usuarios.push(usuario);

  localStorage.setItem("db_usuarios", JSON.stringify(db_usuarios));
}

initLoginApp();

function processaFormLogin(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  resultadoLogin = loginUser(username, password);
  if (resultadoLogin) {
    setTimeout(function () {
      window.location.href = "index-logado.html";
    }, 2000);

    let timerInterval
    Swal.fire({
      title: 'Bem-vindo de volta usuário!',
      html: 'Você será redirecionado...',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getHtmlContainer()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
    })

  } else {
    Swal.fire({
      icon: 'error',
      title: 'Ops!',
      text: 'E-mail ou senha incorretos.',
    })
  }
}

function salvaLogin(event) {
  // Cancela a submissão do formulário para tratar sem fazer refresh da tela
  event.preventDefault();

  // Obtem os dados do formulário
  let nome = document.getElementById('txt_nome').value;
  let email = document.getElementById('txt_email').value;
  let senha = document.getElementById('txt_senha').value;
  let senha2 = document.getElementById('txt_senha2').value;
  if (senha != senha2) {
    Swal.fire({
      icon: 'error',
      title: 'Não foi possível cadastrar!',
      text: 'Digite seus dados corretamente.',
    })
    return
  }

  // Adiciona o usuário no banco de dados
  addUser(nome, email, senha);

  setTimeout(function () {
    window.location.href = "index.html";
  }, 2000);

  let timerInterval
  Swal.fire({
    title: 'Sucesso!',
    html: 'O cadastro foi realizado com sucesso! Redirecionando...',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
        const content = Swal.getHtmlContainer()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
  })

}
