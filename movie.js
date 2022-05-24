const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const formEl = document.querySelector("#form");
const idEl = document.getElementById("id-el");
const inputEl = document.getElementById("input");
const searchBtn = document.querySelector(".search-btn");
const main = document.getElementById("main");
const backTop = document.getElementById("back-top");



//NOTE: CONCENTRATE ON ..
// USE THE SAME FUNCTION. (GỌN)( nếu show ra cùng 1 vị trí)


// initially
getMovies(APIURL);
async function getMovies(url) { // 
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData.results)

    //C1 : forEach respData trước rồi execute showMovies
    // respData1.results.forEach( e => { 
    //     showMovies(e)
    // })

    // C2 : excecute (use forEach showMovies)
    showMovies(respData.results);
}

// NOT NEED TO HAVE, dùng same với function trên.
async function searchMovies(search) {
    const resp = await fetch(SEARCHAPI + search);
    const respData = await resp.json();
    // console.log(respData);
}
function showMovies(movies) {
    main.innerHTML = ""; // clear
    movies.forEach(movie => {
        // const{poster_path,title,vote_average} = movie;  C1
        const divEl2 = document.createElement("div");
        divEl2.classList.add("movie"); // must have 
        main.appendChild(divEl2);
        divEl2.innerHTML = `
    <img src="${IMGPATH + movie.poster_path}" >
    <div class="movie-info">
        <h3>${movie.title}</h3>
        <span class="${getClassByRate(movie.vote_average)}">${movie.vote_average}</span>
    </div>
    <div class="overview"><h3>Overview :</h3> ${movie.overview}</div>
    `
    })
}

function getClassByRate(vote) {
    if (vote >= 7) {
        return "green";
    }
    else if (vote >= 6) {
        return "orange";
    }
    else {
        return "red";
    }
}

searchBtn.addEventListener("click", () => {
    const searchMovie = inputEl.value;
    if (searchMovie) {
        getMovies(SEARCHAPI + searchMovie);
        inputEl.value = "";
    }
})
// input -> Enter
formEl.addEventListener("submit", e => {
    e.preventDefault();
    const searchMovie = inputEl.value;
    if (searchMovie) {
        getMovies(SEARCHAPI + searchMovie);
        inputEl.value = "";
    }
})
// back-top button
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backTop.style.opacity = "1";
    }
    else {
        backTop.style.opacity = "0";

    }
})
backTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
})



