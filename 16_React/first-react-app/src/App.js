// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // nesting is okay because only 1 parent is returned (div)
    // <div>
    //   <Header/>
    //   <Footer/>
    // </div>
    // Fragment required because cannot return multiple (as in Footer.js)
    <>
      <Header/>
      <Footer/>
    </>
  );
}

export default App;
