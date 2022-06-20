import { useState } from 'react';

const MovieForm = ({submitHandler}) => {
    const [title, setTitle] = useState("");
    const [release, setRelease] = useState(getFormattedDate());
    const [actors, setActors] = useState("");
    const [earnings, setEarnings] = useState(0);

    function getFormattedDate() {
        let date = new Date(Date.now()).toLocaleDateString("en-GB").split("/");
        return `${date[2]}-${date[1]}-${date[0]}`;
    }

    const getNewMovie = () => {
        // ensures default actors are added from mongoose Schema if none provided
        // same for earnings, those 2 are not required in Schema
        // Q: what is the best way to do defaults?
        let newMovie = {
            title: title,
            releaseDate: release,
        }
        if (actors.length) {
            newMovie.actors = actors.split(",");
        }
        if (earnings) {
            newMovie.earnings = Number.parseInt(earnings, 10);
        }
        return newMovie;
    }
    
    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="title">Title: </label>
                <input
                    type="text" name="title" required={true}
                    value={title} onChange={(e) => setTitle(e.target.value)}
                    />
                <br/>
                <label htmlFor="release">Release: </label>
                <input
                    type="date" name="release" required={true}
                    value={release} onChange={(e) => setRelease(e.target.value)}
                    />
                <br/>
                <label htmlFor="actors">Actors (comma-separated): </label>
                <input
                    type="text" name="actors"
                    value={actors} onChange={(e) => setActors(e.target.value)}
                    />
                <br/>
                <label htmlFor="earnings">Earnings ($): </label>
                <input
                    type="number" name="earnings" min={0} max={Number.MAX_SAFE_INTEGER}
                    value={earnings} onChange={(e) => setEarnings(e.target.value)}
                    />
                <br/>
                <button>Submit</button>
            </form>
        </>
    );
}

export default MovieForm;
