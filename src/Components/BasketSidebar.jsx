import React from "react";
import { FaHashtag } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";

function BasketSidebar({ data, dispatch }) {
  const { checkout, total, itemsCounter } = data;
  if (data.selectedItems.length == 0) return <h1>Basket is empty!</h1>;
  return (
    <div className="border-base border-2 border-dashed rounded-2xl p-5 tablet:mr-5">
      <div className="flex justify-start mb-5 items-center">
        <p className="text-base mr-2 font-semibold flex items-center">
          {" "}
          <span className="mr-1">
            <FaClipboardCheck />
          </span>
          Total:
        </p>
        <span>{total}</span>
      </div>
      <div className="flex justify-start mb-5 items-center">
        <p className="text-base mr-2  font-semibold flex items-center">
          <span className="mr-1">
            <FaHashtag />
          </span>
          Quantity:
        </p>
        <span>{itemsCounter}</span>
      </div>
      <div className="flex justify-start items-center mb-8">
        <p className="text-base mr-2 font-semibold flex items-center">
          <span className="mr-1">
            <MdAccessTime />
          </span>{" "}
          Status:
        </p>
        <span>pending...</span>
      </div>

      <button
        onClick={() => dispatch({ type: "checkout" })}
        className="bg-base rounded-lg text-white  w-full"
      >
        Checkout
      </button>
    </div>
  );
}

export default BasketSidebar;
