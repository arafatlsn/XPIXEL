import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Checkout from './Components/Checkout/Checkout';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import RequireAuth from './Hooks/RequireAuth';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import Blog from './Components/Blogs/Blog';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';

export const PlanContext = createContext()

toast.configure()
function App() {

  const [ choosePlan, setPlan] = useState([])
  console.log(choosePlan)

  return (
    <div>
      <PlanContext.Provider value={{choosePlan, setPlan}}>
        <Header></Header>
          <Routes>
            <Route path='/' element={<Homepage></Homepage>}></Route>
            <Route path='/checkout' element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>}>
            </Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
            <Route path='/signin' element={<Signin></Signin>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
      </PlanContext.Provider>
    </div>
  );
}

export default App;
