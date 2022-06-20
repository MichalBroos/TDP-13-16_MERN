const Movie = ({id, title, releaseDate, actors, earnings}) => {
    return (
        <>
            <h3>{title}</h3>
            <p>ID: {id}</p>
            <p>Release: {new Date(releaseDate).toLocaleDateString("en-GB")}</p>
            <p>Actors: {actors.join(", ")}</p>
            <p>Earnings: {earnings}</p>
        </>
    );
}

export default Movie;
