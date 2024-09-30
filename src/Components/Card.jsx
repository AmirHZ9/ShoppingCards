import React from "react";
import { Link } from "react-router-dom";
import { RiListCheck2 } from "react-icons/ri";
import { TbShoppingCartCopy } from "react-icons/tb";
import { productQuantity, shortenText } from "../helper/helper";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../features/Cart/cartSlice";

function Card({ data }) {
  const { id, title, image, price } = data;
  const products = useSelector((state) => state.cardReducer);
  console.log(products)
  const dispatch = useDispatch();
  const quantity = productQuantity(products, id);

  return (
    <div className="rounded-xl p-5 bg-white border-2 border-border border-dashed">
      <img src={image} alt={title} className="mx-auto h-40" />
      <h3 className="text-base mt-4 text-title font-semibold">
        {" "}
        {shortenText(title)}
      </h3>
      <p className="text-text mt-2 font-semibold">{price} $</p>
      <div className="flex mt-4 justify-between items-center w-full">
        <Link to={`/products/${id}`}>
          <RiListCheck2 size={20} className="text-base " />
        </Link>
        <div className="flex justify-between items-center">
          {quantity == 1 && (
            <button
              className=" bg-base rounded-md  text-white w-6 h-6 flex justify-center items-center mr-2"
              onClick={() => dispatch(removeItem(data))}
            >
              <FaRegTrashAlt />
            </button>
          )}
          {quantity > 1 && (
            <button
              className=" bg-base rounded-md  text-white w-6 h-6 flex justify-center items-center mr-2"
              onClick={() => dispatch(decrease(data))}
            >
              -
            </button>
          )}

          {quantity == 0 ? "" : quantity}
          {quantity == 0 && (
            <button
              className=" bg-base rounded-md w-6 h-6 flex justify-center items-center"
              onClick={() => dispatch(addItem(data))}
            >
              <TbShoppingCartCopy size={20} className="text-white  " />
            </button>
          )}
          {quantity > 0 && (
            <button
              className=" bg-base rounded-md text-white w-6 h-6 flex justify-center items-center ml-2"
              onClick={() => dispatch(increase(data))}
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
