import { useMovieContext } from "../contexts/MovieContext";

function MCard({ movie }) {
    const { isFavorite, addToFav, removeFav } = useMovieContext();
    const fav = isFavorite(movie.id);

    function favBtnClicked(e) {
        e.preventDefault();
        if (fav) {
            removeFav(movie.id);
            console.log(movie.title + "(" + movie.id + ")" + " removed from fav");
        }
        else {
            addToFav(movie);
            console.log(movie.title + "(" + movie.id + ")" + " added to fav");
        }

    }
    return (
        <div className="mcard">
            <div className="movie-info">
                <h3>{movie.title}
                    <button className={`favBtn ${fav ? "active" : ""}`} onClick={favBtnClicked}>💟</button>
                </h3>
                <div className="poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                </div>
                <p>{movie.release}</p>
            </div>
        </div>
    )
}

export default MCard