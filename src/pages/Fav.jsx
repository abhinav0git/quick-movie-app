import { useMovieContext } from "../contexts/MovieContext"
import MCard from "../components/MCard"


function Fav() {
    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        console.log("FavList have " + favorites.length + " movies")
        return (
            <>
                <h2>Your Fav are..</h2>
                <div className="movie-grid">
                    {favorites.map((movie) => (
                        <MCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </>
        )
    }
    return (
        <div className="fav-page">
            <h1>Add some Movies to the list</h1>
            <p>Empty!</p>
        </div>
    )
}

export default Fav