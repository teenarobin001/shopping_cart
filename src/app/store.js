import { configureStore } from '@reduxjs/toolkit'; 
import  sliderReducer from '../features/slices/SliderSlice';
import  productReducer from '../features/slices/ProductSlice';
import cartReducer from '../features/slices/CartSlice';    
import authReducer from '../features/slices/UserSlice'; 
import  wishlistReducer  from '../features/slices/WishlistSlice';
 

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productReducer,
    cart:cartReducer,
    auth: authReducer,
    wishCart:wishlistReducer
  },
});
