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
var checkGenres = function(){

}


// ------------------------------------------------------------------
// pull list of movies and display top list of movies
var movieList = [];
var getMovies = (pageNum = 1) => { 
    // 
    // TODO: get ratings
    // TODO: get genres

    // TODO: update API call with ratings and genres
    fetch(`${base_url}discover/movie?api_key=${movieAPIKey}&page=${pageNum}`)
    .then(res => res.json())
    .then(data => {
        displayMovies(data.results);
        console.log(data.results);
    });
}
    // .then(response => response.json())
    // .then(function(response) { 
    //     for (var i = 0; i < 20; i++){ 
    //         console.log("getMovies")
    //         var selectedMovie = data.results[i]
    //         console.log(selectedMovie);

    //         for (var j = 0; j < selectedMovie.genre_ids.length; j++) {
    //             // change if statement to check if this id is in genreIds list
    //             if (selectedMovie.genre_ids[j])
    //                 movieList.push(selectedMovie)
            
    //         if (movieList.length === 5)
    //             break;
    //         }
    //     }
    //     // debugger
    //     if (movieList.length < 5) { 
    //         if (pageNum <= 500)
    //             getMovies(pageNum++);
    //     }
    //     console.log(movieList);
  

    //     // // if request was successful
    //     // if(response.ok) { 
    //     //     response.json().then(function(data) { 
    //     //         // save list of movies
    //     //         console.log();
    //     //     })
    //     // }
    //     // else { 
    //     //     // !!! ALERT IS TEMPORARY !!! (replace with a modal)
    //     //     alert("There was a problem with your request!");
    //     // }
    // })

// const displayMovies = (movies) => {
    
//     // TODO: update innerHTML to display movie list
// }

// document.getElementById("getMovies").addEventListener("click", getMovies);



// ------------------------------------------------------------------
// add button that calls checkGenres() THEN getMovies()



// ------------------------------------------------------------------

// if (genreIds.includes(selectedMovie.genre_ids[j]))


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
function getSources() {
    fetch("https://watchmode.p.rapidapi.com/title/3173903/sources/", {
        "method": "GET",
        "headers": {
            "regions": "US",
            "x-rapidapi-key": "f9b6ff2d83mshfdf3d16f8b26babp1de6a3jsn6c228711f379",
            "x-rapidapi-host": "watchmode.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
}
    // getSources();
// ------------------------------------------------------------------
// Create element by id to return streaming service search results inside
// the div container
// ------------------------------------------------------------------

async function getEntertainmentStreamData (query, type) {
    console.log('getentertainment is invoked')
    
    const response = await fetch(`https://watchmode.p.rapidapi.com/search/?search_field=name&search_value=${query}&types=${type}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "0e490c0bb2msh27474734de7d723p106e9ajsn139beffcdbea",
		"x-rapidapi-host": "watchmode.p.rapidapi.com"
	}
})
.then(response => {
	return response.json()

})
.catch(err => {
	console.error(err);
});
console.log('got the id successfully', response)
    let id = response["title_results"][0].id;
    let newURL = `https://watchmode.p.rapidapi.com/title/${id}/sources/`
    const streamingData =await fetch(newURL, {
	"method": "GET",
	"headers": {
		"regions": "US",
		"x-rapidapi-key": "0e490c0bb2msh27474734de7d723p106e9ajsn139beffcdbea",
		"x-rapidapi-host": "watchmode.p.rapidapi.com"
	}
})
.then(response => {
	return response.json()
})
.catch(err => {
	console.error(err);
});
console.log(streamingData)


}

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
document.getElementById("movie-submit-btn").addEventListener("click", function(e) {
    e.preventDefault();
    console.log('i been clicked')
    let query ="rocky"; //grab actual value from form
    let tvOrMovie = "movie"; //grab actual value from form

    getEntertainmentStreamData(query, tvOrMovie);

});
document.querySelector().value
