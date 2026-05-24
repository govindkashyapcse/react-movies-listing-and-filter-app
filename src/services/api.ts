
export const getMoviesList = async ()=>{
    const result = await fetch(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=man`)
    const data = await result.json()
    return data
}

export const getMovieById = async (movieId: string)=>{
    const result = await fetch(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${movieId}`)
    const data = await result.json()
    return data
}