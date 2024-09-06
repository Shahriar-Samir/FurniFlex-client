import React from 'react';

const Products = () => {
    return (
        <main className='w-11/12 mx-auto mt-20'>
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
            <section className='w-9/12'>

            </section>
        </main>
    );
};

export default Products;