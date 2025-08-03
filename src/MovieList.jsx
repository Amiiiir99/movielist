import React from "react";
import MovieCard from "./MovieCard";

function MovieList({movies, onAddClick}) {
    
    return(
    <div className="flex flex-wrap gap-6 p-4">
        {movies.map(movie => 
                <MovieCard key={movie.id} 
                            movie={movie}
                />)
        }

        <MovieCard isAddCard onAddClick={onAddClick}/>
    </div>
    )
}

export default MovieList