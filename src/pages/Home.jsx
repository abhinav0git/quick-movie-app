import MCard from "../components/MCard";
import { useState, useEffect } from 'react';
import { getPopMovies, searchMovies } from '../services/api';


function Home() {

    const [searchQ, setSearchQ] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const popMov = async () => {
            try {
                const movies = await getPopMovies();
                setMovies(movies);
            }
            catch (err) {
                console.log(row.err);
                setError("Failed to load movies.." + err);
            }
            finally {
                setLoading(false);
            }
        }

        popMov();
    }, []);
    // const movies = [
    //     { id: 1, title: "The Shawshank Redemption", release: "1994" },
    //     { id: 2, title: "The Godfather", release: "1972" },
    //     { id: 3, title: "The Dark Knight", release: "2008" },
    //     { id: 4, title: "12 Angry", release: "1957" }
    // ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!searchQ.trim()) return;
        if (loading) return;

        setLoading(true);
        try {
            const searchResMovies = await searchMovies(searchQ);
            setMovies(searchResMovies);
            setError(null);
        }
        catch (err) {
            console.log(err);
            setError("Failed to load movies.." + err);
        }
        finally {
            setLoading(false);
        }

        setSearchQ("");
    };

    return (<div className="Home">
        <form onSubmit={handleSubmit} className="search-form">
            <input
                type="text"
                placeholder="Search any movie..."
                className="search-bar"
                value={searchQ}
                onChange={(e) => setSearchQ(e.target.value)}
            />
            <button type="submit">
                Search
            </button>
        </form>
        {error && <h1>{error}</h1>}
        {
            loading ? (<h1>Loading...</h1>) :
                (<div className="movie-grid">
                    <h1>Today's Popular Movies</h1>
                    {movies.map((mm) => (
                        // mm.title.toLowerCase().includes(searchQ.toLowerCase()) &&
                        <MCard movie={mm} key={mm.id} />
                    ))}
                </div>)
        }
    </div>)
}

export default Home