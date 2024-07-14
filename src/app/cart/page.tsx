import React from "react";
import CartClient from "./_components/CartClient";
import { getCurrentuser } from "@/actions/getCurrentUser";

const CartPage = async () => {
  const currentUser = await getCurrentuser();

  return (
    <div className="pt-8">
      <div className="container">
        <CartClient currentUser={currentUser} />
      </div>
    </div>
  );
};

export default CartPage;
