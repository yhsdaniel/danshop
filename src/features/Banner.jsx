import React from 'react';
import banner from '../img/banner1.png'

const Banner = () => {
    return(
        <section className='flex justify-center items-center flex-col h-full w-full' style={{background: '#F1EFEF'}}>
            <div className='flex justify-center items-center w-full h-full'>
                <div className='w-6/12 h-full'>
                    <div className='mx-28 flex-col flex justify-center items-start'>
                        <span className='text-4xl text-gray-700 leading-relaxed font-bold'>Make your fashion shine out to the world</span>
                        <span className='text-4xl text-gray-700 leading-relaxed font-bold'>Selected Product</span>
                        <span className='w-3/4 text-sm'>Your are a good fashion every day of your life and you don't even realize it.</span>
                    </div>
                    <div className='mx-28 mt-6 flex justify-start items-center'>
                        <button className='py-3 px-5 mr-4 text-sm rounded-lg bg-gray-700 hover:bg-gray-600 duration-200 text-white'>Shop Now</button>
                        <button className='py-3 px-5 text-sm rounded-lg border border-solid border-black hover:border-gray-500 hover:text-gray-500 duration-200'>Learn More</button>
                    </div>
                </div>
                <div className='w-6/12 h-full flex justify-center items-center'>
                    <img src={banner} alt="Banner Image" className='mix-blend-multiply'/>
                </div>
            </div>
        </section>
    )
}

export default Banner