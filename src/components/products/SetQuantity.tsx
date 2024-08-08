"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import React from "react";

type SetQuantityProps = {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
};

const btyStyles = "border-[1.2px] border-slate-300 px-2 rounded";

const SetQuantity = ({
  cartCounter,
  cartProduct,
  handleQtyIncrease,
  handleQtyDecrease,
}: SetQuantityProps) => {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">QUANTITY:</div>}
      <div className="flex gap-4 items-center text-base">
        <button onClick={handleQtyDecrease} className={btyStyles}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button onClick={handleQtyIncrease} className={btyStyles}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
