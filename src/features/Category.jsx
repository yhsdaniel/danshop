import React, { useEffect } from 'react';
import { getAllCategory, getPerCategory } from '../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';

const Category = () => {
    const { data } = useSelector(state => state.category)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])

    const handlePickCategory = (e) => {
        dispatch(getPerCategory(e))
    }

    const displayAllProduct = () => {
        dispatch(getPerCategory(null))
    }

    return (
        <div className='mt-6 mb-6 w-full h-full flex flex-col'>
            <div className='flex justify-center items-center my-6 h-full'>
                <div className='w-full pl-4'><hr className='border-t-gray-700' /></div>
                <div className='w-2/12 py-2 text-xl font-bold text-black text-center absolute' style={{ background: "#fff" }}>Shop by Category</div>
            </div>
            <div className='flex justify-center items-center h-full mt-10 pl-4'>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} className="h-full flex justify-center items-center">
                    <div className='h-full mx-4' onClick={displayAllProduct}>
                        <span className='text-sm cursor-pointer ease-in-out duration-200 border border-gray-400 rounded-md p-3 hover:border-gray-700 hover:bg-gray-700 hover:text-white text-black text-center'>All Product</span>
                    </div>
                    {data.map((val) => (
                        <div onClick={() => handlePickCategory(val)} className='h-full mx-4'>
                            <span className='text-sm cursor-pointer ease-in-out duration-200 border border-gray-400 rounded-md p-3 hover:border-gray-700 hover:bg-gray-700 hover:text-white text-black text-center'>{val}</span>
                        </div>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default Category