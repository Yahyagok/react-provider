import React, {useContext} from 'react';

import {MovieContext} from './MovieContext'



const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>
            <h3>Yahya  </h3>
            <h3>List of Movies: {movies.length}  </h3>
         </div>
    )
}

export default Nav;