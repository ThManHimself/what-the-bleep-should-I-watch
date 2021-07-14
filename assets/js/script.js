var movieContainerEl = document.getElementById("movieContainer");
var searchInputEl = document.getElementById("title-search");

// rating element variables
var ratedG = document.getElementById("G")
var ratedPG = document.getElementById("PG")
var ratedPG13 = document.getElementById("PG-13")
var ratedR = document.getElementById("R")

// // genre element variables
// // This will be used in further iterations of the application
// var Action = document.getElementById("28");
// var Adventure = document.getElementById("12");
// var animation = document.getElementById("16");
// var Comedy = document.getElementById("35");
// var Crime = document.getElementById("80");
// var Documentary = document.getElementById("99");
// var Drama = document.getElementById("18");
// var Family = document.getElementById("10751");
// var Fantasy = document.getElementById("14");
// var history = document.getElementById("36");
// var Horror = document.getElementById("27");
// var Music = document.getElementById("10402");
// var Mystery = document.getElementById("9648");
// var Romance = document.getElementById("10749");
// var ScienceFiction = document.getElementById("878");
// var Thriller = document.getElementById("53");
// var War = document.getElementById("10752");
// var Western = document.getElementById("37");

const streamingAPIKey = "0e490c0bb2msh27474734de7d723p106e9ajsn139beffcdbea";
const movieAPIKey = "03af2fad82ab3f23750190542914caf8";
const streamingUrl = "https://watchmode.p.rapidapi.com/list-titles/";
const base_url = "http://api.themoviedb.org/3/";
const images_url = "http://image.tmdb.org/t/p/";

// TMDB API

let movieList = [];

var selectedRatings = function() { 
    
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
    resetMovieList();
    const rating = selectedRatings();
    const genre = selectedGenres();
    fetch(`${base_url}discover/movie?api_key=${movieAPIKey}&page=${pageNum}&with_genres=${genre}&certification_country=US&certification=${rating}`)
    .then((response) => response.json())
    .then(function (response) {
        // localStorage.setItem(response)
        console.log(response);
        // check if api returned any movies
        if (response.results == 0) { 
            movieContainerEl.textContent = "No movies fit your search parameters!";
            return;
        }
        for (var i = 0; i < 5; i++) {
            var selectedMovie = response.results[i];
            
            // add 'selectedMovie to movieList array
            movieList.push(selectedMovie)
            console.log(movieList);
        }
        displayRecommendations();
    });
};

var displayRecommendations = function() { 
    // clear content from last search
    movieContainerEl.textContent = "";

    
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

// removes all items from movieList to get a fresh search - used in getMovies so the user does not need to refresh to remove the displayed movies from a previous search
var resetMovieList = function() { 
    while (movieList.length) { 
        movieList.pop();
    }
}

// retrieve and display movies when the button is clicked
document.getElementById("getMovies").addEventListener("click", getMovies);
// collect input data and save it into local storage
var ratingsData = [];
document.getElementById("getMovies").addEventListener("click", function(event) { 
    event.preventDefault();
    var incrementCollectedData = function() { 
        var timesSelectedG = localStorage.getItem('G');
        var timesSelectedPG = localStorage.getItem('PG');
        var timesSelectedPG13 = localStorage.getItem('PG13');
        var timesSelectedR = localStorage.getItem('R');

        // ratings
        if (ratedG.checked) { 
            if (timesSelectedG == null) { 
                timesSelectedG = 1;
            } else { 
                timesSelectedG++;
            }
        }
        if (ratedPG.checked) { 
            if (timesSelectedPG == null) { 
                timesSelectedPG = 1;
            } else { 
                timesSelectedPG++;
            }
        }
        if (ratedPG13.checked) { 
            if (timesSelectedPG13 == null) { 
                timesSelectedPG13 = 1;
            } else { 
                timesSelectedPG13++;
            }
        }
        if (ratedR.checked) { 
            if (timesSelectedR == null) { 
                timesSelectedR = 1;
            } else { 
                timesSelectedR++;
            }
        }

        // saving the data to localStorage
        localStorage.setItem('G', JSON.stringify(timesSelectedG));
        localStorage.setItem('G', JSON.stringify(timesSelectedPG));
        localStorage.setItem('G', JSON.stringify(timesSelectedPG13));
        localStorage.setItem('G', JSON.stringify(timesSelectedR));
    }
    incrementCollectedData();

});

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
        .filter(movie=>movie.region=="US")
        .filter(movie=>movie.type=="sub")
        console.log(streamingServicesUS);
    var webURL = streamingServicesUS
        .filter(movie=>movie.web_url)
    console.log(webURL.value);
}

var displaySreamingPlatforms = function() { 
    var availablePlatforms = searchInputEl.value
}


document.getElementById("movie-submit-btn").addEventListener("click", function (e) {
    e.preventDefault();
    console.log("i been clicked");
    let query = document.getElementById('title-search').value || "Rocky";
    console.dir(query) //grab actual value from form
    let tvOrMovie = "movie"; //grab actual value from form
    getEntertainmentStreamData(query, tvOrMovie);
});


