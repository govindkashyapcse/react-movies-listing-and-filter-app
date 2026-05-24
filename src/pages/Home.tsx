import { useEffect, useState } from "react"
import { useMovieContext } from "../contexts/MovieContext"
import {getMoviesList} from "../services/api"
import MovieCard from "../components/MovieCard"

const Home = () => {
    const {favorites} = useMovieContext()
    const [movies, setMovies] = useState([])
    const listMovies = async ()=>{
        const result = await getMoviesList()
        setMovies(result.Search)
    }
    useEffect(()=>{
        listMovies()
    },[])
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

export default Home
