import React from "react";
import { useCart } from "../Context/CartContext";
import BasketCard from "../Components/BasketCard";
import BasketSidebar from "../Components/BasketSidebar";

function CheckoutPage() {
  const [state,dispatch] = useCart();
  console.log(state.selectedIems);
  const clickhandler  = (type ,payload) => dispatch({type,payload})
  return (
    <div className="container mx-auto px-0 grid grid-cols-12">
      <div className="col-span-2">
        <BasketSidebar dispatch={dispatch} data={state}/>
      </div>
      <div className="col-span-10">
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
