import React from "react";
import { useCart } from "../Context/CartContext";
import BasketCard from "../Components/BasketCard";
import BasketSidebar from "../Components/BasketSidebar";

function CheckoutPage() {
  const [state,dispatch] = useCart();
  console.log(state.selectedIems);
  const clickhandler  = (type ,payload) => dispatch({type,payload})
  return (
    <div className="container mx-auto mobile:px-0 tablet:flex">
      <div className="mb-5 w-full tablet:w-auto">
        <BasketSidebar dispatch={dispatch} data={state}/>
      </div>
      <div className="w-full ">
        <ul>
          {state.selectedItems.map((item) => (
            <BasketCard key={item.id} data={item} clickhandler={clickhandler}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CheckoutPage;
