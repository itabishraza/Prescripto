import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const { aToken, setAToken } = useContext(AdminContext)
    const logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
    }
    const navigate = useNavigate()
    return (
        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white fixed w-full top-0 left-0 '>
            <div className='flex items-center gap-2 text-sm'>
                <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
                <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'> {aToken ? 'Admin' : 'doctor'}</p>
            </div>
            <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full '>Logout</button>
        </div>
    )
}

export default Navbar