import React, {createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [movies, setMovies] = useState([
        {name: 'The world War II', director: 'MR.X', id: uuidv4()},
        {name: 'The world War III', director: 'MR.Y', id: uuidv4()},
        {name: 'The world War IV', director: 'MR.Z', id: uuidv4()}
    ]);
    
    const addMovie = (name, director) => {
        setMovies([
            ...movies,
            {name: name, director: director, id: uuidv4()}
        ]);
    };

    const removeMovie = (id) => {
        const updatedMovies = movies?.filter(movie => movie.id !== id);
        setMovies(updatedMovies);
    }; 

    return (
        <MovieContext.Provider value={{
            movies, addMovie, removeMovie
        }}>
            
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;