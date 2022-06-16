const Film = ({name, actors, release}) => {
    if (name) {
        return (
            <>
                <h3>{name}</h3>
                <p>Actors: {actors}</p>
                <p>Release: {release}</p>
            </>
        )
    } else {
        return <p>No such film found</p>;
    }
}

export default Film;
