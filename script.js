const container = document.querySelector(".movie-list-container")
let starClicked = 0




function getMovieData() {
    container.innerHTML = ""
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=6af57a5cf47289dd6788043a2cc7d90d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
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



                const newMovie = document.createElement("div")
                container.appendChild(newMovie)
                newMovie.classList.add("newMovie")

                const movieImg = document.createElement("img")
                movieImg.src = `https://www.themoviedb.org/t/p/w220_and_h330_face/${image}`
                newMovie.appendChild(movieImg)
                movieImg.classList.add("image")

                let newMovieTitle = document.createElement("h3")
                newMovieTitle.innerHTML = `${title}`
                newMovie.appendChild(newMovieTitle)

                let newMovieDate = document.createElement("h5")
                let newDate = item.release_date.split("-")
                let dateArray = []
                for (let i = 0; i < 1; i++) {
                    let year = newDate[0]
                    let month = newDate[2]
                    let day = newDate[1]
                    dateArray.push(day + "-" + month + "-" + year)
                    console.log(dateArray)

                }

                newMovieDate.innerHTML = dateArray

                newMovie.appendChild(newMovieDate)

                let newMovieOverview = document.createElement("p")
                newMovieOverview.innerHTML = `${overview}`
                newMovie.appendChild(newMovieOverview)
                newMovieOverview.classList.add("paragraph")

                let checkboxContainer = document.createElement("div")
                newMovie.appendChild(checkboxContainer)
                checkboxContainer.classList.add("checkbox-container")

                let checkBtn = document.createElement("input")
                checkBtn.type = "checkbox"

                checkBtn.onclick = () => {
                    if (starContainer.classList.contains("hide")) {
                        starContainer.classList.remove("hide")
                        starContainer.classList.add("show")
                    } else {
                        starContainer.classList.remove("show")
                        starContainer.classList.add("show")
                    }
                }

                let label = document.createElement("label")
                checkboxContainer.appendChild(checkBtn)
                label.appendChild(document.createTextNode("Already Seen"))
                checkboxContainer.appendChild(label)

                let starContainer = document.createElement("div")
                checkboxContainer.appendChild(starContainer)
                starContainer.classList.add("hide")



                let star1 = document.createElement("input")
                star1.type = "checkbox"
                star1.classList.add("star-check")

                starContainer.appendChild(star1)
                star1.onclick = () => {
                    if (!star1.checked) {
                        console.log("clicked")
                        !star1.checked
                        rating.innerText = "0/5"
                        star1.classList.add(".star-check:checked:before")
                    }
                    star1.checked
                    rating.innerHTML
                        = "1/1"
                }

                let star2 = document.createElement("input")
                star2.type = "checkbox"
                starContainer.appendChild(star2)
                star2.classList.add("star-check")
                star2.onclick = () => {
                    if (star2.classList.contains("star-check:checked")) {
                        rating.innerHTML = "1/5"
                        !star2.checked
                    }
                    star1.checked = true
                    star2.checked = true

                    rating.innerHTML = "2/5"
                }

                let star3 = document.createElement("input")
                star3.type = "checkbox"
                starContainer.appendChild(star3)
                star3.classList.add("star-check")
                star3.onclick = () => {
                    if (star3.checked = true) {
                        star3.checked = false
                        // star2.classList.add("star-check:before")
                        rating.innerHTML = "2/5"
                    }
                    star1.checked = true
                    star2.checked = true
                    star3.checked = true
                    rating.innerHTML = "3/5"
                }

                let star4 = document.createElement("input")
                star4.type = "checkbox"
                starContainer.appendChild(star4)
                star4.classList.add("star-check")
                star4.onclick = () => {
                    if (star4.checked = true) {
                        star4.checked = false
                        // star2.classList.add("star-check:before")
                        rating.innerHTML = "3/5"
                    }
                    star1.checked = true
                    star2.checked = true
                    star3.checked = true
                    star4.checked = true
                    rating.innerHTML = "4/5"
                }
                let star5 = document.createElement("input")
                star5.type = "checkbox"
                starContainer.appendChild(star5)
                star5.classList.add("star-check")
                star5.onclick = () => {
                    if (star5.checked = true) {
                        star5.checked = false
                        // star2.classList.add("star-check:before")
                        rating.innerHTML = "4/5"
                    }
                    star5.checked = true
                    star1.checked = true
                    star2.checked = true
                    star3.checked = true
                    star4.checked = true

                    rating.innerHTML = "5/5"
                }

                let rating = document.createElement("p")
                rating.innerHTML = "0/5"
                rating.classList.add("rating")
                starContainer.appendChild(rating)




            })

        })

    // function getRating() {
    //     if (starContainer.classList.contains("hide")) {
    //         starContainer.classList.remove("hide")
    //         starContainer.classList.add("show")

    //     } else {
    //         starContainer.classList.remove("show")
    //         starContainer.classList.add("show")
    //     }
    // }

}

// function getRating() {
//     if (starContainer.classList.contains("hide")) {
//         starContainer.classList.remove("hide")
//         starContainer.classList.add("show")

//     } else {
//         starContainer.classList.remove("show")
//         starContainer.classList.add("show")
//     }

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


// function loadMovie(id) {
//     let allMovies = getMovieData("https://api.themoviedb.org/3/movie/now_playing?api_key=6af57a5cf47289dd6788043a2cc7d90d&language=en-US&page=1");

// }

