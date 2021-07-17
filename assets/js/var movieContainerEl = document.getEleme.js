var movieContainerEl = document.getElementById("movieContainer");
var searchInputEl = document.getElementById("title-search");

const streamingAPIKey = "0e490c0bb2msh27474734de7d723p106e9ajsn139beffcdbea";
const movieAPIKey = "03af2fad82ab3f23750190542914caf8";
const streamingUrl = "https://watchmode.p.rapidapi.com/list-titles/";
const base_url = "http://api.themoviedb.org/3/";
const images_url = "http://image.tmdb.org/t/p/";

// TMDB API

let movieList = [];

var selectedRatings = function () {

    var ratingArr = [];
    var checkboxes = document.getElementsByClassName('ratingCheckbox')

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            ratingArr.push(checkboxes[i].id);
            console.log(checkboxes[i].id);
        }
    }

    var ratingIds = ratingArr.join('')
    console.log(ratingIds);
    return ratingIds;
};

var selectedGenres = function () {

    var genreArr = [];
    var checkboxes = document.getElementsByClassName('genreCheckbox')

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            genreArr.push(checkboxes[i].id);
            console.log(checkboxes[i].id);
        }
    }

    var genreIds = genreArr.join(',')
    console.log(genreIds);
    return genreIds;
};

// pull list of movies and display top list of movies
var getMovies = function (pageNum = 1) {
    const rating = selectedRatings();
    const genre = selectedGenres();
    fetch(`${base_url}discover/movie?api_key=${movieAPIKey}&page=${pageNum}&with_genres=${genre}&certification_country=US&certification=${rating}`)
        .then((response) => response.json())
        .then(function (response) {
            // localStorage.setItem(response)
            console.log(response);
            for (var i = 0; i < 5; i++) {
                var selectedMovie = response.results[i];

                // add 'selectedMovie to movieList array
                movieList.push(selectedMovie)
                console.log(movieList);
            }
            displayRecommendations();
        });
};

var displayRecommendations = function () {
    // check if api returned any movies
    if (movieList.length == 0) {
        movieContainerEl.textContent = "No movies fit your search parameters!";
        return;
    }

    // clear content from last search
    movieContainerEl.textContent = "";

    // <li class="collection-item"></li>
    // create and append li element to ol
    for (var i = 0; i < movieList.length; i++) {
        // create a li element to hold movie name
        var titleEl = document.createElement("li");
        // add Materialize styling to li
        titleEl.classList = "collection-item"
        // format movie name
        var movieName = movieList[i].title;

        // put movie name into li element
        titleEl.textContent = movieName;

        // append li to ol container
        movieContainerEl.appendChild(titleEl)
    }
}

document.getElementById("getMovies").addEventListener("click", getMovies);

// watchmode API

function getSources() {
    fetch("https://watchmode.p.rapidapi.com/title/3173903/sources/", {
        method: "GET",
        headers: {
            regions: "US",
            "x-rapidapi-key":
                "f9b6ff2d83mshfdf3d16f8b26babp1de6a3jsn6c228711f379",
            "x-rapidapi-host": "watchmode.p.rapidapi.com",
        },
    })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(err);
        });
}

async function getEntertainmentStreamData(query, type) {
    console.log("getentertainment is invoked");

    const response = await fetch(
        `https://watchmode.p.rapidapi.com/search/?search_field=name&search_value=${query}&types=${type}`,
        {
            method: "GET",
            headers: {
                "x-rapidapi-key":
                    "0e490c0bb2msh27474734de7d723p106e9ajsn139beffcdbea",
                "x-rapidapi-host": "watchmode.p.rapidapi.com",
            },
        }
    )
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.error(err);
        });
    console.log("got the id successfully", response);
    let id = response["title_results"][0].id;
    let newURL = `https://watchmode.p.rapidapi.com/title/${id}/sources/`;
    const streamingData = await fetch(newURL, {
        method: "GET",
        headers: {
            regions: "US",
            "x-rapidapi-key":
                "0e490c0bb2msh27474734de7d723p106e9ajsn139beffcdbea",
            "x-rapidapi-host": "watchmode.p.rapidapi.com",
        },
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.error(err);
        });
    var streamingServicesUS = streamingData
        .filter(movie => movie.region == "US")
        .filter(movie => movie.type == "sub")
    console.log(streamingServicesUS);
    var webURL = streamingServicesUS
        .filter(movie => movie.web_url)
    console.log(webURL.value);
}
//************************* */ WORK ON GETTING THIS TO DISPLAY *****************//
var displaySreamingPlatforms = function () {
    var availablePlatforms = searchInputEl.value

};

document.getElementById("movie-submit-btn").addEventListener("click", function (e) {
    e.preventDefault();
    console.log("i been clicked");
    let query = document.getElementById('title-search').value || "Rocky";
    console.dir(query) //grab actual value from form
    let tvOrMovie = "movie"; //grab actual value from form
    getEntertainmentStreamData(query, tvOrMovie);
});


// array to store in localStorage
var dataCounter = [
    {
        ratings:
        {
            G: '',
            PG: '',
            PG13: '',
            R: '',
        },
        genres:
        {
            Action: '',
            Adventure: '',
            Animation: '',
            Comedy: '',
            Crime: '',
            Documentary: '',
            Drama: '',
            Family: '',
            Fantasy: '',
            History: '',
            Horror: '',
            Music: '',
            Mystery: '',
            Romance: '',
            ScienceFiction: '',
            Thriller: '',
            War: '',
            Western: '',
        }
    }
];
// count number of times each rating/genre 
// save that information to localStorage
var savedData = function () {


}
