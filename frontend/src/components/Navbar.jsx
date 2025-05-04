import React, { useContext, useState } from 'react'
import { assets } from "../assets/assets"
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Appcontext';


const navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setshowMenu] = useState(false);
    const { token, setToken, userData } = useContext(AppContext)
    const logout = () => {
        setToken(false)
        localStorage.removeItem('token')
    }
    return (

        <div className='flex justify-between text-sm border-b border-b-gray-500 py-4 mb-5'>
            <img onClick={() => { navigate("/") }} className='w-44 cursor-pointer' src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-5 items-center font-medium'>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-primary font-semibold border-b-2 border-primary'
                                : ''
                        }
                    >
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/doctors"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-primary font-semibold border-b-2 border-primary'
                                : ''
                        }
                    >
                        ALL DOCTORS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-primary font-semibold border-b-2 border-primary'
                                : 'null'
                        }
                    >
                        ABOUT
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-primary font-semibold border-b-2 border-primary'
                                : ''
                        }
                    >
                        CONTACT
                    </NavLink>
                </li>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token && userData ?
                        <div className='flex gap-2 cursor-pointer items-center relative group'>
                            <img className='w-8 rounded-full' src={userData.image} alt="" />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                            <div className='absolute top-0 right-[-40px] pt-10 text-base font-medium text-gray-600 hidden group-hover:block z-10'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-3 p-4'>
                                    <p onClick={() => navigate("my-profile")} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => navigate("my-appointments")} className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div> :
                        <button onClick={() => { navigate("/login") }} className='bg-[#5F6FFF] h-10 px-3 rounded-3xl text-white font-medium hidden md:block'>Create Account</button>
                }
                <img onClick={() => setshowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

                {/* Mobile view*/}

                <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden top-0 bottom-0 right-0 z-20 overflow-hidden bg-white transition-all `}>
                    <div className='flex items-center justify-between py-6 px-5'>
                        <img className='w-3/6' src={assets.logo} alt="" />
                        <img className='w-7 ' onClick={() => setshowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <ul className='flex flex-col gap-3 px-5 mt-5 text-lg font-medium items-center'>
                        <NavLink onClick={() => setshowMenu(false)} to="/"><p className='px-4 py-2 inline-block roundedcd '>Home</p></NavLink>
                        <NavLink onClick={() => setshowMenu(false)} to="/doctors"><p className='px-4 py-2 inline-block roundedcd '>All Doctors</p></NavLink>
                        <NavLink onClick={() => setshowMenu(false)} to="/about"><p className='px-4 py-2 inline-block roundedcd '>About</p></NavLink>
                        <NavLink onClick={() => setshowMenu(false)} to="/contact"><p className='px-4 py-2 inline-block roundedcd '>Contact</p></NavLink>
                    </ul>
                </div>
            </div>


        </div >


    )
}

export default navbar