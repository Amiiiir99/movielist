import React from "react";
import {useParams, Link, useLocation} from "react-router-dom"

const MovieDetails = () =>{
    const {id} = useParams()
    const location = useLocation()

    const movie = location.state?.movie || MovieList.find((m)=>m.id === id)

    if (!movie) return <div className="p-6">movie not found</div>
    
    return(
        <div className="text-3xl font-bold">
            <h1 className="m-5">{movie.title}</h1>
            <div className="m-5 bg-transparent border-4 border-blue-400 
                            w-56 h-72 rounded-3xl 
                            overflow-hidden relative">
                <img src={movie.posterURL} alt={movie.title} className="w-full h-full object-cover"/>

            </div>
            <p className="m-5">{movie.description}</p>
            <iframe 
                className="m-5" 
                src={movie.trailerLink} 
                title="Trailer" 
                frameBorder="0"
                allowFullScreen>
            </iframe>
            <Link to="/" className="m-5 text-sm text-blue-400">back to home</Link>
        </div>
    )
}

export default MovieDetails