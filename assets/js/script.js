var movieContainerEl = document.getElementById("movieContainer");
var searchInputEl = document.getElementById("title-search");

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


// SAVING DATA TO LOCAL STORAGE // SAVING DATA TO LOCAL STORAGE //

// rating element variables
var ratedG = document.getElementById("G")
var ratedPG = document.getElementById("PG")
var ratedPG13 = document.getElementById("PG-13")
var ratedR = document.getElementById("R")

// genre element variables
var Action = document.getElementById("28");
var Adventure = document.getElementById("12");
var animation = document.getElementById("16");
var Comedy = document.getElementById("35");
var Crime = document.getElementById("80");
var Documentary = document.getElementById("99");
var Drama = document.getElementById("18");
var Family = document.getElementById("10751");
var Fantasy = document.getElementById("14");
var history = document.getElementById("36");
var Horror = document.getElementById("27");
var Music = document.getElementById("10402");
var Mystery = document.getElementById("9648");
var Romance = document.getElementById("10749");
var ScienceFiction = document.getElementById("878");
var Thriller = document.getElementById("53");
var War = document.getElementById("10752");
var Western = document.getElementById("37");

// collect input data and save it into local storage
ratingsData = [];
genresData = [];

document.getElementById("getMovies").addEventListener("click", function(event) { 
    event.preventDefault();
    var incrementCollectedData = function() { 
        debugger

        // ratings variables
        var timesSelectedG = JSON.parse(localStorage.getItem('G'));
        var timesSelectedPG = JSON.parse(localStorage.getItem('PG'));
        var timesSelectedPG13 = JSON.parse(localStorage.getItem('PG-13'));
        var timesSelectedR = JSON.parse(localStorage.getItem('R'));

        // when a rating is checked on the page,
        // increment the value by 1 when the 'Get Movies' button is clicked.
        // If it has never been checked before,
        // make the value 1 because it is the first time it was checked
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

        // saving the ratings data to localStorage
        localStorage.setItem('G', JSON.stringify(timesSelectedG));
        localStorage.setItem('PG', JSON.stringify(timesSelectedPG));
        localStorage.setItem('PG-13', JSON.stringify(timesSelectedPG13));
        localStorage.setItem('R', JSON.stringify(timesSelectedR));

        // remove the old data from before and keep only
        // the most up to date data in the ratingsData array
        // (used for furture versions of WTBSIW)
        if (ratingsData.length > 0) { 
            ratingsData.pop()
        }
        ratingsData.push(
            "G: " + timesSelectedG,
            "PG: " + timesSelectedPG,
            "PG-13: " + timesSelectedPG13,
            "R: " + timesSelectedR
        )
        
        
        // genre variables
        var timesSelectedAction = JSON.parse(localStorage.getItem('Action'));
        var timesSelectedAdventure = JSON.parse(localStorage.getItem('Adventure'));
        var timesSelectedAnimation = JSON.parse(localStorage.getItem('Animation'));
        var timesSelectedComedy = JSON.parse(localStorage.getItem('Comedy'));
        var timesSelectedCrime = JSON.parse(localStorage.getItem('Crime'));
        var timesSelectedDocumentary = JSON.parse(localStorage.getItem('Documentary'));
        var timesSelectedDrama = JSON.parse(localStorage.getItem('Drama'));
        var timesSelectedFamily = JSON.parse(localStorage.getItem('Family'));
        var timesSelectedFantasy = JSON.parse(localStorage.getItem('Fantasy'));
        var timesSelectedHistory = JSON.parse(localStorage.getItem('History'));
        var timesSelectedHorror = JSON.parse(localStorage.getItem('Horror'));
        var timesSelectedMusic = JSON.parse(localStorage.getItem('Music'));
        var timesSelectedMystery = JSON.parse(localStorage.getItem('Mystery'));
        var timesSelectedRomance = JSON.parse(localStorage.getItem('Romance'));
        var timesSelectedScienceFiction = JSON.parse(localStorage.getItem('Science Fiction'));
        var timesSelectedThriller = JSON.parse(localStorage.getItem('Thriller'));
        var timesSelectedWar = JSON.parse(localStorage.getItem('War'));
        var timesSelectedWestern = JSON.parse(localStorage.getItem('Western'));
        
        // if genre selected, increment counter
        if (Action.checked) {
            if (timesSelectedAction == null) {
                timesSelectedAction = 1;
            } else {
                timesSelectedAction++;
            }
        }
        if (Adventure.checked) {
            if (timesSelectedAdventure == null) {
                timesSelectedAdventure = 1;
            } else {
                timesSelectedAdventure++;
            }
        }
        if (animation.checked) {
            if (timesSelectedAnimation == null) {
                timesSelectedAnimation = 1;
            } else {
                timesSelectedAnimation++;
            }
        }
        if (Comedy.checked) {
            if (timesSelectedComedy == null) {
                timesSelectedComedy = 1;
            } else {
                timesSelectedComedy++;
            }
        }
        if (Crime.checked) {
            if (timesSelectedCrime == null) {
                timesSelectedCrime = 1;
            } else {
                timesSelectedCrime++;
            }
        }
        if (Documentary.checked) {
            if (timesSelectedDocumentary == null) {
                timesSelectedDocumentary = 1;
            } else {
                timesSelectedDocumentary++;
            }
        }
        if (Drama.checked) {
            if (timesSelectedDrama == null) {
                timesSelectedDrama = 1;
            } else {
                timesSelectedDrama++;
            }
        }
        if (Family.checked) {
            if (timesSelectedFamily == null) {
                timesSelectedFamily = 1;
            } else {
                timesSelectedFamily++;
            }
        }
        if (Fantasy.checked) {
            if (timesSelectedFantasy == null) {
                timesSelectedFantasy = 1;
            } else {
                timesSelectedFantasy++;
            }
        }
        if (history.checked) {
            if (timesSelectedHistory == null) {
                timesSelectedHistory = 1;
            } else {
                timesSelectedHistory++;
            }
        }
        if (Horror.checked) {
            if (timesSelectedHorror == null) {
                timesSelectedHorror = 1;
            } else {
                timesSelectedHorror++;
            }
        }
        if (Music.checked) {
            if (timesSelectedMusic == null) {
                timesSelectedMusic = 1;
            } else {
                timesSelectedMusic++;
            }
        }
        if (Mystery.checked) {
            if (timesSelectedMystery == null) {
                timesSelectedMystery = 1;
            } else {
                timesSelectedMystery++;
            }
        }
        if (Romance.checked) {
            if (timesSelectedRomance == null) {
                timesSelectedRomance = 1;
            } else {
                timesSelectedRomance++;
            }
        }
        if (ScienceFiction.checked) {
            if (timesSelectedScienceFiction == null) {
                timesSelectedScienceFiction = 1;
            } else {
                timesSelectedScienceFiction++;
            }
        }
        if (Thriller.checked) {
            if (timesSelectedThriller == null) {
                timesSelectedThriller = 1;
            } else {
                timesSelectedThriller++;
            }
        }
        if (War.checked) {
            if (timesSelectedWar == null) {
                timesSelectedWar = 1;
            } else {
                timesSelectedWar++;
            }
        }
        if (Western.checked) {
            if (timesSelectedWestern == null) {
                timesSelectedWestern = 1;
            } else {
                timesSelectedWestern++;
            }
        }

        // saving the data to localStorage
        localStorage.setItem('Action', JSON.stringify(timesSelectedAction));
        localStorage.setItem('Adventure', JSON.stringify(timesSelectedAdventure));
        localStorage.setItem('Animation', JSON.stringify(timesSelectedAnimation));
        localStorage.setItem('Comedy', JSON.stringify(timesSelectedComedy));
        localStorage.setItem('Crime', JSON.stringify(timesSelectedCrime));
        localStorage.setItem('Documentary', JSON.stringify(timesSelectedDocumentary));
        localStorage.setItem('Drama', JSON.stringify(timesSelectedDrama));
        localStorage.setItem('Family', JSON.stringify(timesSelectedFamily));
        localStorage.setItem('Fantasy', JSON.stringify(timesSelectedFantasy));
        localStorage.setItem('History', JSON.stringify(timesSelectedHistory));
        localStorage.setItem('Horror', JSON.stringify(timesSelectedHorror));
        localStorage.setItem('Music', JSON.stringify(timesSelectedMusic));
        localStorage.setItem('Mystery', JSON.stringify(timesSelectedMystery));
        localStorage.setItem('Romance', JSON.stringify(timesSelectedRomance));
        localStorage.setItem('Science Fiction', JSON.stringify(timesSelectedScienceFiction));
        localStorage.setItem('Thriller', JSON.stringify(timesSelectedThriller));
        localStorage.setItem('War', JSON.stringify(timesSelectedWar));
        localStorage.setItem('Western', JSON.stringify(timesSelectedWestern));

        // remove the old data from before and keep only
        // the most up to date data in the genresData array
        // (used for furture versions of WTBSIW)
        if (genresData.length > 0) { 
            genresData.pop()
        }
        genresData.push(
            "Action: " + timesSelectedAction,
            "Adventure: " + timesSelectedAdventure,
            "Animation: " + timesSelectedAnimation,
            "Comedy: " + timesSelectedComedy,
            "Crime: " + timesSelectedCrime,
            "Documentary: " + timesSelectedDocumentary,
            "Drama: " + timesSelectedDrama,
            "Family: " + timesSelectedFamily,
            "Fantasy: " + timesSelectedFantasy,
            "History: " + timesSelectedHistory,
            "Horror: " + timesSelectedHorror,
            "Music: " + timesSelectedMusic,
            "Mystery: " + timesSelectedMystery,
            "Romance: " + timesSelectedRomance,
            "Science Fiction: " + timesSelectedScienceFiction,
            "Thriller: " + timesSelectedThriller,
            "War: " + timesSelectedWar,
            "Western: " + timesSelectedWestern
        )
    }

    console.log(ratingsData);
    console.log(genresData);
    incrementCollectedData();
});

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


