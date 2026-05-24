import React, { useContext, createContext, useState, type PropsWithChildren } from "react"

type MovieContextType = {
    favorites: string[],
    setFavorites?: React.Dispatch<React.SetStateAction<string[]>>
}
const MovieContext = createContext<MovieContextType>({favorites:[]})

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [favorites, setFavorites] = useState<string[]>([])
    
    return <MovieContext.Provider value={{favorites, setFavorites}}>
        {children}
    </MovieContext.Provider>
}
