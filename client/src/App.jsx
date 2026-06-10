import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {

  const user = false;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={user ? <Navigate to="/login"/> : <Register />}  />
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;