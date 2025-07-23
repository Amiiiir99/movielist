import React from "react";

const Filter = ({titlefFilter, setTitleFilter, ratingFilter, setRatingFilter}) => {

    return (
        <div>
            <input type="text" 
                    placeholder="search by title"
                    className="p-2 border rounded"
                    value={titlefFilter}
                    onChange={(e) => setTitleFilter(e.target.value)}
            />

            <input type="text"
                    placeholder="minimum rating"
                    className="p-2 border rounded"
                    value={ratingFilter}
                    onChange={(e) => setRatingFilter(e.target.value)}
                    min="0"
                    max="5"
            />
        </div>
    )
}

export default Filter