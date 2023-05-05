import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/dummyData"; 

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products:  storeData,
    wishCart:[], 
    wishQuantity: 0, 
  },
  reducers: {
    addToWishlist(state, action) {
       
      
let productDetails=action.payload;
     // console.log(action.payload,"action")
     // console.log("received WishCart",JSON.parse(JSON.stringify(state.wishCart))      );
      try { 
//         wishListedItem = state.products.filter(
 
//           (product) => product.id  === productDetails.id
//         );
// console.log(JSON.parse(JSON.stringify(wishListedItem)),"wishItem")
// state.wishCart.push(wishListedItem)

state.wishCart.push(productDetails)
        


         

        // const wishListArray = [];
         

        
       
       
      //  const array = state.wishCart.map((item) => {
      //       if(item.id === productDetails.id){
      //        return {
      //           ...item,
      //           wishQuantity:1, 
      //       }
           
      //      }   
           
      //    });
      //    console.log(array,"array")
      //    state.wishCart.push(array);
      
       console.log(JSON.parse(JSON.stringify(state.wishCart)),"wishcartSlice");
      } catch (err) {
        return err;
      }

      
      
    },
    removeFromWishlist(state, action) {
      const productDetails = action.payload;
      console.log(productDetails,"productDetails")

      try {
        state.wishCart = state.wishCart.filter(
          (product) => product.id !== productDetails.id
        );
 

        //console.log(state.wishCart,"newly items")
      } catch (err) {
        return err;
      }

      console.log(JSON.stringify(state.wishCart), "removedCart");
    },
    addtoCartFromWishlist(state,action){
      const productDetails = action.payload;
      console.log(state.cart.cart,"state.cart.cart")
      try {
        const existItem = state.cart.cart.find(
          (product) =>
            product.id === productDetails.id &&
            product.size === productDetails.size &&
            product.color === productDetails.color
        );
        if (existItem) {
          existItem.quantity++;
          existItem.totalPrice += productDetails.price;
          state.totalQuantity++;
          state.totalPrice += productDetails.price;
        } else {
          state.cart.push({
            id: productDetails.id,
            price: productDetails.price,
            size: productDetails.size,
            quantity: 1,
            img: productDetails.img,
            totalPrice: productDetails.price,
            name: productDetails.name,
            text: productDetails.text,
            color: productDetails.color,
          });
          state.totalQuantity++;
          state.totalPrice += productDetails.price;
          
        } 
      } catch (err) {
        return err;
      }
    }
  },
});

export const { addToWishlist, removeFromWishlist, addtoCartFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
