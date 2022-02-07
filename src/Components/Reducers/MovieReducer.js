import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const MovieReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_MOVIE':
            {
                return [
                    ...state,
                    {
                        name: action.movie.name,
                        director: action.movie.director,
                        id: uuidv4()
                    }
                ]
                break;
            }
        
        case 'REMOVE_MOVIE':
            {
                return state.filter(movie => movie.id !== action.id);
                break;
            }

        default:
            return state;
    }
} 