import React from "react";
import "../../App.css";
import { productData } from "../ProductsFolder/data";
import ProductsSection from "../ProductsFolder";
import Footer from "../Footer";

function Products() {
  return (
    <>
      <ProductsSection data={productData} />
      <Footer />
    </>
  );
}

export default Products;
