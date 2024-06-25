import { products } from "@/utils/products";
import { truncateText } from "@/utils/truncateText";
import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <>
      {products.map((product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </>
  );
};

export default ProductsList;
