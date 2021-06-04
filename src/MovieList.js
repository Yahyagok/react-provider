
import React, {useState, useContext} from 'react';

import {MovieContext} from './MovieContext'

import Movie from './Movie';



const MovieList = () => {
    const [movies,setMovies] = useContext(MovieContext)
    return (
        <div>
         
        {movies.map(movie => (
            <Movie name={movie.name} key={movie.id} price={movie.price} />
        ))}
         </div>
    )
}

export default MovieList;
