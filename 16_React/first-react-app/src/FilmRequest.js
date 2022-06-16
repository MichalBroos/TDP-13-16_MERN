import { useState, useEffect } from 'react';
import axios from 'axios';
import Film from './Film.js';

const FilmRequest = () => {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [film, setFilm] = useState();

    useEffect(() => {
        axios.get("http://www.omdbapi.com/?apikey=[secret]&t=harry")
            .then(res => {
                setLoaded(true);
                setFilm(res.data);
                console.log(res);
            },
                err => {
                    setLoaded(true);
                    setError(err);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!loaded) {
        return <div>Loading...</div>
    } else {
        return (
            <Film key={film.imdbID} name={film.Title} actors={film.Actors} release={film.Released}/>
        );
    }
}

export default FilmRequest;
