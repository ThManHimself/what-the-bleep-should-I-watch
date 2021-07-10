// ------------------------------------------------------------------
var ratingContainerEl = document.querySelector("#rating-container")

// ------------------------------------------------------------------
// // .methods() that could be beneficial
// splice
// slice
// sort

// ------------------------------------------------------------------

// ------------------------------------------------------------------

const streamingAPIKey = '0e490c0bb2msh27474734de7d723p106e9ajsn139beffcdbea'
const movieAPIKey = '03af2fad82ab3f23750190542914caf8'
const streamingUrl = 'https://watchmode.p.rapidapi.com/list-titles/'
const base_url = "http://api.themoviedb.org/3/"
const images_url = "http://image.tmdb.org/t/p/"

// ------------------------------------------------------------------
// function to get whatever data we need from the API
var getMovieData = function(info) { 
    // needs work
    var apiUrl = base_url + 

    fetch(apiUrl).then(function(response) { 
        // if request was successful
        if(response.ok) { 
            response.json().then(function(data) { 
                // pass response data to dom function
                displayRatings(data);
            })
        }
        else { 
            // !!! ALERT IS TEMPORARY !!! (replace with a modal)
            alert("There was a problem with your request!");
        }
    });
}

// ------------------------------------------------------------------
// check genres
// if statement for each checkbox
// put id in genre list if the box is checked
var genreIds = []
// var checkGenres = function(){
//     var checkedGenres = document.getElementsByClassName("genreChbox");
//     var result = [];
//     for (var i = 0; )
// }

// ------------------------------------------------------------------
// pull list of movies and display top list of movies
var movieList = [];
var getMovies = function(pageNum) { 
    fetch(base_url + 'discover/movie?api_key=' + movieAPIKey + '&page=' + pageNum)
    .then(response => response.json())
    .then(function(response) { 
        for (var i = 0; i < 20; i++){ 
            var selectedMovie = response.results[i]
            console.log(selectedMovie);

            for (var j = 0; j < selectedMovie.genre_ids.length; j++) {
                // change if statement to check if this id is in genreIds list
                if (genreIds.includes(selectedMovie.genre_ids[j]))
                // if (selectedMovie.genre_ids[j])
                    movieList.push(selectedMovie)
            
            if (movieList.length === 5)
                break;
            }
        }
        if (movieList.length < 5) { 
            if (pageNum <= 5) {
                pageNum++
                getMovies(pageNum);
            } else { 
                console.log('END');
            }
        }
        console.log(movieList);

        // // if request was successful
        // if(response.ok) { 
        //     response.json().then(function(data) { 
        //         // save list of movies
        //         console.log();
        //     })
        // }
        // else { 
        //     // !!! ALERT IS TEMPORARY !!! (replace with a modal)
        //     alert("There was a problem with your request!");
        // }
    })
}
getMovies(1);
// ------------------------------------------------------------------

var submitBtn = function(){ 
    // check rating not definded yet
    checkRating();
    checkGenres();
    getMovies();
}

// add button that calls checkGenres() THEN getMovies()



// ------------------------------------------------------------------



// ------------------------------------------------------------------

// Add event listener to button click to query WatchMode for Streaming Services


// ------------------------------------------------------------------
// function getCertifications() {
//     fetch("https://api.themoviedb.org/3/certification/movie/list?api_key=03af2fad82ab3f23750190542914caf8&certifications_country=US")
//     .then(response => response.json())
//     .then(response => {
//         const certifications = response.certifications.US
//         let mainContainer = document.getElementById("myData");
//         for (var i = 0; i < certifications.length; i++) { 
//             // create div element with movie rating in it
//             var div = document.createElement("div");
//             div.innerHTML = 'Rating: ' + certifications[i].certification

//             // append each rating to our page
//             mainContainer.appendChild(div);
//             console.log(certifications[i]);
//         }
//         console.log(response);
//         return response.certifications
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }
// getCertifications()
// watchmode api for stteaming services call
// let sourceSearch = document.getElementById("search-criteria");
// function getSources() {
// fetch("https://watchmode.p.rapidapi.com/sources/?types=sub%2Cfree&regions=US%2CCA", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "0e490c0bb2msh27474734de7d723p106e9ajsn139beffcdbea",
// 		"x-rapidapi-host": "watchmode.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	response.json();
// })

// .then(response => {
//     const sources = response.sources.US
// .catch(err => {
// 	console.error(err);
// });
// console.log(getSources)
// getSources()
// } 
// ------------------------------------------------------------------
// Create element by id to return streaming service search results inside
// the div container
// ------------------------------------------------------------------



// ------------------------------------------------------------------

// ------------------------------------------------------------------



// ------------------------------------------------------------------

// ------------------------------------------------------------------



// ------------------------------------------------------------------

// ------------------------------------------------------------------



// ------------------------------------------------------------------

// ------------------------------------------------------------------



// ------------------------------------------------------------------


// ------------------------------------------------------------------



// ------------------------------------------------------------------

// ------------------------------------------------------------------



// ------------------------------------------------------------------

// ------------------------------------------------------------------
// document.addEventListener('DOMContentLoaded', getConfig);
// ------------------------------------------------------------------

