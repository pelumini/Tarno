import FormWrap from "@/components/FormWrap";
import React from "react";
import CheckoutClient from "./_components/CheckoutClient";

const CheckoutPage = () => {
  return (
    <div className="p-8">
      <div className="container">
        <FormWrap>
          <CheckoutClient />
        </FormWrap>
      </div>
    </div>
  );
};

export default CheckoutPage;
