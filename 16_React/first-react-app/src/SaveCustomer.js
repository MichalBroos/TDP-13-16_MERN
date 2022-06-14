import {useState} from 'react';

const SaveCustomer = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const saveUser = (e) => {
        e.preventDefault();
        console.log(`Sign in: ${username}, ${password} (plaintext, oh yeah!)`);
    }

    return (
        <>
            <form onSubmit={saveUser}>
                {/*  htmlFor in React, not for https://stackoverflow.com/a/59924600 */}
                <label htmlFor="username">Username:</label>
                <input
                    type="text" name="username"
                    value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br/>
                <label htmlFor="password">Password:</label>
                <input
                    type="password" name="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <button>Sign in</button>
            </form>
        </>
    );
}

export default SaveCustomer;
