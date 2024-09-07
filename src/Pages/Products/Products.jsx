import React, { useContext } from 'react';

import { ProductsContext } from '../../Providers/ProductsProvider';

const Products = () => {

  const {isLoading,products} = useContext(ProductsContext)


    console.log(isLoading)
    if(isLoading){
      return <div className='w-full h-[80vh] flex justify-center items-center'>
            <h1>Loading</h1>
      </div>
    }

    return (
        <main className='w-11/12 mx-auto mt-20 flex justify-center gap-10'>
            <aside className='w-3/12 max-w-[500px] border-e h-[50vh] flex flex-col gap-3'>
        <div className='pb-2 border-b'>
        <button className="btn btn-wide hover:bg-black hover:text-white">Rocking Chair</button>
        </div>
            <div className='pb-2 border-b'>
            <button className="btn btn-wide">Side Chair</button>
            </div>
           <div className='pb-2 border-b'>
           <button className="btn btn-wide">Lounge Chair</button>
           </div>
            </aside>
            <section className='w-9/12 grid lg:grid-cols-3 gap-3'>
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
                        <button className="btn bg-black text-white w-full">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                })}
            </section>
        </main>
    );
};

export default Products;