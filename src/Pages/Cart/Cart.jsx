import React, { useContext } from 'react';

import { ProductsContext } from '../../Providers/ProductsProvider';

const Cart = () => {

  const {addToCart,cart} = useContext(ProductsContext)



    return (
        <main className='w-10/12 mx-auto mt-20 flex flex-row-reverse justify-center gap-10'>
            <aside className='w-3/12 max-w-[500px] h-[50vh] flex flex-col gap-3'>
                <h1 className='font-semibold text-black text-xl'>Order Details</h1>
                <div className='w-full p-4 border rounded-md flex flex-col gap-2'>
                    <div className='flex flex-col gap-3 border-b pb-3 text-gray-500'>
                    <p className='w-full flex justify-between items-center'>
                        <span>Subtotal</span>
                        <span className='font-semibold'>£1071</span>
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
                        <span className='text-xl font-semibold'>£1071.00</span>
                    </p>
                </div>
                <button className="btn bg-black text-white w-full">GO TO CHECKOUT</button>
            </aside>
          <section className='w-9/12'>
            <h1 className='text-xl font-semibold'>An overview of your order</h1>
          <div className='w-full grid grid-cols-1 gap-10'>
                {cart?.map(item=>{
                    return <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5 w-full">
                      <img
                        src={item.img}
                        alt="Shoes"
                        className="rounded-xl w-full h-[240px] object-cover" />
                    </figure>
                    <div className="card-body items-center ">
                      <h2 className="text-xl font-semibold text-start w-full">{item.name}</h2>
                      <h2 className="flex justify-between w-full text-xl ">
                        <span className='font-bold'>£{item.price}</span>
                        <span className='text-gray-300 font-medium'><del>£{item.mainPrice}</del> </span>
                        <span className='text-red-700 font-bold'>{item.discount}% OFF</span>
                        </h2>
                      <p className='text-lg text-gray-500'>{item.description}</p>
                      <div className="card-actions w-full">
                        <button className="btn bg-black text-white w-full" onClick={()=> addToCart(item)}>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                })}
            </div>
          </section>
        </main>
    );
};

export default Cart;