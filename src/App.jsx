import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
import Filter from './Filter'
import AddMovieModal from './AddMovieModal'
import MovieDetails from './MovieDetails'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {

  const [movies, setMovies] = useState ([
    {
        id:'1',
        title: 'Minecraft',
        description: 'the minecraft movie',
        posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IPF0_k-c6i3b4REB1zAbce3aiOvUTrJfng&s',
        trailerLink: "https://www.youtube.com/embed/wJO_vIDZn-I", 
        rating: '2'
    },
    {
        id:'2',
        title: 'Scary Movie',
        description: 'the minecraft movie',
        posterURL: 'https://upload.wikimedia.org/wikipedia/en/2/29/Movie_poster_for_%22Scary_Movie%22.jpg',
        trailerLink: "https://www.youtube.com/embed/wJO_vIDZn-I", 
        
        rating: '4'
    },
    {
      id:'3',
        title: 'Aquaman',
        description: 'the minecraft movie',
        posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIl0vE09HM1flGc0EXYnG8h2OIylL5FsDzQ&s',
        trailerLink: "https://www.youtube.com/embed/wJO_vIDZn-I",
        rating: '2'
    },
    {
      id:'4',
        title: 'Alien Romulus',
        description: 'the minecraft movie',
        posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxYLdEbXtBlcwmzxs7mMkQ1KPf8t2EMSJmw&s',
        trailerLink: "https://www.youtube.com/embed/wJO_vIDZn-I", 
        
        rating: '3'
    }
])

  
  return(
    <>
      <Routes>
        <Route path="/" element={<Home movies={movies} setMovies={setMovies} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </>
  )
}

export default App
