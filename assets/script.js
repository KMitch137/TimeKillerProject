var requestWiki = "https://www.mediawiki.org/wiki/API:Main_page"
var topic = document.getElementById("input")
var search = document.getElementById('searchBtn')
var wikiParent = document.getElementById('wiki-parent')
var body = document.querySelector('body');




function getYTApi() {
    var requestYT = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q="+topic.value+"&key=AIzaSyAURgWy8JwCuRdnhh8kw8tQADphnZm9v7o";
    
    if (topic.value === "phoenix suns") {
        body.setAttribute("id", "go-suns")};


    fetch(requestYT)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

        });
    getWikiApi();
}

function getWikiApi() {
    var url = "https://en.wikipedia.org/w/api.php";

    var params = new URLSearchParams({
        action: "query",
        list: "search",
        // tie user input to this search
        srsearch: topic.value,
        format: "json",
        srlimit: "5",
        origin: '&origin=*'
    })
    fetch(url + "?" + params + "&origin=*")
    .then(function (response) { return response.json(); })
    .then(function (data) {
        console.log(data)
        for (var i = 0; i < 4; i++) {
            //var wikiChild = document.createElement('p');
            var wikiA = document.createElement('a');
            wikiA.textContent = data.query.search[i].title
            wikiA.href = 'http://en.wikipedia.org/?curid=' + data.query.search[i].pageid;
            wikiParent.append(wikiA);
            //wikiChild.append(wikiA);
        }
    });

}


search.addEventListener('click', getYTApi);


