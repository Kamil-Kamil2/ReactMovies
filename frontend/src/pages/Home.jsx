import MovieCard from "../Components/MovieCard";
import { useState, useEffect } from "react"
import {searchMovies, getPopularMovies} from "../Services/api"
import "../css/home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err){
                console.log(err)
                setError("Failed to load movies")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            setError("Failed to search movies...")
            console.error(err)
        } finally {
            setLoading(false)
        }

    };
    
    return <div className="home">
        <form onSubmit={handleSearch} className="searchForm">
            <input type="text" placeholder="Search for movies..." className="searchInput" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="searchButton">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? <div className="loading">Loading...</div> : <div className="moviesGrid">
            {movies.map(
                (movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                  )
                )}
        </div>}

        
    </div>
}

export default Home