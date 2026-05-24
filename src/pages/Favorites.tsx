import { useEffect, useState } from "react"
import MovieCard, { type Movie } from "../components/MovieCard"
import { useMovieContext } from "../contexts/MovieContext"
import { getMovieById } from "../services/api"

const Favorites = () => {
    const {favorites} = useMovieContext()
    const [movies, setMovies] = useState<Movie[]>([])
    
    useEffect(()=>{
      const fetchMovies = async () => {
      const results = await Promise.all(
        favorites.map(id => getMovieById(id))
          )
          setMovies(results)
        }
      if (favorites.length > 0) {
        fetchMovies()
      } else {
        setMovies([])
      }
    },[favorites])
    
  return (
    <div>
      <div style={{display: "grid", gridTemplateColumns: "auto auto auto auto"}}>
        {movies.map(movie =>
            <MovieCard movie={movie} key={movie.imdbID}/>
        )}
      </div> 
    </div>
  )
}

export default Favorites
