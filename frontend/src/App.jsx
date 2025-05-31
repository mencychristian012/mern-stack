import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home/Home';
import Products from './pages/Products/products';
import Contact from './pages/Contacts/Contact';

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      {/* <h1>Hello World..!</h1> */}
    </>
  );
}

export default App;
