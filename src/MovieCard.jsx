import React from "react";

export default function MovieCard({ movie1 }) {

    return
    (<div className='movie'>
        <div>
            <p>{movie1.Year}</p>
        </div>
        <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.title} />
        </div>
        <div>
            <span>{movie1.Title}</span>
            <h3>{movie1.title}</h3>
        </div>
    </div>
    );
}