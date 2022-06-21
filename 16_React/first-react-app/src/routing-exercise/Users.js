import {Link} from 'react-router-dom';

const Users = () => {
    function getRandomInt(min=1, max=100) {
        // both inclusive
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const a = [1,2,3];

    return (
        <>
            <h1>Users page</h1>
            {a.map(num => (
                <div key={num}>
                    <Link to={`/Users/${getRandomInt()}`}>{`Random user ${num}`}</Link>
                    <br/>
                </div>))
            }
        </>
    );
}

export default Users;
