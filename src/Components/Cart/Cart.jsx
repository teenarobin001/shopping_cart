import React from "react";
import { Fragment } from "react";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import CarItem from "./CarItem";
import { clearCart } from "../../features/slices/CartSlice";

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  return (
    <Fragment>
      {cart.length > 0 ? (
        <Dialog
          open={openModal}
          size="lg"
          handler={() => setOpen(false)}
          className="w-80%"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>Shopping Bag</DialogHeader>
          <DialogBody divider className="flex flex-col justify-center">
            <div className="text-right pb-4">
              <Button color="gray" onClick={() => dispatch(clearCart())}>
                Clear Cart
              </Button>
            </div>
            <table
              className="table-auto border"
              cellPadding="5px"
              cellSpacing="10px"
            >
              <thead>
                <tr>
                  <th className="text-left border">Product Image</th>
                  <th className="text-left border">Product Name</th>
                  <th className="text-left border">Size</th>
                  <th className="text-left border">Color</th>
                  <th className="text-left border">Price</th>
                  <th className="text-left border">Quantity</th>
                  <th className="text-left border">Total Price</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item, index) => {
                  return <CarItem item={item} key={index} />;
                })}
              </tbody>
            </table>
          </DialogBody>
          <DialogFooter className="flex justify-end items-right">
            <div className="text-black text-base font-roboto tracking-normal leading-none pt-2">
              Total Price of All Products:{" "}
              <span className="ml-2 font-roboto">{totalPrice}$</span>
            </div>
          </DialogFooter>
        </Dialog>
      ) : (
        <Dialog
          className="border-0 outline-0"
          open={openModal}
          handler={() => setOpen(false)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>Shopping Bag</DialogHeader>
          <DialogBody divider>
            <div>
              <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                Your bag is empty
              </h1>
              <h5 className="text-black text-base font-inter tracking-normal leading-none ">
                Add some products
              </h5>
            </div>
          </DialogBody>
        </Dialog>
      )}
    </Fragment>
  );
};

export default Cart;
