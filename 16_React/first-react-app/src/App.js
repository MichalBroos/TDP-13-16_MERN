// import logo from './logo.svg';
import './App.css';
// import Header from './Header';
// import Footer from './Footer';
// import ComponentWithProps from './ComponentWithProps';
// import SaveCustomer from './SaveCustomer';
// import Car from './Car';
// import ProductTable from './ProductTable';
// import LoginControl from './LoginControl';
import Subcontent from './Subcontent';

function App() {
  return (
    // D1

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
    // <>
    //   <Header/>
    //   <Footer/>
    // </>

    // D2
    // <>
    //   <ComponentWithProps header="okay1" content="content1" number={1}/>
    //   {/* error because content uses PropTypes isRequired */}
    //   <ComponentWithProps header="error1" number={1}/>
    //   {/* okay, number not required */}
    //   <ComponentWithProps header="okay2" content="content2"/>
    //   {/* invalid prop type error */}
    //   <ComponentWithProps header="error2" content="content2" number="invalid type"/>
    //   <ComponentWithProps content="okay3" number={3}/>
    // </>

    // <SaveCustomer/>

    // <Car/>

    // <ProductTable products={JSON.stringify(
    //   [{id: 1, name: "prod1"}, {id: 2, name: "prod2"}, {id: 3, name: "differentProd3"}, {id: 4, name: "prod3dorp"}]
    // )}/>

    // D3
    // <LoginControl/>
    <Subcontent/>
  );
}

export default App;
