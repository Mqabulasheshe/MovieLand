import { useEffect, useState } from 'react'
import './App.css'
import searchIcon from './search.svg'
//import MovieCard from './MovieCard.jsx';
//6756c2d5

const API_URL = 'http://www.omdbapi.com/?apikey=6756c2d5';
const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }


  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search '>
        <input
          placeholder='search for movies'
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) }}
        />
        <img
          src={searchIcon}
          alt='search'
          onClick={() => { searchMovie(searchTerm) }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <div className='movie' key={movie.imdbID}>
              <div>
                <p>{movie.Year}</p>
              </div>
              <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.title} />
              </div>
              <div>
                <span>{movie.Title}</span>
                <h3>{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>
  )

}

export default App
