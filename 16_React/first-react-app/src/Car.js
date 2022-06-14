import {useState} from 'react';

const Car = () => {
    const [brand, setBrand] = useState("default brand");
    const [model, setModel] = useState("default model");
    const [colour, setColour] = useState("red");
    const [year, setYear] = useState("1999");

    const updateDetails = (e) => {
        let value = e.target.value;
        if (!value) {
            value = "N/A";
        }
        switch (e.target.name) {
            case "brand":
                setBrand(value);
                break;
            case "model":
                setModel(value)
                break;
            case "colour":
                setColour(value)
                break;
            case "year":
                setYear(value)
                break;
            default:
                console.log("switch error");
        }
    }

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
                value={brand === "N/A" ? "" : brand} onChange={updateDetails}
            />
            <br/>
            <label htmlFor="model">Model: </label>
            <input
                type="text" name="model"
                value={model === "N/A" ? "" : model} onChange={updateDetails}
            />
            <br/>
            <label htmlFor="colour">Colour: </label>
            <input
                type="text" name="colour"
                value={colour === "N/A" ? "" : colour} onChange={updateDetails}
            />
            <br/>
            <label htmlFor="year">Year: </label>
            <input
                type="text" name="year"
                value={year === "N/A" ? "" : year} onChange={updateDetails}
            />
        </>
    );
}

export default Car;
