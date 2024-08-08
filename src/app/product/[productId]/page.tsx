import React from "react";
import ListRating from "./ListRating";
import getProductById from "@/actions/getProductById";
import { getCurrentuser } from "@/actions/getCurrentUser";
import NullData from "@/components/NullData";
import AddRating from "./AddRating";
import ProductDetails from "./ProductDetails";

type IParams = {
  productId?: string;
};

const ProductPage = async ({ params }: { params: IParams }) => {
  const product = await getProductById(params);
  const user = await getCurrentuser();

  if (!product)
    return <NullData title="Oops! Product with the given id does not exist" />;

  return (
    <div className="p-8">
      <div className="container">
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <AddRating product={product} user={user} />
          <ListRating product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
