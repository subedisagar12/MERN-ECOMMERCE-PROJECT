import "./App.css";

// Package imports
import { Routes, Route } from "react-router-dom";

// Component import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ProductDetail from "./pages/ProductDetail";
import Homepage from "./pages/Homepage";
import CheckOut from "./components/CheckOut/CheckOut";
import OrderDetails from "./pages/OrderDetails";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import SearchResultPage from "./components/SearchResultPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchResultPage />}></Route>
        <Route path="/product/detail" element={<ProductDetail />} />
        <Route path="/order" element={<OrderDetails />} />
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/checkout" element = {<CheckOut></CheckOut>}></Route>
       </Routes>
      <Footer/>

        
    </>
  );
}

export default App;
