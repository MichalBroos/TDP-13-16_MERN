import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie.js'

const Movies = () => {
    // uses /express_mongoose backend
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/movies/getall")
            .then(res => setMovies(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <h1>Movies FE + BE</h1>
            {movies.length
                ? movies.map(({_id, title, releaseDate, actors, earnings}) => (
                    <Movie key={_id} title={title} releaseDate={releaseDate}
                                     actors={actors} earnings={earnings}/>))
                : <p>No movies in the database</p>
            }
        </>
    );
}

export default Movies;
