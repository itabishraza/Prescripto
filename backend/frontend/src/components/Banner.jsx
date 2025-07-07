import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 my-5 md:my-32'>
            {/* -----------------left comoponent------------------- */}
            <div className='flex-1 py-10 sm:py-10 md:py-16 lg:py-24 text-center md:text-left '>
                <p className='text-xl md:text-3xl  font-semibold text-white  gap-5'>Book Appointment</p>
                <p className='mt-4 text-xl md:text-3xl font-semibold text-white gap-5'>With 100+ Trusted Doctors</p>
                <button onClick={() => { navigate("/login"), scrollTo(0, 0) }} className='bg-white text-[#4B5563] px-12 py-3 rounded-full mt-10'>Create Account</button>

            </div>


            {/* -------------Right Components-------------- */}
            <div className='hidden md:block w-1/2 relative '>
                <img className='absolute bottom-0 right-0 max-w-md w-full' src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner