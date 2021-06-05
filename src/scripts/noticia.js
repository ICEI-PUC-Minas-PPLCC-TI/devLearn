const searchFrom = document.querySelector ('.search');
const input = document.querySelector ('.input');
const newsList = document.querySelector ('.news-list');

function renderizarNoticia(){
    const apiKey = '6c5560d0055935a321c59f52f2e7d534'

    fetch(`https://gnews.io/api/v4/top-headlines?country=br&q=software&token=${apiKey}`)
    .then(function (response) {
        return response.json();
    })
                
    .then(function (data) {
        console.log(data);
        data.articles.forEach(article =>{
        let li = document.createElement("li");
        let h1 = document.createElement("h1");
        let p = document.createElement("p");
        let a = document.createElement("a");
        a.setAttribute("class", "btn-roxo link");
        a.setAttribute("href", article.url);
        a.textContent = ("Leia mais...");
        h1.textContent = article.title;
        p.textContent = article.description;
        li.appendChild(h1);
        li.appendChild(p);
        li.appendChild(a);
        newsList.appendChild(li);
        })
    });
}