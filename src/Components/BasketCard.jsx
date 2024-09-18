import React from 'react'
import { shortenText } from '../helper/helper'
import { FaRegTrashAlt } from "react-icons/fa";


function BasketCard( {data,clickhandler}) {
    const {image,title,quantity} = data
  return (
    <div className='flex flex-col mobile:flex-row justify-center mobile:justify-between items-center bg-white rounded-xl border-2 border-dashed border-border p-5 mb-5 '>
        <img src={image} alt="" className='w-20'/>
        <h1 className='font-semibold my-3 mobile:my-0'>{shortenText(title)}</h1>

        <div className='flex justify-center items-center'>
            {
                quantity == 1 && <button onClick={() => clickhandler("remove",data)} className='text-white bg-base w-6 h-6 flex justify-center items-center rounded-md mr-2'><FaRegTrashAlt />

                </button>
            }

            {
                quantity >1 && <button onClick={() => clickhandler("decrease",data)} className='w-6 h-6 bg-base text-white rounded-md flex justify-center items-center mr-2'>-</button>
            }

            <span>{quantity}</span>
            <button onClick={() => clickhandler("increase",data)} className='w-6 h-6 bg-base text-white rounded-md flex justify-center items-center ml-2'>+</button>
        </div>
    </div>
  )
}

export default BasketCard