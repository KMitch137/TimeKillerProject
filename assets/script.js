var requestWiki = "https://www.mediawiki.org/wiki/API:Main_page"
var topic = document.getElementById("")

function getYTApi() {
    var requestYT = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${topic}&key=AIzaSyAURgWy8JwCuRdnhh8kw8tQADphnZm9v7o`;

    fetch(requestYT)
        .then(function (response) {
            return response.json();

        })
        .then(function (data) {
            console.log(data)

        })
}

function getWikiApi() {
    var url = "https://en.wikipedia.org/w/api.php";

    var params = new URLSearchParams({
        action: "query",
        list: "search",
        // tie user input to this search
        srsearch: "",
        format: "json",
        origin: location.origin
    })
    fetch(`${url}?${params}`)
    .then(function (response) { return response.json(); })
    .then(function (data) {
        console.log(data)
    });

}


