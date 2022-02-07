import React, {useContext} from 'react';
import { MovieContext } from '../../Contexts/MovieContext';

const Navbar3 = () => {
    const movieContext = useContext(MovieContext);
    const {movies} = movieContext;

    return (
        <div className="navbar">
            <h1>Top Movies</h1>
            <p>Currently there are top # {movies.length} # movies in your choiceList</p>
        </div>
    );
};

export default Navbar3;