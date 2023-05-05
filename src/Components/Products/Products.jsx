import React from "react";

import { storeData } from "../../assets/dummyData";
import ProductsSingle from "./ProductsSingle";

const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl">
        {storeData
          .filter(
            (product) =>
              product.name.includes("Suit") || product.name.includes("Per")
          )
          .slice(0, 6)
          .map((product, index) => {
            return <ProductsSingle key={index} product={product} />;
          })}
        ;
      </div>
    </div>
  );
};

export default Products;
