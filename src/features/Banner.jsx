import React from 'react';
import banner from '../img/banner.jpg'

const Banner = () => {
    return(
        <div className='flex justify-center items-center flex-col w-10/12 h-full' style={{background: '#ded7cf'}}>
            <div className='flex justify-center items-center w-full h-full'>
                <div className='w-6/12 h-full'>
                    <div className='mx-28 flex-col flex justify-center items-start'>
                        <span className='text-4xl text-green-800 leading-relaxed font-bold'>Grab Upto 50% Off on</span>
                        <span className='text-4xl text-green-800 leading-relaxed font-bold'>Selected Product</span>
                    </div>
                    <div className='mx-28 mt-6 flex-col flex justify-center items-start'>
                        <button className='py-3 px-5 text-sm rounded-3xl bg-green-700 text-white'>Buy Now</button>
                    </div>
                </div>
                <div className='w-6/12 h-full flex justify-center items-center'>
                    <img src={banner} alt="Banner Image" className='mix-blend-multiply'/>
                </div>
            </div>
        </div>
    )
}

export default Banner