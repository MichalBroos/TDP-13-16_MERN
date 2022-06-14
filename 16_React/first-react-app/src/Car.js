import {useState} from 'react';

const Car = () => {
    const [brand, setBrand] = useState("default brand");
    const [model, setModel] = useState("default model");
    const [colour, setColour] = useState("red");
    const [year, setYear] = useState("1999");

    return (
        <>
            <h1>Car details</h1>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Colour: {colour}</p>
            <p>Year: {year}</p>

            <h2>Change details w/o submitting</h2>
            <label htmlFor="brand">Brand: </label>
            <input
                type="text" name="brand"
                value={brand} onChange={(e) => setBrand(e.target.value)}
            />
            <br/>
            <label htmlFor="model">Model: </label>
            <input
                type="text" name="model"
                value={model} onChange={(e) => setModel(e.target.value)}
            />
            <br/>
            <label htmlFor="colour">Colour: </label>
            <input
                type="text" name="colour"
                value={colour} onChange={(e) => setColour(e.target.value)}
            />
            <br/>
            <label htmlFor="year">Year: </label>
            <input
                type="text" name="year"
                value={year} onChange={(e) => setYear(e.target.value)}
            />
        </>
    );
}

export default Car;
