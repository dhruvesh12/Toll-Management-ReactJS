
import './App.css';
import Main from './component/main';
import { Routes, Route } from "react-router-dom"
import AddEntry from './component/dialogBox/addEntry';
import AddToll from './component/dialogBox/addToll';
import TollList from './component/tollList';


function App() {
  return (
    <div className="App">
        
      
        <Routes>
        <Route path="/" element={ <Main/> } />
        <Route path="/tolllist" element={ <TollList/> } />
        <Route path="/addentry" element={ <AddEntry/> } />
        <Route path="/addtoll" element={ <AddToll/> } />
      </Routes>
    </div>
  );
}

export default App;
