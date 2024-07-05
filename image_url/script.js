const movieName = document.getElementById("movie-name");
const imageUrl = document.getElementById("image-url");

const movie_name = document.getElementById("movies-name");
const addMovieButton = document.getElementById("add-btn");

const moviesList = document.getElementById("movies-list");

const removeAllMoviesBtn = document.getElementById("remove-btn");


function checkInput () {
    if (movieName.value === "" || imageUrl.value === "" ) {
        addMovieButton.disabled = true;
    } else {
        addMovieButton.disabled = false;
    }

}

addMovieButton.addEventListener('click', () => {

    const movieList = document.createElement("li");
    const moviesDiv = document.createElement("div");
    const movieImage = document.createElement("img");
    const movieTitle = document.createElement("h2");
    const deleteBtn = document.createElement('button');

    movieImage.src = imageUrl.value;
    movieTitle.innerText = movieName.value;
    deleteBtn.innerText = "Delete";

    movieList.classList.add("movie-info");

    moviesList.appendChild(movieList);
    movieList.appendChild(moviesDiv);
    
    moviesDiv.appendChild(movieImage);
    moviesDiv.appendChild(movieTitle);
    moviesDiv.appendChild(deleteBtn);

    deleteBtn.onclick = () => movieList.remove()

})

removeAllMoviesBtn.addEventListener("click", () => {
  const allMOvies = document.querySelectorAll(".movie-info");
    allMOvies.forEach((movie) => {
        movie.remove();
    }); 
})
