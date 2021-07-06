// ------------------------------------------------------------------
// // The idea of the commented lines are to separate the code into the different major sections. Doing it this way could help reduce confusion when 'git pulling'. 
// // Try to keep things clean and use //comments on each and every file so the code is easy to read and the functionality of different code blocks are easy to understand.
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// importing API Key from key.js. (message Colton if you need help understand this)
import { APIKEY } from './key.js';
console.log(APIKEY);
// ------------------------------------------------------------------


// ------------------------------------------------------------------

// ------------------------------------------------------------------



// ------------------------------------------------------------------

// ------------------------------------------------------------------


// ------------------------------------------------------------------
// // // // THIS IS AN EXAMPLE OF HOW TO FETCH MOVIES FROM THE DATABASE USING A SEARCH BAR
// // // // WE MAY NOT NECESSARILY NEED THIS THROUGHOUT THE PROJECT, BUT IT IS HERE AS AN EXAMPLY OF ONE THING THAT CAN BE DONE
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