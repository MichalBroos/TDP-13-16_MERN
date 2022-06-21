import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

const UserId = () => {
    // names must match when deconstructing, i.e. id parameter in App, id here
    // w/o deconstructing, const params = useParams(); then params = {id: 'val'}
    // if path="/Users/:id/:id2" in App, then params = {id: 'val1', id2: 'val2'}
    const {id} = useParams();
    return (
        <>
            <h1>UserId: {id}</h1>
            <Link to="/Users">Back to Users</Link>
        </>
    );
}

export default UserId;
