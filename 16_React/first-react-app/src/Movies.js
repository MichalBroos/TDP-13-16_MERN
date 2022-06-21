import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie.js'
// import MovieAdd from './MovieAdd.js'
import MovieDelete from './MovieDelete.js';
import MovieEdit from './MovieEdit.js';

const Movies = () => {
    // uses /express_mongoose backend
    const [movies, setMovies] = useState([]);
    const [stateSwitch, setStateSwitch] = useState(false);
    const [editMovie, setEditMovie] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/movies/getall")
            .then(res => setMovies(res.data))
            .catch(err => console.log(err));
    }, [stateSwitch, editMovie]); // [stateSwitch] necessary for showing new data after MovieAdd
    // does this work as 1. call useEffect on load & 2. whenever stateSwitch changes?
    // yes, see 1.-3. in https://www.w3schools.com/react/react_useeffect.asp
    // + ? in https://reactjs.org/docs/hooks-effect.html#example-using-hooks
    // + https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

    if (editMovie) {
        return (
            <>
                {/* <MovieEdit movie={editMovie} moviesEditSwitch={editMovie} moviesEditSwitchSetter={setEditMovie}/> */}
                <MovieEdit movie={editMovie} moviesEditSwitchSetter={setEditMovie}/>
            </>
        );
    } else {
        return (
            <>
                <h1>Movies FE + BE</h1>
                {movies.length
                    ? movies.map(({_id, title, releaseDate, actors, earnings}) => (
                        <div key={_id}>
                            <Movie id={_id} title={title} releaseDate={releaseDate}
                                            actors={actors} earnings={earnings}/>
                            <button onClick={() => {
                                setEditMovie({_id, title, releaseDate, actors, earnings});
                            }}>Edit</button>
                            <MovieDelete id={_id} moviesStateSwitch={stateSwitch} moviesStateSwitchSetter={setStateSwitch}/>
                        </div>))
                    : <p>No movies in the database</p>
                }
                {/* <MovieAdd edit={[false, null]} moviesStateSwitch={stateSwitch} moviesStateSwitchSetter={setStateSwitch}/> */}
            </>
        );
    }
}

export default Movies;
