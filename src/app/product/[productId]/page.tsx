import ProductDetails from "@/components/products/ProductDetails";
import { product } from "@/utils/product";
import React from "react";
import ListRating from "../_component/ListRating";

type IParams = {
  productId?: string;
};

const ProductPage = ({ params }: { params: IParams }) => {
  return (
    <div className="p-8">
      <div className="container">
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
