import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import { Homepage, Navbar,List, TeamComponent } from './components';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Navbar/>
    <Homepage/>
    <TeamComponent/>
  ``
    </div>

    </BrowserRouter>
  );
}

export default App;
  