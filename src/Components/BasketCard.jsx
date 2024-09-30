import React from 'react'
import { shortenText } from '../helper/helper'
import { FaRegTrashAlt } from "react-icons/fa";
import { decrease, increase, removeItem } from '../features/Cart/cartSlice';


function BasketCard( {data,dispatch}) {
    const {image,title,quantity} = data
  return (
    <div className='flex flex-col mobile:flex-row justify-center mobile:justify-between items-center bg-white rounded-xl border-2 border-dashed border-border p-5 mb-5 '>
        <img src={image} alt="" className='w-20'/>
        <h1 className='font-semibold my-3 mobile:my-0'>{shortenText(title)}</h1>

        <div className='flex justify-center items-center'>
            {
                quantity == 1 && <button onClick={() => dispatch(removeItem(data))} className='text-white bg-base w-6 h-6 flex justify-center items-center rounded-md mr-2'><FaRegTrashAlt />

                </button>
            }

            {
                quantity >1 && <button onClick={() => dispatch(decrease(data))} className='w-6 h-6 bg-base text-white rounded-md flex justify-center items-center mr-2'>-</button>
            }

            <span>{quantity}</span>
            <button onClick={() => dispatch(increase(data))} className='w-6 h-6 bg-base text-white rounded-md flex justify-center items-center ml-2'>+</button>
        </div>
    </div>
  )
}

export default BasketCard