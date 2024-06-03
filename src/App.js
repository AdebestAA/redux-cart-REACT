import {useDispatch,useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";


// const url = "https://fakestoreapi.com/products"


function App() {

  return (
  <>
    <Navbar/>
   <Routes>
<Route path="/" element={ <Home/>}/>
<Route path="/cart" element={ <Cart/>}/>
  </Routes>
  </>
  );
}

export default App;
