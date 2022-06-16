import { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeInfo = () => {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://dummy.restapiexample.com/api/v1/employees")
            .then(res => {
                setLoaded(true);
                setItems(res.data.data);
            },
                // error checking here instead of .catch to avoid swallowing component bugs
                err => {
                    setLoaded(true);
                    setError(err);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!loaded) {
        return <div>Loading...</div>
    } else {
        return (
            <ul>
                {items.map(({id, employee_name: name}) => <li key={id}>{name}</li>)}
            </ul>
        );
    }
}

export default EmployeeInfo;
