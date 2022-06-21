import {Link} from 'react-router-dom';

const MoviesNav = () => {
    const style = {
        padding: "5px"
    };

    return (
        <>
            {/* awful hackfix but probably the only solution in the current (pre-Routing) design of using state for edit
            w/o forceUpdate click on getAll when editing does nothing because edit state does not change and I can't see
            a way of passing it unless complicating things further, e.g. MoviesNav in each component or edit state in
            common parent which would have to be App and prop pass down*/}
            <Link onClick={() => this.forceUpdate()} to="/" style={style}>getAll</Link>
            <Link to="/add" style={style}>add</Link>
            <Link to="/getbyid" style={style}>getById</Link>
        </>
    );
}

export default MoviesNav;
