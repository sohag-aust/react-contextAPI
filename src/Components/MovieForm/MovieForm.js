import React, {useContext, useState} from 'react';
import { MovieContext } from '../../Contexts/MovieContext';

const NewMovieForm = () => {
    const {movies, addMovie} = useContext(MovieContext);
    const [movieName, setMovieName] = useState('');
    const [directorName, setDirectorName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(movieName, directorName);

        addMovie(movieName, directorName);
        setMovieName('');
        setDirectorName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter movie name" value={movieName} onChange={(e)=>setMovieName(e.target.value)} />
            <input type="text" placeholder="Enter director name" value={directorName} onChange={(e)=>setDirectorName(e.target.value)} />
            <input type="submit" value="Add Movie" />
        </form>
    );
};

export default NewMovieForm;