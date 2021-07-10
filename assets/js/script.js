var ratingContainerEl = document.querySelector("#rating-container")

// ------------------------------------------------------------------
// // .methods() that could be beneficial
// splice
// slice
// sort
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
// have to find out how to pull the certifications info into this function
// display the rating choices on the survey
var displayRatings = function(certifications) { 
    for (var i = 0; i < certifications.length; i++) { 
        // create a 'p' element to hold the label elements for the checkboxes/ratings
        var certificationsEl = document.createElement("p");
        certificationsEl.classList = "col s3"

        // create a label element to hold the input and span elements
        var labelEL = document.createElement("label");

        // append label to container
        certificationsEl.appendChild(labelEL);

        // create an input and span element to hold the rating and checkbox
            // checkbox
            var checkboxEl = document.createElement("input")
            checkboxEl.setAttribute("type", "checkbox")
        
            // span
            var ratingEl = document.createElement("span");
            ratingEl.textContent = certifications[i].value
        
        // append ratingEL and checkboxEL to labelEL
        labelEL.appendChild(checkboxEl);
        labelEL.appendChild(ratingEl);

        // append to #rating-container 
        ratingContainerEl.appendChild(certificationsEl);
    }
};
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



// ------------------------------------------------------------------

// ------------------------------------------------------------------