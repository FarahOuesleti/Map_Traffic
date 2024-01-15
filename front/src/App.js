//import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;

import AddIncident from "./Components/AddIncident.component"
import RenderIncident from "./Components/RenderIncident.component"
import Result from "./Components/Result.component"

function App() {
  const redirectToInternalPage = () => {
    
    window.location.href = 'http://localhost:3000/mymapNew.html';
  };
  return (
    <Router>
      <div className="container">
    
      <a className='navbar-brand' href="http://localhost:3000/mymapNew.html" target="_blank"  rel="noreferrer">Visit Map</a> 
      
      <AddIncident />
      <RenderIncident />
  
      <a className='navbar-brand' href="http://localhost:3000/mymapNew.html" target="_blank"  rel="noreferrer">Visit Map</a> 
      </div>
    </Router>
  );
}

export default App;
