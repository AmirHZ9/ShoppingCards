import React from "react";
import { Link } from "react-router-dom";
import { RiListCheck2 } from "react-icons/ri";
import { TbShoppingCartCopy } from "react-icons/tb";
import { shortenText } from "../helper/helper";
function Card({ data }) {
  const { id, title, image, price } = data;

  return (
    <div className="rounded-xl p-5 bg-white border-2 border-border border-dashed">
      <img src={image} alt={title} className="mx-auto h-40" />
      <h3 className="text-base mt-4 text-title font-semibold">
        {" "}
        {shortenText(title)}
      </h3>
      <p className="text-text mt-2 font-semibold">{price}</p>
      <div className="flex mt-4 justify-between items-center w-full">
        <Link to={`/products/${id}`}>
          <RiListCheck2 size={20} className="text-base"/>
        </Link>
        <button className="p-1 bg-base rounded-md">
          <TbShoppingCartCopy size={20} className="text-white  "/>
        </button>
      </div>
    </div>
  );
}

export default Card;
