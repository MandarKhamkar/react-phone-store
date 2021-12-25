import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/products/ProductList";
import Details from "./components/products/Details";
import Cart from "./components/cart/Cart";
import Modal from "./components/modal/Modal";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="wrapper">
          <div className="container">
            <Routes>
              <Route path="/details" element={<Details />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/products" element={<ProductList />}></Route>
              <Route path="/" element={<ProductList />}></Route>
            </Routes>
          </div>
        </div>
      </div>
      <Modal />
    </BrowserRouter>
  );
}

export default App;
