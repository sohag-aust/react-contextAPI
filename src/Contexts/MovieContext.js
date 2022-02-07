import React, {createContext, useState, useReducer, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MovieReducer } from '../Components/Reducers/MovieReducer';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
    const getMoviesFromLocalStorage = () => {
        const localData = localStorage.getItem('movies');
        return localData ? JSON.parse(localData) : [];
    };

    const [movies, dispatch] = useReducer(MovieReducer, [], getMoviesFromLocalStorage); /**  3rd parameter is optional, i here used it for getting localStorage data and set it in initial state */

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);

    return (
        <MovieContext.Provider value={{
            movies, dispatch
        }}>
            
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;