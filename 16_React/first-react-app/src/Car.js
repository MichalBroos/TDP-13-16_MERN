import {useState} from 'react';

const Car = () => {
    const [brand, setBrand] = useState("default brand");
    const [model, setModel] = useState("default model");
    const [colour, setColour] = useState("red");
    const [year, setYear] = useState("1999");

    const noValue = "N/A";

    return (
        <>
            <h1>Car details</h1>
            <p>Brand: {!brand ? noValue : brand}</p>
            <p>Model: {!model ? noValue : model}</p>
            <p>Colour: {!colour ? noValue : colour}</p>
            <p>Year: {!year ? noValue : year}</p>

            <h2>Change details w/o submitting</h2>
            <label htmlFor="brand">Brand: </label>
            <input
                type="text" name="brand"
                value={!brand ? "" : brand} onChange={(e) => setBrand(e.target.value)}
            />
            <br/>
            <label htmlFor="model">Model: </label>
            <input
                type="text" name="model"
                value={!model ? "" : model} onChange={(e) => setModel(e.target.value)}
            />
            <br/>
            <label htmlFor="colour">Colour: </label>
            <input
                type="text" name="colour"
                value={!colour ? "" : colour} onChange={(e) => setColour(e.target.value)}
            />
            <br/>
            <label htmlFor="year">Year: </label>
            <input
                type="text" name="year"
                value={!year ? "" : year} onChange={(e) => setYear(e.target.value)}
            />
        </>
    );
}

export default Car;
