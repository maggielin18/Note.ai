// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from '../components/NavBar.js';
import ToolBar from '../components/ToolBar.js';
import Note from '../components/Note';

function App() {
  return (
    <div className="App" >
        <NavBar/>
        <ToolBar/>
        <Note/>
    </div>
  );
}

export default App;
