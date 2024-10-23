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
import { ShopContextProvider } from './context/shop-context';
import FreeItem from './components/Freestyle/FreeItem';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/apple' element={<Apple/>}/>
          <Route path='/wears' element={<Wears/>}/>
          <Route path='/samsung' element={<Samsung/>}/> 
          <Route path='/freeItem' element={<FreeItem/>}/> 
          
        </Routes>
        <Footer/>
      </Router>
      </ShopContextProvider>
    </div>
  );
}


export default App;
