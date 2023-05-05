import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      try {
        const existItem = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (existItem) {
          existItem.quantity++;
          existItem.totalPrice += productId.price;
          state.totalQuantity++;
          state.totalPrice += productId.price;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            size: productId.size,
            quantity: 1,
            img: productId.img,
            totalPrice: productId.price,
            name: productId.name,
            text: productId.text,
            color: productId.color,
          });
          state.totalQuantity++;
          state.totalPrice += productId.price;
        } 
      } catch (err) {
        return err;
      }
    },
    
    
    removeFromCart(state, action) {
      const productId = action.payload;
      
      try {
        const existItem = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (existItem.quantity === 1) { 
          state.cart = state.cart.filter(
            (product) =>
            product.id !== productId.id ||
            product.size !== productId.size ||
            product.color !== productId.color
        );
          state.totalQuantity--;
          state.totalPrice -= productId.price;
        } else {
          existItem.quantity--;
          existItem.totalPrice -= productId.price;
          state.totalQuantity--;
          state.totalPrice -= productId.price;
        }
      } catch (err) {
        return err;
      }
    },
   clearCart(state,action){
     state.cart=[]; 
     state.totalQuantity=0;
   }

  },
});
export const { addToCart,removeFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
