import { Button, Tooltip } from "@material-tailwind/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/slices/CartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.oneProduct);

  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color ? product[0].color[0] : "";
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);

  return (
    <div>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center py-10">
              <div className="pl-30 grow-[2]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[550px] rounded-lg"
                />
              </div>
              <div className="grow-[3]">
                <div>
                  <h6 className="text-2xl font-roboto font-bold font-italic">
                    {item.name}
                  </h6>
                  <h5 className="text-orange-800 font-bold">20% OFF</h5>
                  <h4 className="text-gray-800 font-bold">{item.text}</h4>
                  <div className="pb-4  grid grid-cols-4">
                    {item?.size && (
                      <>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Pick a size
                        </label>
                        <select
                          id="size"
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-25% p-2.5 dark:bg-gray-700 dark:border-gray-600"
                        >
                          {item.size.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </>
                    )}
                  </div>

                  {item?.color && (
                    <div className="pb-4 grid grid-cols-4 gap-4 content-start ">
                      <label
                        htmlFor="color"
                        className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Pick a color
                      </label>
                      <select
                        id="color"
                        name="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-lg w-25% p-2.5 dark:bg-gray-700 dark:border-gray-600"
                      >
                        {item?.color?.map((color, index) => {
                          return (
                            <option key={index} value={color}>
                              {color}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  )}
                  <div className="pb-4  grid grid-cols-4">
                    <label
                      htmlFor="color"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Price:
                    </label>
                    <span className="font-bold">${item.price}</span>
                  </div>

                  <Tooltip content="Add to Cart" placement="bottom">
                    <Button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            name: item.name,
                            img: item.img,
                            text: item.text,
                            size: size,
                            color: color,
                            price: item.price,
                            quantity: 1,
                            totalPrice: item.price,
                          })
                        )
                      }
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                    >
                      Add to Cart
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;
