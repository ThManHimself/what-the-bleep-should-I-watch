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

<!-- MOVIE RATINGS -->
"US": [
{
"certification": "PG-13",
"meaning": "Some material may be inappropriate for children under 13. Films given this rating may contain sexual content, brief or partial nudity, some strong language and innuendo, humor, mature themes, political themes, terror and/or intense action violence. However, bloodshed is rarely present. This is the minimum rating at which drug content is present.",
"order": 3
},
{
"certification": "R",
"meaning": "Under 17 requires accompanying parent or adult guardian 21 or older. The parent/guardian is required to stay with the child under 17 through the entire movie, even if the parent gives the child/teenager permission to see the film alone. These films may contain strong profanity, graphic sexuality, nudity, strong violence, horror, gore, and strong drug use. A movie rated R for profanity often has more severe or frequent language than the PG-13 rating would permit. An R-rated movie may have more blood, gore, drug use, nudity, or graphic sexuality than a PG-13 movie would admit.",
"order": 4
},
{
"certification": "NR",
"meaning": "No rating information.",
"order": 0
},
{
"certification": "G",
"meaning": "All ages admitted. There is no content that would be objectionable to most parents. This is one of only two ratings dating back to 1968 that still exists today.",
"order": 1
},
{
"certification": "PG",
"meaning": "Some material may not be suitable for children under 10. These films may contain some mild language, crude/suggestive humor, scary moments and/or violence. No drug content is present. There are a few exceptions to this rule. A few racial insults may also be heard.",
"order": 2
},
{
"certification": "NC-17",
"meaning": "These films contain excessive graphic violence, intense or explicit sex, depraved, abhorrent behavior, explicit drug abuse, strong language, explicit nudity, or any other elements which, at present, most parents would consider too strong and therefore off-limits for viewing by their children and teens. NC-17 does not necessarily mean obscene or pornographic in the oft-accepted or legal meaning of those words.",
"order": 5
}
],