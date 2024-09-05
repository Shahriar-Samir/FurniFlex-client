import React from 'react';

const Banner = () => {
    return (
        <section className='w-full h-[500px] lg:h-full lg:w-1/2 bg-[url("/Images/banner.jpeg")] bg-cover flex justify-center items-center bg-no-repeat'>
           <div className='w-full'>

            {/* logo */}
           <div className='w-24 h-24 bg-titleBlue rounded-full mx-auto flex justify-center items-center'>
                    <h1 className='text-black italic font-medium text-4xl'>F</h1>
           </div>

            {/* title */}
           <h1 className='text-center font-bold text-[50px] text-white '>Furni<span className='text-titleBlue'>Flex</span></h1>

           {/* description */}
           <p className='mx-auto text-white text-center w-10/12 max-w-[450px]'>Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
           </div>
        </section>
    );
};

export default Banner;