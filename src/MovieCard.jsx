import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({movie, isAddCard, onAddClick}) => {

    const navigate = useNavigate()

    if (isAddCard){

        return(
            <div onClick={onAddClick} 
            className="w-56 h-72 border-4 
                        border-dashed border-blue-400 
                        rounded-3xl flex flex-col items-center 
                        justify-center text-blue-400 
                        cursor-pointer bg-blank hover:bg-opacity-90 "
            >
                <div className="text-6xl">
                    +
                </div>
                <p className="mt-4 text-lg">
                    Add Movie
                </p>
            </div>
                
        )
    }

    return(
        <>

        <div onClick={() => navigate(`/movie/${movie.id}`, {state: {movie}})} className="cursor-pointer transform transition-transform duration-300 hover:scale-105">
        
            <div className="bg-transparent border-8 border-blue-400 
                            w-56 h-72 rounded-3xl 
                            overflow-hidden relative">
                <img src={movie.posterURL} alt={movie.title} className="w-full h-full object-cover"/>
                <div className="absolute bottom-0 w-full bg-white 
                                bg-opacity-80 text-center p-2">
                    <h1 className="text-xl">{movie.title}</h1>
                </div>
            </div>
        </div>

        
        </>

    )
    
}

export default MovieCard