import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";

const FilterProducts = () => {
  const { type } = useParams();

  const products = useSelector((state) => state.products.filteredProducts);
  useEffect(() => {}, [products]);
  return (
    <div>
      <h1 className="font-roboto font-bold text-center capitalize ">{type}</h1>
      <div className="grid grid-cols-4 justify-items-center items-center">
        {products
          .filter((product) => product.type === type)
          .map((product, index) => {
            return (
              <div key={index}>
                <ProductItem
                  product={product}
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  img={product.img}
                  price={product.price}
                  size={product.size}
                  color={product.color}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FilterProducts;
