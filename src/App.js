
import './App.css';
import { Routes, Route } from "react-router-dom" 
 import HeaderF from './components/HeaderF';
  
 
 import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Mounting from './components/Mounting';
import Updating from './components/Updating';
import UnMounting from './components/UnMounting';

 
function App() {
  return (
  
    <div className="App">
      
      <HeaderF/>
        
       <Routes>
        
        <Route path="/mounting" element={ <Mounting/> } />
        <Route path="/updating" element={ <Updating/> } />
        <Route path="/unmounting" element={ <UnMounting/> } />
       
      </Routes> 
    </div>
    
  );
}

export default App;
