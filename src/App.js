import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Checkout from './Components/Checkout/Checkout';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import RequireAuth from './Hooks/RequireAuth';
import { createContext, useState } from 'react';

const PlanContext = createContext()

function App() {

  const [plan, setPlan] = useState([])
  return (
    <div>
      <PlanContext.Provider value={{plan, setPlan}}>
        <Header></Header>
          <Routes>
            <Route path='/' element={<Homepage></Homepage>}></Route>
            <Route path='/checkout' element={<RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>}></Route>
            <Route path='/signin' element={<Signin></Signin>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
          </Routes>
      </PlanContext.Provider>
    </div>
  );
}

export default App;
