import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';
import { Element } from './components/Element/Element';
import { Footer } from './components/Footer_Navbar/Footer';
import { Home } from './components/Home/Home';
import { Login } from './components/Login_SignUp/Login_SignUp';
import { Navbar } from './components/Footer_Navbar/Navbar';
import { Products } from './components/Products/Products';
import { Search } from './components/Search/Search';

// Routes for navigation to different pages. 
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/element/:id' element={<Element/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
