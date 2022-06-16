const Film = ({name, actors, release}) => {
    return (
        <>
            <h3>{name}</h3>
            <p>Actors: {actors}</p>
            <p>Release: {release}</p>
        </>
    )
}

export default Film;
