// ------------------------------------------------------------------
// // The idea of the commented lines are to separate the code into the different major sections. Doing it this way could help reduce confusion when 'git pulling'. 
// // Try to keep things clean and use //comments on each and every file so the code is easy to read and the functionality of different code blocks are easy to understand.
// ------------------------------------------------------------------


// ------------------------------------------------------------------
fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt4154796&r=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "81de025dcfmsh7ff9da4b830ea4ep14da34jsnd7ce805e9e06",
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
// ------------------------------------------------------------------


// ------------------------------------------------------------------

// ------------------------------------------------------------------


// ------------------------------------------------------------------

// ------------------------------------------------------------------


// ------------------------------------------------------------------

// ------------------------------------------------------------------