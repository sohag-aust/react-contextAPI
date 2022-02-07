import React, {useContext} from 'react';
import { MovieContext } from '../../Contexts/MovieContext';

const MovieDetails = (props) => {
    const {movie} = props;
    const {dispatch} = useContext(MovieContext);

    const handleRemove = (movieId) => {
        dispatch({
            type: 'REMOVE_MOVIE',
            id: movieId
        });
    }

    return (
        <li onClick={()=>handleRemove(movie.id)}>
            <div className="name">
                {movie.name}
            </div>
            <div className="director">
                {movie.director}
            </div>
        </li>
    );
};

export default MovieDetails;