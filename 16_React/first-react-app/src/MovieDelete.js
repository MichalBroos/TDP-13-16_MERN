import axios from 'axios';

const MovieDelete = ({id, moviesStateSwitch, moviesStateSwitchSetter}) => {

    const deleteMovie = () => {
        console.log("Delete:", id);
        axios.delete(`http://localhost:3001/movies/delete/${id}`)
            .then(res => {
                console.log("Del res:", res);
                // getAll after delete
                setTimeout(() => {
                    console.log("in timeout");
                    moviesStateSwitchSetter(!moviesStateSwitch);
                }, 100);
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <button onClick={deleteMovie}>Delete</button>
        </>
    );
}

export default MovieDelete;
