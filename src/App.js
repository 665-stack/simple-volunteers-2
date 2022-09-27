import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Valunteers from './Components/Valunteers/Valunteers';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/valunteers' element={<Valunteers></Valunteers>}></Route>
      </Routes>
    </div>
  );
}

export default App;
