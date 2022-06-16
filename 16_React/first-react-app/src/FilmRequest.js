import { useState } from 'react';
import axios from 'axios';
import Film from './Film.js';

const FilmRequest = () => {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [films, setFilms] = useState();
    const [search, setSearch] = useState("");
    const [started, setStarted] = useState(false);

    const searchFilm = () => {
        if (!started) setStarted(true);
        // reset required to show Loading... before result is shown
        setLoaded(false);

        axios.get(`http://www.omdbapi.com/?apikey=[secret]&s=${search}`)
            .then(res => {
                setLoaded(true);
                setFilms(res.data.Search);
                console.log("res:", res);
                console.log("films:", res.data.Search);
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
                onKeyPress={e => e.key === "Enter" && searchFilm()}
            />
            <button onClick={searchFilm}>Search</button>
        </>
    );

    return (
        <>
            {topElements}
            {error ? <div>Error: {error.message}</div>
                   : (!loaded ? (started ? <p>Loading...</p> : <p>Start your search...</p>)
                              : !films ? <p>No films found</p>
                                       : films.map(({imdbID, Title, Year}) => (
                                            <Film key={imdbID} name={Title} release={Year} id={imdbID}/>)))}
        </>
    );
}

export default FilmRequest;

// extension "showing x out of y results"
