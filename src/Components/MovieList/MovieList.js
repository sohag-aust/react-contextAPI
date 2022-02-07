import React, {useContext} from 'react';
import { MovieContext } from '../../Contexts/MovieContext';
import MovieDetails from '../MovieDetails/MovieDetails';

const MovieList = () => {
    const {movies} = useContext(MovieContext);

    console.log('movies: ', movies);

    return (
        <>
            {
                movies?.length ? <div className="movie-list">
                    <ul>
                        {
                            movies?.map(movie => <MovieDetails key={movie.id} movie={movie} />)
                        }
                    </ul>
                </div> : <div className="empty">
                    No movies to your choiceList rightNow
                </div>
            }
        </>
    );
};

export default MovieList;