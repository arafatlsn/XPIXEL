import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
        </Routes>
    </div>
  );
}

export default App;
