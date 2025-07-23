import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MovieCard from './MovieCard'
import MovieList from './MovieList'
import Filter from './Filter'

const App = () => {

  const [movies, setMovies] = useState ([
      {
          title: 'Minecraft',
          description: 'the minecraft movie',
          posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IPF0_k-c6i3b4REB1zAbce3aiOvUTrJfng&s',
          rating: '2'
      },
      {
          title: 'Scary Movie',
          description: 'the minecraft movie',
          posterURL: 'https://upload.wikimedia.org/wikipedia/en/2/29/Movie_poster_for_%22Scary_Movie%22.jpg',
          rating: '4'
      },
      {
          title: 'Aquaman',
          description: 'the minecraft movie',
          posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIl0vE09HM1flGc0EXYnG8h2OIylL5FsDzQ&s',
          rating: '2'
      },
      {
          title: 'Alien Romulus',
          description: 'the minecraft movie',
          posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxYLdEbXtBlcwmzxs7mMkQ1KPf8t2EMSJmw&s',
          rating: '3'
      }
  ])

  const [titlefFilter, setTitleFilter] = useState("")
  const [ratingFilter, setRatingFilter] = useState("")

  const handleAddMovie = () => {
    const newMovie = {
      title: "new movie",
      description: "new movies description",
      posterURL: "https://via.placeholder.com/300x400.png?text=New+Movie",
      rating: "5/5",
    };
    setMovies([...movies, newMovie])
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
      </div>
    </>
  )
}

export default App
