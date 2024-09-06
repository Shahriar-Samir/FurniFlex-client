import React from 'react';
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

const Products = () => {

  const {data:products,isLoading} = useQuery(
    { 
      queryKey: ['products'], 
      initialData: [],
      queryFn: ()=>
                axios.get('http://localhost:5000/products')
                .then(res=>{
                    return res.data
                })
    })


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
            <section className='w-9/12 grid grid-cols-3 gap-3'>
                {products?.map(item=>{
                    return <div className="card bg-base-100  shadow-xl">
                    <figure className="px-5 pt-5">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                })}
            </section>
        </main>
    );
};

export default Products;