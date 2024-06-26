"use client";

import React from "react";
import { CartProductType, SelectImgType } from "./ProductDetails";
import Image from "next/image";

type ProductImageProps = {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: SelectImgType) => void;
};

const ProductImage = ({
  cartProduct,
  product,
  handleColorSelect,
}: ProductImageProps) => {
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]:">
        {product.images.map((image: SelectImgType) => (
          <div
            key={image.color}
            onClick={() => handleColorSelect(image)}
            className={`relative w-[80%] rounded aspect-square border-teal-300 ${
              cartProduct.selectImg.color === image.color
                ? "border-[1.5px]"
                : "border-none"
            }`}
          >
            <Image
              src={image.image}
              alt={image.color}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          src={cartProduct.selectImg.image}
          fill
          className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
          alt={cartProduct.name}
        />
      </div>
    </div>
  );
};

export default ProductImage;
