import React from 'react'
import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { addtoCartFromWishlist, removeFromWishlist } from '../../features/slices/WishlistSlice';

const WishList = ({ openWishModal, setOpenWish }) => {
    const wishCart = useSelector((state) => state.wishCart.wishCart);  

    const dispatch = useDispatch();
  return (
    <Fragment> 
       {wishCart.length > 0 ? (
      <Dialog 
       open={openWishModal}
       size="lg"
       handler={() => setOpenWish(false)}
       className="w-80%"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Wishlisted Items</DialogHeader>
        <DialogBody divider>
         
        <table className="table-auto border" cellPadding="5px" cellSpacing="10px">
            <thead>
              <tr>
                <th className="text-left border">Product Image</th>
                <th className="text-left border">Product Name</th>
                <th className="text-left border">Size</th>
                <th className="text-left border">Color</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {wishCart.map((item, index) => {
                return (                 
                    <tr key={index}>
                      <td className="text-left border">
                      <div className="w-12">
                        <img
                          className="w-auto rounded"
                          src={item.img}
                          alt={item.name}
                        />
                      </div>
                    </td>
                    <td className="text-left border">
                      <div className="pr-4">
                        <h6>{item.name}</h6>
                      </div>
                    </td>
                    <td className="text-left border">
                      <div className="pr-4">
                        {item.size ? <span>{item.size}</span> : <p>NA</p>}
                      </div>
                    </td>
                    <td className="text-left border">
                      <div className="pr-4">
                        {item.color ? (
                          <p>
                            <span>{item.color}</span>
                          </p>
                        ) : (
                          <p>NA</p>
                        )}
                      </div>
                    </td>

                    <td className="text-center border">
                      <div  onClick={()=>dispatch(removeFromWishlist(item))}>
                         
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="red"
                            className="w-6 h-6 text-red "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg> 
                      </div>
                    </td>
                    <td className="text-center border">
                      <div onClick={()=>dispatch(addtoCartFromWishlist(item))}>Add to Cart</div>
                    </td>
                    
                    </tr>
                );
              })}
            </tbody>
          </table>


        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red" 
            className="mr-1"
          >
            <span>Clear Wishlist</span>
          </Button>
          <Button variant="gradient" color="green" >
            <span>Add to Cart</span>
          </Button>
        </DialogFooter>
      </Dialog>
       ): ( 
        <Dialog
          className="border-0 outline-0"
          open={openWishModal}
          handler={() => setOpenWish(false)}
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
  )
}

export default WishList
