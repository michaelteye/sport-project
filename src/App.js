import "./App.css";
import Home from "./pages";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Product from "./pages/product";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
