import React, {createContext, useState, useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MovieReducer } from '../Components/Reducers/MovieReducer';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const [movies, dispatch] = useReducer(MovieReducer, []);

    return (
        <MovieContext.Provider value={{
            movies, dispatch
        }}>
            
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;