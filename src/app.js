import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import ProductList from "./components/product/product-list.tsx";
import AddProduct from "./components/product/product-add.tsx";
import ProductPage, { HomePage } from "./components/product/product-main.tsx";

const App = () => {
  return (
    // <React.StrictMode>
    //   <ProductList />
    // </React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/products">
          <ProductPage />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;