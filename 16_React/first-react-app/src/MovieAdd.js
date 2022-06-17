import { useState } from 'react';
import axios from 'axios';

const MovieAdd = () => {
    const [title, setTitle] = useState("");
    const [release, setRelease] = useState(getFormattedDate());
    const [actors, setActors] = useState([]);
    const [earnings, setEarnings] = useState(0);

    function getFormattedDate() {
        let date = new Date(Date.now()).toLocaleDateString("en-GB").split("/");
        return `${date[2]}-${date[1]}-${date[0]}`;
    }

    const addMovie = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/movies/create");
        // TODO
    }
    return(
        <>
            <h2>Add a new movie</h2>
            <form onSubmit={addMovie}>
                <label htmlFor="title">Title: </label>
                <input
                    type="text" name="title"
                    value={title} onChange={(e) => setTitle(e.target.value)}
                    />
                <br/>
                <label htmlFor="release">Release: </label>
                <input
                    type="date" name="release"
                    value={release} onChange={(e) => setRelease(e.target.value)}
                    />
                <br/>
                <label htmlFor="actors">Actors (comma-separated): </label>
                <input
                    type="text" name="actors"
                    value={actors} onChange={(e) => setActors(e.target.value.split(","))}
                    />
                <br/>
                <label htmlFor="earnings">Earnings ($): </label>
                <input
                    type="number" name="earnings"
                    value={earnings} onChange={(e) => setEarnings(e.target.value)}
                    />
                <br/>
                <button>Submit</button>
            </form>
        </>
    );
}

export default MovieAdd;
