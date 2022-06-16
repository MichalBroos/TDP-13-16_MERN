import { useState } from 'react';
import axios from 'axios';
import Film from './Film.js';

const FilmRequest = () => {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [film, setFilm] = useState();
    const [search, setSearch] = useState("");

    const searchFilm = () => {
        // reset required to show Loading... before result is shown
        setLoaded(false);

        axios.get(`http://www.omdbapi.com/?apikey=[secret]&t=${search}`)
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
    }

    const topElements = (
        <>
            <h1>Film search</h1>
            <input
                type="text" name="search"
                value={search} onChange={e => setSearch(e.target.value)}
            />
            <button onClick={searchFilm}>Search</button>
        </>
    );

    if (error) {
        return (
            <>
                {topElements}
                <div>Error: {error.message}</div>
            </>
        );
    } else if (!loaded) {
        return (
            <>
                {topElements}
                {film ? <p>Loading...</p> : <p>No results yet...</p>}
            </>
        );
    } else {
        return (
            <>
                {topElements}
                <Film key={film.imdbID} name={film.Title} actors={film.Actors} release={film.Released}/>
            </>
        );
    }
}

export default FilmRequest;
