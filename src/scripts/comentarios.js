// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Leanne Graham",
            "cidade": "Belo Horizonte",
            "categoria": "amigos",
            "email": "Sincere@april.biz",
            "telefone": "1-770-736-8031",
            "website": "hildegard.org"
        },
        {
            "id": 2,
            "nome": "Ervin Howell",
            "cidade": "Betim",
            "categoria": "familia",
            "email": "Shanna@melissa.tv",
            "telefone": "010-692-6593",
            "website": "anastasia.net"
        },
        {
            "id": 3,
            "nome": "Clementine Bauch",
            "cidade": "Rio de Janeiro",
            "categoria": "trabalho",
            "email": "Nathan@yesenia.net",
            "telefone": "1-463-123-4447",
            "website": "ramiro.info"
        },
        {
            "id": 4,
            "nome": "Patricia Lebsack",
            "cidade": "Betim",
            "categoria": "trabalho",
            "email": "Julianne.OConner@kory.org",
            "telefone": "493-170-9623 x156",
            "website": "kale.biz"
        },
        {
            "id": 5,
            "nome": "Chelsey Dietrich",
            "cidade": "São Paulo",
            "categoria": "familia",
            "email": "Lucio_Hettinger@annie.ca",
            "telefone": "(254)954-1289",
            "website": "demarco.info"
        },
        {
            "id": 6,
            "nome": "Mrs. Dennis Schulist",
            "cidade": "Rio de Janeiro",
            "categoria": "trabalho",
            "email": "Karley_Dach@jasper.info",
            "telefone": "1-477-935-8478",
            "website": "ola.org"
        },
        {
            "id": 7,
            "nome": "Kurtis Weissnat",
            "cidade": "Belo Horizonte",
            "categoria": "amigos",
            "email": "Telly.Hoeger@billy.biz",
            "telefone": "210.067.6132",
            "website": "elvis.io"
        },
        {
            "id": 8,
            "nome": "Nicholas Runolfsdottir V",
            "cidade": "Belo Horizonte",
            "categoria": "familia",
            "email": "Sherwood@rosamond.me",
            "telefone": "586.493.6943",
            "website": "jacynthe.com"
        },
        {
            "id": 9,
            "nome": "Glenna Reichert",
            "cidade": "Betim",
            "categoria": "amigos",
            "email": "Chaim_McDermott@dana.io",
            "telefone": "(775)976-6794",
            "website": "conrad.com"
        },
        {
            "id": 10,
            "nome": "Clementina DuBuque",
            "cidade": "São Paulo",
            "categoria": "amigos",
            "email": "Rey.Padberg@karina.biz",
            "telefone": "024-648-3804",
            "website": "ambrose.net"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "categoria": contato.categoria,
        "website": contato.website
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cidade = contato.cidade,
    db.data[index].categoria = contato.categoria,
    db.data[index].website = contato.website

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}