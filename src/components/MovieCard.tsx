import { HeartIcon } from "lucide-react";
import { useMovieContext } from "../contexts/MovieContext"

export interface Movie {
  Title: string
  Year: string   // OMDb API returns Year as string
  imdbID: string
  Type: string
  Poster: string
}

export interface MovieCardProps {
  movie: Movie
}
const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
  const { favorites, setFavorites} = useMovieContext()
  const isFavorite = favorites.includes(movie.imdbID)
  const toggleFavs = ()=>{
    setFavorites?.(prev =>
      prev.includes(movie.imdbID)
        ? prev.filter(id => id !== movie.imdbID)
        : [...prev, movie.imdbID]
    )
  }
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div style={{position: "relative"}}>
        <img src={movie.Poster} alt={movie.Title} width={300}/>
        <span style={{position: "absolute", top: 10, zIndex: 23, left: 10}}>
          <HeartIcon color={isFavorite ? "red" : "gray"} onClick={()=> toggleFavs()}/>
          </span>
      </div>
      <h3>{movie.Title}</h3>
    </div>
  )
}

export default MovieCard
