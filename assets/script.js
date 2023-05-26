var requestWiki = "https://www.mediawiki.org/wiki/API:Main_page"
var topic = document.getElementById("input")
var search = document.getElementById('searchBtn')
var wikiParent = document.getElementById('wiki-parent')
var YoutubeParent = document.getElementById('YT-parent')

function getYTApi() {
    var requestYT = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q="+topic.value+"&key=AIzaSyAURgWy8JwCuRdnhh8kw8tQADphnZm9v7o";
    while (wikiParent.hasChildNodes()){
        wikiParent.removeChild(wikiParent.firstChild);
    }
    while (YoutubeParent.hasChildNodes()){
        YoutubeParent.removeChild(YoutubeParent.firstChild);
    }
    fetch(requestYT)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            for (var i = 0; i < 4; i++){
                var YoutubeA = document.createElement('a');
                YoutubeA.textContent = data.items[i].snippet.title;
                YoutubeA.href = 'https://www.youtube.com/' + data.items[i].id.videoid;
                YoutubeParent.append(YoutubeA);
            }

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
            var wikiA = document.createElement('a');
            wikiA.textContent = data.query.search[i].title;
            wikiA.href = 'http://en.wikipedia.org/?curid=' + data.query.search[i].pageid;
            wikiParent.append(wikiA);
        }
    });

}


search.addEventListener('click', getYTApi);
