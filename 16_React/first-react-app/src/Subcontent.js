import data from './sampleData.json'
import Person from './Person.js'

const Subcontent = () => {
    return (
        <div>
            {data.map(({id, name, address: {street, city}}) => (
                <Person key={id} name={name} street={street} city={city}/>
            ))}
        </div>
    );
}

export default Subcontent;
