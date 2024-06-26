import ProductDetails from "@/components/products/ProductDetails";
import { product } from "@/utils/product";
import React from "react";

type IParams = {
  productId?: string;
};

const ProductPage = ({ params }: { params: IParams }) => {
  return (
    <div className="p-8">
      <div className="container">
        <ProductDetails product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
