import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar}  from './components/navbar';
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
// import {Header} from './components/header';
import {Home} from './pages/home';
import {Login} from './pages/login/login';
import { SignUp } from './pages/signUp';
import { Footer } from './components/footer';
import { Apple } from './pages/items/Apple/apple';
import Wears from './pages/Wears/wears';
import Samsung from './pages/Samsung/samsung';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        {/* <Header/> */}
        <Routes>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/apple' element={<Apple/>}/>
          <Route path='/wears' element={<Wears/>}/>
          <Route path='/samsung' element={<Samsung/>}/> 
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}


export default App;
