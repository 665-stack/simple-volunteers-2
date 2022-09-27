import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Valunteers from './Components/Valunteers/Valunteers';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/volunteers' element={<Valunteers></Valunteers>}></Route>
      </Routes>
    </div>
  );
}

export default App;
