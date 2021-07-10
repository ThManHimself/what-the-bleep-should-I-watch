// ------------------------------------------------------------------
var ratingContainerEl = document.querySelector("#rating-container")

// ------------------------------------------------------------------
// // .methods() that could be beneficial
// splice
// slice
// sort

// ------------------------------------------------------------------

// ------------------------------------------------------------------

const movieAPIKey = '03af2fad82ab3f23750190542914caf8'
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
var checkGenres = function(){

}


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
                if (selectedMovie.genre_ids[j])
                    movieList.push(selectedMovie)
            
            if (movieList.length === 5)
                break;
            }
        }
        // debugger
        // if (movieList.length < 5) { 
        //     if (pageNum <= 500)
        //         getMovies(pageNum++);
        // }
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
// add button that calls checkGenres() THEN getMovies()



// ------------------------------------------------------------------

// if (genreIds.includes(selectedMovie.genre_ids[j]))


// ------------------------------------------------------------------



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