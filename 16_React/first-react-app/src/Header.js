import logo from './logo.svg';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm">
                <a
                className="navbar-brand"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <img src={logo} alt="Logo of React" width="100"/>
                </a>
                <a
                className="navbar-brand"
                href="/"
                >
                    Todo App
                </a>
            </nav>
        </header>
    );
}

export default Header;
