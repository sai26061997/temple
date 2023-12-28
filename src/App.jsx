import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import { Homepage, Navbar,List } from './components';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Navbar/>
    <Homepage/>

  ``<List/>
    </div>

    </BrowserRouter>
  );
}

export default App;
  