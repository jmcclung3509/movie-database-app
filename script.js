const container = document.querySelector(".movie-list-container")
let starClicked = 0




function getMovieData() {
    container.innerHTML = ""
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=6af57a5cf47289dd6788043a2cc7d90d&language=en-US&page=1")
        // fetch("https://api.themoviedb.org/3/discover/movie?api_key=6af57a5cf47289dd6788043a2cc7d90d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
        .then((response) => response.json())
        .then((data) => {
            // let allMovies = data
            // console.log(allMovies)
            let allMovieData = data.results
            shuffle(allMovieData)

            let movieData = allMovieData.slice(0, 4);
            console.log(movieData)
            movieData.forEach(item => {
                console.log(item)
                const title = item.title
                const id = item.id;
                const overview = item.overview
                const image = item.backdrop_path
                const releaseDate = item.release_date
                const genreArray = item.genre_ids
                let isKidFriendly = false
                const genre = genreArray.forEach((item) => {

                    if (item === 10751) {
                        isKidFriendly = true

                    }
                })


                const newMovie = document.createElement("div")
                container.appendChild(newMovie)
                newMovie.classList.add("newMovie")


                const movieImg = document.createElement("img")
                movieImg.src = `https://www.themoviedb.org/t/p/w220_and_h330_face/${image}`
                newMovie.appendChild(movieImg)
                movieImg.classList.add("image")
                movieImg.onclick = () => {
                    showData()
                }
                let movieDataContainer = document.createElement("div")
                movieDataContainer.classList.add("hide")
                movieDataContainer.classList.add("data-container")
                newMovie.appendChild(movieDataContainer)

                let newMovieTitle = document.createElement("h3")
                newMovieTitle.innerHTML = `${title}`
                movieDataContainer.appendChild(newMovieTitle)

                let newMovieDate = document.createElement("h5")
                let newDate = item.release_date.split("-")
                let dateArray = []
                for (let i = 0; i < 1; i++) {
                    let year = newDate[0]
                    let month = newDate[2]
                    let day = newDate[1]
                    dateArray.push(day + "-" + month + "-" + year)


                }
                newMovieDate.innerHTML = dateArray
                newMovieDate.classList.add("date")
                movieDataContainer.appendChild(newMovieDate)

                if (isKidFriendly) {
                    let kidFriendly = document.createElement("p")
                    kidFriendly.classList.add("kid-friendly")
                    kidFriendly.innerHTML = "Kid Friendly"
                    movieDataContainer.appendChild(kidFriendly)
                }

                let newMovieOverview = document.createElement("p")
                newMovieOverview.innerHTML = `${overview}`
                movieDataContainer.appendChild(newMovieOverview)
                newMovieOverview.classList.add("paragraph")





                let checkboxContainer = document.createElement("div")
                movieDataContainer.appendChild(checkboxContainer)
                checkboxContainer.classList.add("checkbox-container")

                let checkBtn = document.createElement("input")
                checkBtn.type = "checkbox"

                checkBtn.onclick = () => {
                    if (starContainer.classList.contains("hide1")) {
                        starContainer.classList.remove("hide1")
                        starContainer.classList.add("show")
                    } else {
                        starContainer.classList.remove("show")
                        starContainer.classList.add("hide1")
                    }
                }

                let label = document.createElement("label")
                checkboxContainer.appendChild(checkBtn)
                label.appendChild(document.createTextNode("Already Seen"))
                checkboxContainer.appendChild(label)

                let starContainer = document.createElement("div")
                checkboxContainer.appendChild(starContainer)
                starContainer.classList.add("hide1")


                let star1 = document.createElement("input")
                star1.type = "checkbox"
                star1.classList.add("star-check")
                starContainer.appendChild(star1)

                let star2 = document.createElement("input")
                star2.type = "checkbox"
                starContainer.appendChild(star2)
                star2.classList.add("star-check")



                let star3 = document.createElement("input")
                star3.type = "checkbox"
                starContainer.appendChild(star3)
                star3.classList.add("star-check")

                let star4 = document.createElement("input")
                star4.type = "checkbox"
                starContainer.appendChild(star4)
                star4.classList.add("star-check")

                let star5 = document.createElement("input")
                star5.type = "checkbox"
                starContainer.appendChild(star5)
                star5.classList.add("star-check")



                star1.onclick = () => {
                    if (!star1.checked) {
                        console.log("clicked")
                        star1.checked = false
                        starClicked--
                        // rating.innerText = "0/5"
                    } else {
                        star1.checked = true;
                        starClicked++
                        // rating.innerHTML = "1/1"
                    }
                    getRating()

                }


                star2.onclick = () => {
                    if (!star2.checked) {
                        console.log("clicked")
                        star2.checked = false
                        starClicked--
                    } else if (starClicked < 2) {
                        starClicked = 2
                        star2.checked = true
                        star1.checked = true

                    } else {
                        star2.checked = true;
                        star1.checked = true
                        starClicked++
                    }
                    getRating()

                }


                star3.onclick = () => {
                    if (!star3.checked) {
                        console.log("clicked")
                        star3.checked = false
                        starClicked--
                    } else if (starClicked < 3) {
                        starClicked = 3
                        star3.checked = true
                        star2.checked = true
                        star1.checked = true

                    } else {
                        star3.checked = true;
                        star2.checked = true;
                        star1.checked = true
                        starClicked++

                    }
                    getRating()

                }



                star4.onclick = () => {
                    if (!star4.checked) {
                        star4.checked = false;
                        starClicked--
                    } else if (starClicked < 4) {
                        starClicked = 4
                        star4.checked = true
                        star3.checked = true
                        star2.checked = true
                        star1.checked = true

                    } else {
                        star4.checked = true
                        star3.checked = true
                        star2.checked = true
                        star1.checked = true
                        starClicked++
                    }
                    getRating()
                }


                star5.onclick = () => {
                    if (!star5.checked) {
                        star5.checked = false;
                        starClicked--
                    } else if (starClicked < 5) {
                        console.log("clicked")
                        star5.checked = true
                        star4.checked = true
                        star3.checked = true
                        star2.checked = true
                        star1.checked = true
                        starClicked = 5

                    } else {
                        star5.checked = true
                        star4.checked = true
                        star3.checked = true
                        star2.checked = true
                        star1.checked = true
                        starClicked++
                    }
                    getRating()
                }

                let rating = document.createElement("p")
                starContainer.appendChild(rating)
                rating.classList.add("rating")
                // rating.innerHTML = `${starClicked}/5`


                function getRating() {
                    rating.innerHTML = `${starClicked}/5`
                }
                function showData() {
                    if (movieDataContainer.classList.contains("hide")) {
                        movieDataContainer.classList.remove("hide")
                        movieDataContainer.classList.add("show")
                    } else {
                        movieDataContainer.classList.remove("show")
                        movieDataContainer.classList.add("hide")
                        hideStarContainer()


                    }
                }

                function hideStarContainer() {
                    checkboxContainer.classList.remove("show")
                    checkboxContainer.classList.add("hide1")
                }


            }
            )

        })



}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]]
    }
    return array
}


