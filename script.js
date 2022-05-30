const container = document.querySelector(".movie-list-container")




function getMovieData(link) {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=6af57a5cf47289dd6788043a2cc7d90d&language=en-US&page=1")
        .then((response) => response.json())
        .then((data) => {
            movieData = data.results
            movieData.forEach(item => {
                const title = item.title
                const id = item.id;
                const overview = item.overview
                const image = item.backdrop_path

                const newMovie = document.createElement("div")
                document.body.appendChild(newMovie)

                const movieImg = document.createElement("img")
                movieImg.src = `https://www.themoviedb.org/t/p/w220_and_h330_face/${image}`
                newMovie.appendChild(movieImg)

                let newMovieTitle = document.createElement("li")
                newMovieTitle.innerHTML = `${title}`
                newMovie.appendChild(newMovieTitle)

                let newMovieOverview = document.createElement("p")
                newMovieOverview.innerHTML = `${overview}`
                newMovie.appendChild(newMovieOverview)

                let checkBtn = document.createElement("input")
                checkBtn.type = "checkbox"
                let label = document.createElement("label")
                // label.innerHTML = "Already Seen"

                newMovie.appendChild(checkBtn)
                label.appendChild(document.createTextNode("Already Seen"))
                newMovie.appendChild(label)
                // document.newMovie.appendChild(newMovieTitle)

            })

        })


}


// function loadMovie(id) {
//     let allMovies = getMovieData("https://api.themoviedb.org/3/movie/now_playing?api_key=6af57a5cf47289dd6788043a2cc7d90d&language=en-US&page=1");

// }

