import React from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";

function Layout({ children }) {
  const [state] = useCart();
  console.log(state);
  return (
    <div>
      <header className="container mx-auto bg-base mb-5 p-3 rounded-lg text-white font-semibold flex justify-between items-center">
        <p>ShoppingCard</p>
        <div className="relative">
          <Link to="/checkout">
            <span className="bg-black w-4 h-4 absolute end-[-9px] top-[-9px] flex justify-center items-center text-[8px]  rounded-full">{state.itemsCounter}</span>
            <span className="bg-white w-6 h-6 text-base rounded-md flex justify-center items-center">
              <RiShoppingCart2Line size={20}/>
            </span>
          </Link>
        </div>
      </header>
      <div>{children}</div>
      <div className="container bg-base text-center p-5 mt-5 rounded-lg mx-auto font-semibold text-white">Developed by Amirhossein</div>
    </div>
  );
}

export default Layout;
