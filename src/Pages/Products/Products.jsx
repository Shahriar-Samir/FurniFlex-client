import React, { useContext } from 'react';

import { ProductsContext } from '../../Providers/ProductsProvider';
import { Helmet } from 'react-helmet-async';

const Products = () => {

  const {isLoading,products,addToCart} = useContext(ProductsContext)


    if(isLoading){
      return <div className='w-full h-[80vh] flex justify-center items-center'>
            <h1>Loading</h1>
      </div>
    }

    return (
        <main className='w-11/12 mx-auto mt-20 flex flex-col md:flex-row justify-center gap-10'>
               <Helmet>
                <title>Products || FurniFlex</title>
            </Helmet>
            <aside className='md:w-3/12 md:max-w-[500px] md:border-e pe-4 flex  md:flex-col gap-3'>
        <div className='pb-2 border-b w-full'>
        <button className="btn hover:bg-black hover:text-white w-full">Rocking Chair</button>
        </div>
            <div className='pb-2 border-b w-full'>
            <button className="btn w-full">Side Chair</button>
            </div>
           <div className='pb-2 border-b w-full'>
           <button className="btn w-full">Lounge Chair</button>
           </div>
            </aside>
            <section className='md:w-9/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {products?.map(item=>{
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
            </section>
        </main>
    );
};

export default Products;