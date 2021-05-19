const LOGIN_URL = "login.html";

var db_usuarios = {};

var usuarioCorrente = {};

function generateUUID() {
   var d = new Date().getTime();
   var d2 = (performance && performance.now && (performance.now()*1000)) || 0;
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;
      if(d > 0){
         r = (d + r)%16 | 0;
         d = Math.floor(d/16);
      } else {
         r = (d2 + r)%16 | 0;
         d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
   });
}
const dadosIniciais = {
   usuarios: [
      { "id": generateUUID (), "email": "admin@example.com", "senha": "123", "nome": "Administrador do Sistema"},
      { "id": generateUUID (), "email": "user@example.com", "senha": "123", "nome": "Usuario Comum"},
   ]
};

function initLoginApp () {
   usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
   if (usuarioCorrenteJSON) {
      usuarioCorrente = JSON.parse (usuarioCorrenteJSON);
   }
    
   var usuariosJSON = localStorage.getItem('db_usuarios');
   if (!usuariosJSON) {
      console.log('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');

      db_usuarios = dadosIniciais;

      localStorage.setItem('db_usuarios', JSON.stringify (dadosIniciais));
   }
   else  {
      db_usuarios = JSON.parse(usuariosJSON);    
   }
}

function loginUser (email, senha) {
   for (var i = 0; i < db_usuarios.usuarios.length; i++) {
      var usuario = db_usuarios.usuarios[i];
       
      if (email == usuario.email && senha == usuario.senha) {
         usuarioCorrente.id = usuario.id;
         usuarioCorrente.email = usuario.email;
         usuarioCorrente.nome = usuario.nome;
         sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
         return true;
      }
   }
   return false;
}

function addUser (nome, email, senha) {
   let newId = generateUUID ();
   let usuario = { "id": newId, "email": email, "senha": senha, "nome": nome};
    
   db_usuarios.usuarios.push (usuario);

   localStorage.setItem('db_usuarios', JSON.stringify (db_usuarios));
}

initLoginApp ();