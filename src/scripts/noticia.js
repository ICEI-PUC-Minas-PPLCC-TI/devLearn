const GNDB_ENDPOINT = 'https://gnews.io/api/v4/top-headlines';
const KEY_GNDB = 'b683c68c7aa7796c2e5733512b68bec0';

$(() => { 

    $.get(GNDB_ENDPOINT + '?country=br' + '&q=software' + '&token=' + KEY_GNDB).then((data) => {
        for (let i = 0; i < data.articles.length; i++)
        {
            let titulo = data.articles[i].title;
            let descricao = data.articles[i].description;
            let imagem = data.articles[i].image;
            let link = data.articles[i].url;
            $("#containerNoticias").append(`
            <div class="row materias">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4">
                    <img class="imagens_novidades" src="${imagem}" alt="">
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-8 texto_materia">
                    <h2>${titulo}</h2>
                    <p>${descricao}</p>
                    <a href="${link}" class="btn btn-primary">Saiba Mais</a>
                </div>
            </div>`);
        }
    });
});