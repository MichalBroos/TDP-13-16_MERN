import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Movie from './Movie';

const MovieGetById = () => {
    const [id, setId] = useState("");
    const [movie, setMovie] = useState(null);

    let navigate = useNavigate();

    const searchById = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:3001/movies/getbyid/${id}`)
            .then(res => {
                setMovie(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <h2>Search by id</h2>
            <form onSubmit={searchById}>
                <label htmlFor="id">Id: </label>
                <input
                    type="text" name="id" required={true}
                    value={id} onChange={(e) => setId(e.target.value)}
                />
                <br />
                <button>Submit</button>
                <button type="button" onClick={() => navigate("/")}>Cancel</button>
            </form>
            {movie
                ? <Movie id={movie._id} title={movie.title} releaseDate={movie.releaseDate}
                                        actors={movie.actors} earnings={movie.earnings}/>
                : <p>No movie with the given id found</p>}
        </>
    );
}

export default MovieGetById;
