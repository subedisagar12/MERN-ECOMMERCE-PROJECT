import "./App.css";

// Package imports
import { Routes, Route } from "react-router-dom";

// Component import

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ProductDetail from "./pages/ProductDetail";
import Homepage from "./pages/Homepage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderDetails from "./pages/OrderDetails";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/product/detail" element={<ProductDetail />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/order" element={<OrderDetails />} />

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
