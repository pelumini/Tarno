import { getCurrentuser } from "@/actions/getCurrentUser";
import FormWrap from "@/components/FormWrap";
import React from "react";
import AddProductForm from "./AddProductForm";
import NullData from "@/components/NullData";

const AddProductsPage = async () => {
  const currentUser = await getCurrentuser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Ooops! Access Denied" />;
  }

  return (
    <div className="p-8">
      <div className="container">
        <FormWrap>
          <AddProductForm />
        </FormWrap>
      </div>
    </div>
  );
};

export default AddProductsPage;
