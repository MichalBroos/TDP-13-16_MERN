const Person = ({name, street, city}) => {
    return (
        <>
            <h3>{name}</h3>
            <p>{street}</p>
            <p>{city}</p>
        </>
    );
}

export default Person;
