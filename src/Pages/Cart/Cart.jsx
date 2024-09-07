import React, { useContext } from 'react';
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

import { ProductsContext } from '../../Providers/ProductsProvider';

const Cart = () => {

  const {addToCart,amount,cart,removeFromCart,decrementItem,totalPrice} = useContext(ProductsContext)



    return (
        <main className='w-10/12 mx-auto mt-20 flex flex-row-reverse justify-center gap-16'>
            <aside className='w-3/12 max-w-[500px] h-[50vh] flex flex-col gap-3'>
                <h1 className='font-semibold text-black text-xl'>Order Details</h1>
                <div className='w-full p-4 border rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-3 border-b pb-3 text-gray-500'>
                    <p className='w-full flex justify-between items-center'>
                        <span>Subtotal</span>
                        <span className='font-semibold'>£{totalPrice}</span>
                    </p>
                    <p className='w-full flex justify-between items-center'>
                        <span>Shipping</span>
                        <span className='font-semibold'>Free</span>
                    </p>
                    <p className='w-full flex justify-between items-center'>
                        <span>Estimated Tax</span>
                        <span className='font-semibold'>£-</span>
                    </p>
                    </div>
                    <p className='w-full flex justify-between items-center'>
                        <span className='text-lg font-semibold text-gray-500'>Total</span>
                        <span className='text-xl font-semibold'>£{totalPrice}</span>
                    </p>
                </div>
                <button className="btn bg-black text-white w-full">GO TO CHECKOUT</button>
            </aside>
          <section className='w-9/12'>
           {amount===0? 
           <div className='w-full flex justify-center items-center h-[50vh]'>
                    <h1 className='text-xl font-semibold'>You haven't added any items to cart </h1>
           </div>:
           <>
            <h1 className='text-xl font-semibold'>An overview of your order</h1>
          <div className='w-full grid grid-cols-1 bg-base-200'>
                {cart?.map(item=>{
                    return <div className="flex h-[200px] w-full justify-between p-5 rounded-md border-b">
                   <div className='flex gap-4 '>
                   <div className='flex gap-4 items-center'>
                    <div className='border flex items-center p-2 h-fit rounded-md gap-2 '>
                    <LuMinus  role='button' onClick={()=> decrementItem(item)}/>
                        <span>{item.amount}</span>
                    <GoPlus className='text-2xl' onClick={()=> addToCart(item)}  role='button'/>
                    </div>
                   <figure className="w-[200px] h-full">
                      <img
                        src={item.img}
                        className="rounded-xl w-[200px] h-full object-cover" />
                    </figure>
                   </div>
                   <h1 className='w-full mt-3 font-bold '>{item.name}</h1>
                   </div>
                    <div className="flex flex-col h-full justify-between items-center center">
                    <GoPlus className='rotate-45 text-2xl ' onClick={()=> removeFromCart(item)} role='button'/>
                        <p className='text- font-semibold'>£{item.price}</p>
                    </div>
                  </div>
                })}
            </div>
           </> }
          </section>
        </main>
    );
};

export default Cart;