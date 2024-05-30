import React from "react";
import ProductList from "./product-list.tsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AddProduct from "./product-add.tsx";

export const HomePage = () => {
  return (
    <>
     <div>
      <Link to="/products" state={{ getby: 'product-list' }}>
        Product List
      </Link>
      <hr />
      <Link to="/products" state={{ getby: 'product-add' }}>
        Product Add
      </Link>
      </div>
    </>
  );
};

const ProductPage = () => {
    let { state } = useLocation();
    console.log(state);
    const switchTabs = () => {
      switch (state.getby) {
        case "product-list":
          return <ProductList />;
        case "product-add":
          return <AddProduct />;
        default:
          return <></>;
      }
    };
    return <>{switchTabs()}</>;
  };

  export default ProductPage;