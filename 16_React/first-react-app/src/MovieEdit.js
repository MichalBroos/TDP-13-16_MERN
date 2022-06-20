// import Movie from "./Movie";

import axios from "axios";
import { useEffect, useState } from 'react';
import MovieAdd from "./MovieAdd";
// import Movie from "./Movie";

const MovieEdit = ({id, editing, setEditing}) => {
    const [movie, setMovie] = useState();

    // const editMovie = () => {
    //     setEditing(!editing);
    // }
    useEffect(() => {
        axios.get(`http://localhost:3001/movies/getbyid/${id}`)
            .then(res => {
                setMovie(res.data);
                console.log("res:", res.data);
                console.log("movie:", movie);
                console.log("id:", id, "type:", typeof id);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <h1>Editing</h1>
            {/* <Movie id={id} title={movie.title} releaseDate={movie.releaseDate}
                            actors={movie.actors} earnings={movie.earnings}/> */}
            <p>ID: {id}</p>
            <MovieAdd/>
        </>
    );
}

export default MovieEdit;
