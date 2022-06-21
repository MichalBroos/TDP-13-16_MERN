// import Movie from "./Movie";

// import axios from "axios";
// import { useEffect, useState } from 'react';
import MovieAdd from "./MovieAdd";
import Movie from "./Movie";

// const MovieEdit = ({movie: {_id, title, releaseDate, actors, earnings}, moviesEditSwitch, moviesEditSwitchSetter}) => {
const MovieEdit = ({movie: {_id, title, releaseDate, actors, earnings}, moviesEditSwitchSetter}) => {
    // const [movie, setMovie] = useState();

    // const editMovie = () => {
    //     setEditing(!editing);
    // }
    // useEffect(() => {
    //     axios.get(`http://localhost:3001/movies/getbyid/${id}`)
    //         .then(res => {
    //             setMovie(res.data);
    //             console.log("res:", res.data);
    //             console.log("movie:", movie);
    //             console.log("id:", id, "type:", typeof id);
    //         })
    //         .catch(err => console.log(err));
    // }, []);

    return (
        <>
            <h1>Editing</h1>
            <Movie id={_id} title={title} releaseDate={releaseDate}
                            actors={actors} earnings={earnings}/>
            <MovieAdd edit={[true, _id]} moviesStateSwitchSetter={moviesEditSwitchSetter}/>
        </>
    );
}

export default MovieEdit;
