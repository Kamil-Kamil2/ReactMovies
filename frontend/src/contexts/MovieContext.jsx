import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  // Initialize state directly from localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const storedFavs = localStorage.getItem("favorites");
      if (storedFavs) {
        const parsedFavs = JSON.parse(storedFavs);

        return parsedFavs; // Return the parsed data as initial state
      }
    } catch (error) {

      // Optionally clear bad data
      localStorage.removeItem("favorites");
    }

    return []; // Default to empty array if nothing found or error
  });

  // This useEffect will now ONLY run when favorites *actually* change from user actions
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]); // Runs whenever 'favorites' state changes (after init)

  // ... (rest of your functions: addToFavorites, removeFavorites, isFavorite, value, return statement)
  const addToFavorites = (movie) => {
    setFavorites((prev) => {
      if (!prev.some((favMovie) => favMovie.id === movie.id)) {
        const newFavs = [...prev, movie];
        return newFavs;
      }
      return prev;
    });
  };

  const removeFavorites = (movieId) => {
    setFavorites((prev) => {
      const newFavs = prev.filter((movie) => movie.id !== movieId);
      return newFavs;
    });
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = { favorites, addToFavorites, removeFavorites, isFavorite };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};