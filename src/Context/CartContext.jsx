import React, { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helper/helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add-item":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        selectedItems: [...state.selectedItems],
        checkout: false,
        ...sumProducts(state.selectedItems),
      };
    case "remove":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        selectedItems: [...newSelectedItems],
        checkout: false,
        ...sumProducts(newSelectedItems),
      };

    case "increase":
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "decrease":
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
      case "checkout":
        return{
          selectedItems:[],
          itemsCounter:0,
          total:0,
          checkout:true
        }
    default:
      throw new Error("error");
  }
};
const CartContext = createContext();
function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartContextProvider;
export { useCart };
