import React from "react";

const AddMovieModal = ({ isOpen, onClose, onSubmit, movieData, setMovieData}) => {

    if (!isOpen) return null

    const handleChange = (e) => {
        const {name, value} = e.target
        setMovieData({...movieData, [name]:value})
    }

    const handleSubmit = () => {
        if(!movieData.title || !movieData.posterURL || !movieData.rating){
            alert('title, poster url, and rating are required')
            return
        }

        onSubmit()
        onClose()
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <h2 className="text-2xl font-bold mb-4">Add New Movie</h2>

            <input
              type="text"
              name="title"
              placeholder="Title"
              className="w-full p-2 border mb-2 rounded"
              value={movieData.title}
              onChange={handleChange}
            />

            <input
              type="text"
              name="description"
              placeholder="Description"
              className="w-full p-2 border mb-2 rounded"
              value={movieData.description}
              onChange={handleChange}
            />

            <input
              type="text"
              name="posterURL"
              placeholder="Poster URL"
              className="w-full p-2 border mb-2 rounded"
              value={movieData.posterURL}
              onChange={handleChange}
            />

            <input
              type="number"
              name="rating"
              placeholder="Rating (0–10)"
              className="w-full p-2 border mb-4 rounded"
              value={movieData.rating}
              onChange={handleChange}
              min="0"
              max="10"
            />

            <div className="flex justify-end gap-4">
              <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                Cancel
              </button>
              <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Add
              </button>
            </div>
          </div>
        </div>
    )
}

export default AddMovieModal