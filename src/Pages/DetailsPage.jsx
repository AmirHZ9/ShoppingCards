import { Link, useParams } from "react-router-dom";

import { TbCategory } from "react-icons/tb";
import { IoIosPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";

import Loader from "../Components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../features/product/productSlice";

function DetailsPage() {
  const dispatch = useDispatch()
  const { id } = useParams();
  const productsDetails = useSelector((state) =>
    state.products.products.find((item) => item.id == id)
  );
useEffect(()=>{
  dispatch(fetchProducts())
},[])
  if (!productsDetails) return <Loader />;
  return (
    <div className="container mx-auto  mobilePro:flex justify-between items-start ">
      <div className=" max-w-34 border-2 p-5 mb-5 rounded-3xl border-base border-dashed flex items-center bg-white">
        <img src={productsDetails.image} alt="" className="h-full" />
      </div>
      <div className=" mobilePro:ml-5 border-dashed border-2 border-border p-5 rounded-3xl">
        <h3 className="text-base font-semibold mb-5">
          {productsDetails.title}
        </h3>
        <p>{productsDetails.description}</p>
        <p className="font-semibold mt-5 flex items-center">
          {" "}
          <span className="mr-2 text-base">
            <TbCategory />
          </span>
          {productsDetails.category}
        </p>
        <div className="mobile:flex justify-between items-center text-white ">
          <span className="text-black font-semibold flex items-center">
            <span className="mr-2 text-base">
              <IoIosPricetag />
            </span>
            {productsDetails.price} $
          </span>
          <span className="flex items-center justify-center bg-base p-2 rounded-xl mt-3">
            <Link to="/products" className="flex items-center ">
              <span className="mr-2">
                <FaArrowLeft />
              </span>
              Back to shop
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
