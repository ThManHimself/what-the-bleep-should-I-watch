// ------------------------------------------------------------------
// // The idea of the commented lines are to separate the code into the different major sections. Doing it this way could help reduce confusion when 'git pulling'. 
// // Try to keep things clean and use //comments on each and every file so the code is easy to read and the functionality of different code blocks are easy to understand.
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// // fetch URL option 1 (retrieves a specific movie)
// fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt4154796&r=json", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "81de025dcfmsh7ff9da4b830ea4ep14da34jsnd7ce805e9e06",
// 		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
// 	}
// })
// .then (response => response.json())
// .then(response => {
//     console.log(response);
// })
// .catch(err => {
//     console.error(err);
// });

// // fetch URL option 2 (retrieves input in json format)
// fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?r=json", {
//     "method": "GET",
// 	"headers": {
//         "x-rapidapi-key": "81de025dcfmsh7ff9da4b830ea4ep14da34jsnd7ce805e9e06",
// 		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
// 	}
// })
// .then (response => response.json())
// .then(response => {
//     console.log(response);
// })
// .catch(err => {
//     console.error(err);
// });

// // fetch URL option 3 (retrieves the database as a whole(I THINK???))
// fetch("https://movie-database-imdb-alternative.p.rapidapi.com/", {
//     "method": "GET",
// 	"headers": {
//         "x-rapidapi-key": "81de025dcfmsh7ff9da4b830ea4ep14da34jsnd7ce805e9e06",
// 		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
// 	}
// })
// .then (response => response.json())
// .then(response => {
//     console.log(response);
// })
// .catch(err => {
//     console.error(err);
// });
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// fetch URL option 1 (retrieves a specific movie)



// fetch("https://api.themoviedb.org/3/movie/550?api_key=03af2fad82ab3f23750190542914caf8", {
// 	"method": "GET",
// 	"headers": {
// 		"APIkey": "03af2fad82ab3f23750190542914caf8",
// 		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
// 	}
// })
// .then (response => response.json())
// .then(response => {
//     console.log(response);
// })
// .catch(err => {
//     console.error(err);
// });



// ------------------------------------------------------------------
// importing API Key from key.js. (message Colton if you need help understand this)
import { APIKEY } from './key.js';
console.log(APIKEY);

// ------------------------------------------------------------------
// // // // THIS IS AN EXAMPLE OF HOW TO FETCH MOVIES FROM THE DATABASE USING A SEARCH BAR
// // // // THIS IS **NOT** WHAT WE ARE GOING TO BE USING FOR THIS PROJECT
// // // // THIS WAS TAKEN FROM THIS VIDEO: https://www.youtube.com/watch?v=bpHtxx_wmqw


//// 1. To get the config data like image base URLs
//// https://api.themoviedb.org/3/configuration?api_key=03af2fad82ab3f23750190542914caf8

//// 2. To fetch a list of movies based on a <keyword>
//// https://api.themoviedb.org/3/search/movie?api_key=03af2fad82ab3f23750190542914caf8&query=<keyword>

//// 3. To fetch more details about a movie
//// https://api.themoviedb.org/3/movie/<movie-id>?api_key=03af2fad82ab3f23750190542914caf8

// let baseURL = 'https://api.themoviedb.org/3/';
// let configData = null;
// let baseImageURL = null;

// let getConfig = function() { 
//     let url = "".concat(baseURL, 'configuration?api_key=', APIKEY);
//     fetch(url)
//     .then((result)=> { 
//         return result.json();
//     })
//     .then((data)=> { 
//         baseImageURL = data.images.secure_base_url;
//         configData = data.images;
//         console.log('config', data);
//         console.log('config fetched');
//         runSearch('jaws')
//     })
//     .catch(function(err) { 
//         alert(err);
//     });
// }

// let runSearch = function(keyword) { 
//     let url = "".concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
//     fetch(url)
//     .then(result=>result.json())
//     .then((date)=> { 
//         // process the returned data
//         document.getElementById('output').innerHTML = JSON.stringify(data, null, 4);     //// NO ELEMENT WITH THE ID OF 'output'
//         // work with results array...
//     })
// }

// document.addEventListener('DOMContentLoaded', getConfig);



// ------------------------------------------------------------------


// ------------------------------------------------------------------

// ------------------------------------------------------------------