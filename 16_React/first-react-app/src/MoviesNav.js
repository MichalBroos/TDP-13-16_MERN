import {Link} from 'react-router-dom';

const MoviesNav = () => {
    const style = {
        padding: "5px"
    };

    return (
        <>
            <Link to="/" style={style}>getAll</Link>
            <Link to="/add" style={style}>add</Link>
            <Link to="/getbyid" style={style}>getById</Link>
        </>
    );
}

export default MoviesNav;
