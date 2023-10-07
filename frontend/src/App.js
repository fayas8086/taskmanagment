
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Edit from './Components/Edit';
import Add from './Components/Add';
import Home from './Components/Home'
function App() {
  return (
    <div className="App">
  <Routes>
  <Route path='/' element={<Home/>}></Route>
    <Route path='/add' element={<Add/>}></Route>
    <Route path='/edit/:id' element={<Edit/>}></Route>

  </Routes>
    </div>
  );
}

export default App;
