// MovieCard.js
import "../css/MovieCard.css"
import {useMovieContext} from "../contexts/MovieContext"

function MovieCard({movie}){
    const {isFavorite, addToFavorites, removeFavorites, favorites} = useMovieContext()
    
    function Favorite(e) {
        e.preventDefault();
        if (isFavorite(movie.id)) {
            removeFavorites(movie.id);
        } else {
            // Pass the entire movie object here
            addToFavorites(movie); 
        }
        console.log(favorites)
    }

    return (
    <div className="name">
        <div className="movieCard">
            <div className="moviePoster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div className="movieOverlay">
                    <button 
                        className={`${isFavorite(movie.id) ? "active" : "favoriteBtn"}`} 
                        onClick={Favorite}
                    >
                        ♥
                    </button>
                </div>
            </div>
            <div className="movieInfo">
                <h3>{movie.title}</h3>
                <p>{movie.release_date.split("-")[0]}</p>
            </div>
        </div>
    </div>
    )
}

export default MovieCard