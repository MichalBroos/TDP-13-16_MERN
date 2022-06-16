const Film = ({name, release, id}) => {
    // structure changed because using ?s returns fewer details about each film
    return (
        <>
            <h3>{name}</h3>
            <p>Release: {release}</p>
            <p>ID: {id}</p>
        </>
    )
}

export default Film;
