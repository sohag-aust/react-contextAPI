import React, {useContext} from 'react';
import { MovieContext } from '../../Contexts/MovieContext';

const MovieDetails = (props) => {
    const {movie} = props;
    const {removeMovie} = useContext(MovieContext);

    return (
        <li onClick={()=>removeMovie(movie.id)}>
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