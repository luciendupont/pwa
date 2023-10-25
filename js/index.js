const form=document.getElementById('searchForm')
const searchInput=document.getElementById('searchInput')
const result=document.getElementById('result')

let movie = [];
const fetchMovies = async () =>{
    movies = await fetch('https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=aee1558fbe974e9326940e4403845169').then((res)=> res.json());
console.log(movies);
}

fetchmovioes();