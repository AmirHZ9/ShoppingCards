import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import cardReducer from "../features/Cart/cartSlice";
const store = configureStore({
  reducer: { products: productReducer, cardReducer: cardReducer },
});

export default store;
