# Saving code for later reference/testing



## HTML

<!-- Line 13 -->
    <div>
        <h1>Welcome to The Movie Database Movie Recomender</h1>
        
        <form>
            <div class="form-group">
                <input type="text" id="inputValue">
            </div>
            <button type="submit" id="search">Show Me Recomendations</button>
        </form>
    </div>


## CSS

## JavaScript


<!-- The following could be used for the survery section of the project. It is just the start and not very organized/complete, but it could be used as a starting point of what would need to be done. -->
// 
const baseURL = 'https://movie-database-imdb-alternative.p.rapidapi.com/'

// 
let movie = ''


// parameter checks for survery
const movieParameters = [
    {
        parameter: 'What genres are you interested in today?',
        genre: ''
    },
    {
        parameter: '',
        genre: ''
    },
    {
        rated: ''
    }
]

const genre = ''
const rated = ''

// 
const criticScores = ''

<!-- Line 31 -->
const buttonEl = document.querySelector('#search')
const inputEl = document.querySelector('#inputValue')

buttonEl.onclick = function(event) { 
    event.preventDefault()
    const value = inputEl.value;
    console.log("Value: ", value);
}


<!-- Line 43 -->
// // Movie Genres (19 total)
// https://api.themoviedb.org/3/genre/movie/list?api_key=03af2fad82ab3f23750190542914caf8

// For the Survey, we want to display all the names of the genre's with checkboxes

// function to display genre choices in the genre section of the servey
function displayGenreChoices() { 
    const url = base_uri + "/genre/movie/list?api_key=" + movieAPIKey
    fetch(url)
        .then((res) => res.json())
        .then((data) => { 
            console.log('Data:', data);
        })
        .catch((error) => { 
            console.log('Error: ', error);
        });
}
