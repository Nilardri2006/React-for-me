import React from 'react';
import { useEffect, useState } from 'react';
import Search from './components/Search.jsx'; // Added this line
import Spinner from './components/Spinner.jsx'; // Added this line
import MovieCard from './components/MovieCard.jsx'; // Added this line

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const fetchMovies = async () => {
    setIsloading(false);
    setErrorMessage('');
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error('Failed to fetch Movies');
      }
      const data = await response.json();
      if (!data.results || data.results.length === 0) {
        setErrorMessage('No movies found');
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);
    } catch (error) {
      console.log(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies.Please try again later.');
    } finally {
      setIsloading(true);
    }

  }
  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find
            <span className="text-gradient">Movies</span>
            You'll Enjoy without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>
          {isloading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>

          )}
        </section>
        <h1 className="text-white">{searchTerm}</h1>
      </div>
    </main>

  )

}

export default App
