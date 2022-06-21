import {Link} from 'react-router-dom';

const Nav = () => {
    const style = {
        padding: "5px"
    };

    return (
        <>
            <Link to="/" style={style}>Home</Link>
            <Link to="/Contact" style={style}>Contact</Link>
            <Link to="/Users" style={style}>Users</Link>
        </>
    );
}

export default Nav;
