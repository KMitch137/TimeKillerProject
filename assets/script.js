var requestWiki = "https://www.mediawiki.org/wiki/API:Main_page";
var topic = document.getElementById("input");
var search = document.getElementById('searchBtn');
var wikiParent = document.getElementById('wiki-parent');
var YoutubeParent = document.getElementById('YT-parent');
var Superbtn = document.getElementById('SuperHero');
var NBAbtn = document.getElementById('NBAteam');
var CodingBtn = document.getElementById('Coding-topic');
var CountryBtn = document.getElementById('countries-world');
var AZbtn = document.getElementById('AZ-plants');
// these arrays are preset topics that a user can randomly choose from by using the catagories sidebar
const superhero = ['Ant-Man', 'Aquaman', 'Asterix', 'The Atom',' The Avengers', 'Batgirl', 'Batman', 'Batwoman', 'Black Canary', 'Black Panther', 'Captain America', 'Captain Marvel', 'Catwoman', 'Conan the Barbarian', 'Daredevil', 'The Defenders', 'Doc Savage', 'Doctor Strange', 'Elektra', 'Fantastic Four', 'Ghost Rider', 'Green Arrow', 'Green Lantern', 'Guardians of the Galaxy', 'Hawkeye', 'Hellboy', 'Incredible Hulk', 'Iron Fist', 'Iron Man', 'Marvelman', 'Robin', 'The Rocketeer', 'The Shadow', 'Spider-Man', 'Sub-Mariner',  'Supergirl', 'Superman', 'Teenage Mutant Ninja Turtles', 'Thor', 'The Wasp', 'Watchmen', 'Wolverine', 'Wonder Woman', 'X-Men', 'Zatanna', 'Zatara'];
const NBAteams = [
    'Atlanta Hawks', 
    'Boston Celtics', 
    'Brooklyn Nets',
    'Charlotte Hornets',
    'Chicago Bulls',
    'Cleveland Cavaliers',
    'Dallas Mavericks',
    'Denver Nuggets',
    'Detroit Pistons',
    'Golden State Warriors',
    'Houston Rockets',
    'Indiana Pacers',
    'Los Angeles Clippers',
    'Los Angeles Lakers',
    'Memphis Grizzlies',
    'Miami Heat',
    'Milwaukee Bucks',
    'Minnesota Timberwolves',
    'New Orleans Pelicans',
    'New York Knicks',
    'Oklahoma City Thunder',
    'Orlando Magic',
    'Philadelphia 76ers',
    'Phoenix Suns',
    'Portland Trail Blazers',
    'Sacramento Kings',
    'San Antonio Spurs',
    'Toronto Raptors',
    'Utah Jazz',
    'Washington Wizards'
];
const codingTopics = ["HTML/CSS/Git", "JavaScript", "Bootstrap", "APIs", "JQuery", "JSON", "AJAX", "Team collaboration", "Agile development", "Node", "ES6", "Object-oriented programming", "Express", "MySQL", "Agile development", "Team collaboration", "Agile development", "Progressive Web Apps", "React", "NoSQL", "MERN Stack", "Computer science fundamentals"];
const Countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'The Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo, Democratic Republic of the',
    'Congo, Republic of the',
    'Costa Rica',
    'Côte d’Ivoire',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor-Leste)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'The Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia, Federated States of',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar/Burma',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Sudan, South',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];
const AZPlants = [
    "Saguaro",
    "Calliandra eriophylla",
    "Desert ironwood",
    "Teddy-bear cholla",
    "Ocotillo",
    "Desert-willow",
    "Parry's agave",
    "Ponderosa pine",
    "Desert marigold",
    "Kallstroemia grandiflora",
    "Beloperone",
    "Yellow paloverde",
    "Desert holly",
    "Southwestern barrel cactus",
    "Century plant",
    "Sugar bush",
    "Blue grama",
    "Blue palo verde",
    "Bursera microphylla",
    "Cylindropuntia acanthocarpa",
    "Asclepias subulata",
    "Chia",
    "Penstemon eatonii",
    "Hopbush",
    "Soaptree yucca",
    "Wait-a-minute bush",
    "Prosopis velutina",
    "Acaciella angustissima",
    "Fraxinus velutina",
    "Agave palmeri",
    "Dasylirion wheeleri",
    "Banana yucca",
    "Larrea tridentata",
    "Rocky mountain maple",
    "Blackfoot daisy",
    "Cherokee bean",
    "Eriogonum wrightii",
    "Spiny hackberry",
    "Fremont cottonwood",
    "Desert Christmas cactus",
    "Digitaria californica",
    "Emory oak",
    "Fourwing saltbush",
    "Sideoats grama",
    "Muhlenbergia porteri",
    "Sporobolus cryptandrus",
    "Aristida purpurea",
    "Brittlebush",
    "Golden columbine",
    "Texas prickly-pear",
    "Apricot mallow"
];
//the button array is used to attach event listeners to each catagory on the sidebar
const btnArray = [
    {
        button: Superbtn,
        arr: superhero,
    },
    {
        button: NBAbtn,
        arr: NBAteams,
    },
    {
        button: CodingBtn,
        arr: codingTopics,
    },
    {
        button: CountryBtn,
        arr: Countries,
    },
    {
        button: AZbtn,
        arr: AZPlants,
    }
];

console.log(btnArray[0].arr);
// this is the main search function of the website 
function getYTApi() {
    var requestYT = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q="+topic.value+"&key=AIzaSyAURgWy8JwCuRdnhh8kw8tQADphnZm9v7o";
    var YoutubeHead = document.createElement('h3');
    var topicLower = topic.value.toLowerCase().trim();
    //resets the style of the results after each search before checking for an "easter egg"
    wikiParent.setAttribute("id", "wiki-parent");
    YoutubeParent.setAttribute("id", "YT-parent");
    //removes each link from the previous search before showing new results
    while (wikiParent.hasChildNodes()){
        wikiParent.removeChild(wikiParent.firstChild);
        };
    while (YoutubeParent.hasChildNodes()){
        YoutubeParent.removeChild(YoutubeParent.firstChild);
        };
    //easter egg styles:
    if (topicLower === "phoenix suns") {
        wikiParent.setAttribute("id", "go-suns");
        YoutubeParent.setAttribute("id", "go-suns");
        };
    if (topicLower === "chicago bulls") {
            wikiParent.setAttribute("id", "go-bulls");
            YoutubeParent.setAttribute("id", "go-bulls");
        };
    if (topicLower === 'batgirl' || topicLower === 'batman' || topicLower === 'batwoman') {
            wikiParent.setAttribute("id", "bat");
            YoutubeParent.setAttribute("id", "bat");
        };
    if (topicLower === 'teenage Mutant ninja turtles' || topicLower === 'incredible hulk' || topicLower === 'green lantern'  ) {
            wikiParent.setAttribute("id", "go-green");
            YoutubeParent.setAttribute("id", "go-green");
        };
    //sets the title of the youtube results after each search
    YoutubeHead.textContent = "Here are some Youtube videos related to " + topic.value + ':';
    YoutubeParent.append(YoutubeHead);
    fetch(requestYT)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            //adds a clickable link to the retieved data
            for (var i = 0; i < 4; i++){
                var YoutubeA = document.createElement('a');
                YoutubeA.textContent = data.items[i].snippet.title;
                YoutubeA.href = 'https://www.youtube.com/shorts/' + data.items[i].id.videoId;
                YoutubeParent.append(YoutubeA);
            };
        });
    getWikiApi();
};
//runs at the same time as the Youtube fetch function to pull wiki articles related to topic.value
function getWikiApi() {
    var url = "https://en.wikipedia.org/w/api.php";
    var wikiHead = document.createElement('h3')
    var params = new URLSearchParams({
        action: "query",
        list: "search",
        // tie user input to this search
        srsearch: topic.value,
        format: "json",
        srlimit: "5",
        origin: '&origin=*'
    });
    //setting wiki results title
    wikiHead.textContent = "Here are some Wikipedia articles about " + topic.value + ":";
    wikiParent.append(wikiHead);
    fetch(url + "?" + params + "&origin=*")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < 4; i++) {
                var wikiA = document.createElement('a');
                wikiA.textContent = data.query.search[i].title;
                wikiA.href = 'http://en.wikipedia.org/?curid=' + data.query.search[i].pageid;
                wikiParent.append(wikiA);
            };
        });
};
//when a user clicks a catagory on the sidebar this will grab a value from the selected array and display the related search results - just in case the user is too lazy to come up with something interesting on the spot
function randomArr(cataArr) {
    var randomIndex = Math.floor(Math.random()*cataArr.length);
    var subject = cataArr[randomIndex];
    topic.value = subject;
    getYTApi();
};
//adds an event listener to each catagory in the sidbar - can be extended by adding to the BtnArray
for (var i = 0; i < btnArray.length; i++){
    const cataArr = btnArray[i].arr;
    btnArray[i].button.addEventListener('click',function(){randomArr(cataArr)})
};
//runs main function on click
search.addEventListener('click', getYTApi);
