import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { logout } from '../services/redux';
import logo from '../img/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { getDetailProduct, getNameUser } from '../services/api';

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken
    }

    useEffect(() => {
        dispatch(getNameUser())
    }, [])

    //get id and first name
    const { dataUser } = useSelector(state => state.nameUser)
    const initialUser = sessionStorage.getItem('user')
    let nickName = []
    let idUser = []
    for (let i = 0; i < dataUser.length; i++) {
        if (dataUser[i].username === initialUser) {
            const nick = dataUser[i].name.firstname
            const idNick = dataUser[i].id
            nickName.push(nick)
            idUser.push(idNick)
        }
    }

    //get cart quantity
    const cart = useSelector((state) => state.cart.cart)
    const getTotalQuantity = () => {
        let total = 0
        total += cart.length
        return total
    }

    const linkToHome = () => {
        getDetailProduct(null)
        navigate('/')
    }

    return (
        <header className='w-full h-20 flex items-center justify-center'>
            <div className="flex justify-center items-center w-2/12 hover:cursor-pointer mix-blend-multiply" onClick={linkToHome}><img src={logo} alt="Sample Logo" className='w-20' /><span className='font-bold text-xl'>Dans Express</span></div>
            <div className='w-1/12'></div>
            <div className='w-1/12 text-sm cursor-pointer text-center'>
                Home
            </div>
            <div className='w-1/12 text-sm cursor-pointer text-center'>
                New Arrival
            </div>
            <div className='w-1/12 text-sm cursor-pointer text-center'>
                Brands
            </div>
            <div className='w-1/12 text-sm cursor-pointer text-center'>
                Contact Us
            </div>
            <div className="flex-1">
                {/* <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block text-black bg-white w-full border border-slate-300 rounded-2xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                </label> */}
            </div>
            <div className='w-1/12 flex justify-center items-center hover:cursor-pointer hover:text-gray-700 ease-in-out duration-150 text-2xl' onClick={() => navigate('/Cart')}>
                <FontAwesomeIcon icon={faShoppingCart} />
                {!getTotalQuantity() ?
                    <div></div>
                    : 
                    <div className='rounded-full w-5 h-5 relative bg-red-500 -top-2.5 right-2.5'>
                        <span className='text-sm absolute text-center text-white w-full top-0'>{getTotalQuantity()}</span>
                    </div>
                }
            </div>
            <div className='w-1/12 italic'><span>{nickName[0]}</span></div>
            <div className="flex justify-start items-center w-2/12">
                <div className='cursor-pointer hover:text-gray-500 duration-200 p-4'>Sign Up</div>
                {getToken() ?
                    //--------- Button Logout / After Login ----------
                    <a href="/" className="flex justify-center align-center w-20 py-1 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out shadow-indigo-500/40" onClick={() => dispatch(logout())}>Logout</a>
                    :
                    //--------- Button Login / Before Login----------
                    <Link to="/Login" className="flex justify-center align-center w-20 py-1 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out shadow-indigo-500/40">Login</Link>
                }
            </div>
        </header>
    )
}

export default Header