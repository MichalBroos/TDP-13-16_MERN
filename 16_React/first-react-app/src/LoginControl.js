import {useState} from 'react';

const LoginControl = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    let headerText, buttonText;
    if (!loggedIn) {
        headerText = "Please sign in";
        buttonText = "Log in";
    } else {
        headerText = "Welcome back!";
        buttonText = "Log out";
    }

    return (
        <>
            <h1>{headerText}</h1>
            <button onClick={() => setLoggedIn(!loggedIn)}>{buttonText}</button>
        </>
    );
}

export default LoginControl;
