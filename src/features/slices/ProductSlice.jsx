import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/dummyData";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      // JSON.parse(sessionStorage.getItem("filteredData")) ||
       storeData,

    oneProduct: 
   // JSON.parse(sessionStorage.getItem("onePoduct")) ||
    storeData,
    err: false,
    searchFilter:
      //JSON.parse(sessionStorage.getItem("searchFilter")) || 
      storeData,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
       // console.log(filter, "Filter");
        // const newState = JSON.stringify(filter);
        // sessionStorage.setItem("filteredData", newState);
      } catch (err) {
        return err;
      }
    },
    searchProductsFilter(state, action) {
      try {
        const filter = storeData.filter((product) =>
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        );

        state.searchFilter = filter;
       // console.log(filter, "xcxcxx");
        // const newState = JSON.stringify(filter);
        // sessionStorage.setItem("searchFilter", newState);
      } catch (err) {
        return err;
      }
    },
    singleProduct(state, action) {
      try {
        const singleItem = storeData.filter(
          (item) => item.id === action.payload
        );
        state.oneProduct = singleItem;

      //  console.log(singleItem, "singleItem");
        // const newState = JSON.stringify(singleItem);
        // sessionStorage.setItem("oneProduct", newState);
      } catch (err) {
        return err;
      }
    },
  },
});

export const { filterProducts, singleProduct, searchProductsFilter } =
  productSlice.actions;
export default productSlice.reducer;
