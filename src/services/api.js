const keyapi = "5452698ed9261e8060207693410f2318";
const url = 'https://api.themoviedb.org/3';

export const getPopMovies = async () => {
    const res = await fetch(`${url}/movie/popular?api_key=${keyapi}&language=en-US&page=1`);
    const data = await res.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const res = await fetch(`${url}/search/movie?api_key=${keyapi}&language=en-US&query=${query}&page=1&include_adult=true`);
    const data = await res.json();
    return data.results;
}