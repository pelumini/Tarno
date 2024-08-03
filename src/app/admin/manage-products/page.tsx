import React from "react";
import ManageProductsClient from "../manage-products/ManageProductsClient";
import { getProducts } from "@/actions/getProducts";
import { getCurrentuser } from "@/actions/getCurrentUser";
import NullData from "@/components/NullData";

const ManageProductsPage = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getCurrentuser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access Denied" />;
  }

  return (
    <div className="pt-8">
      <div className="container">
        <ManageProductsClient products={products} />
      </div>
    </div>
  );
};

export default ManageProductsPage;
