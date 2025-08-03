import React, {useState} from "react"
import MovieList from "./MovieList"
import Filter from "./Filter"
import AddMovieModal from "./AddMovieModal"


const Home = ({movies, setMovies}) => {
    
    
    
    const [titlefFilter, setTitleFilter] = useState("")
      const [ratingFilter, setRatingFilter] = useState("")
    
      const [showModal, setShowModal] = useState(false)
      const [newMovie, setNewMovie] = useState({
        title:"",
        description:"",
        posterURL:"",
        trailerLink:"",
        rating:"",
      })
    
      const handleAddMovie = () => setShowModal(true) 
      const handleCloseModal = () => {
        setShowModal(false)
        setNewMovie({title:"", description:"", posterURL:"", trailerLink:"", rating:""})
      }
    
      const handleSubmitMovie = () => {
        setMovies([...movies, {...newMovie, rating: Number(newMovie.rating)}])
      }
    
      const filteredMovies = movies.filter((movie) => {
        const matchesTitle = movie.title.toLowerCase().includes(titlefFilter.toLowerCase());
        const matchesRating = ratingFilter === "" || movie.rating >= Number(ratingFilter);
    
        return matchesTitle && matchesRating;
      })
    
      return (
        <>
          <div className='p-6'>
            <h1 className='text-3xl font-bold mb-4'>Movie List</h1>
            <Filter
              titlefFilter={titlefFilter}
              setTitleFilter={setTitleFilter}
              ratingFilter={ratingFilter}
              setRatingFilter={setRatingFilter}
            />
            <MovieList movies={filteredMovies} onAddClick={handleAddMovie}/>
    
            <AddMovieModal
              isOpen={showModal}
              onClose={handleCloseModal}
              onSubmit={handleSubmitMovie}
              movieData={newMovie}
              setMovieData={setNewMovie}
            />
          </div>
        </>
      )  
}

export default Home