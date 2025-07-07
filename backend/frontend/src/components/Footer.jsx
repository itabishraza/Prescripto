import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40'>
                {/* left section */}
                <div >
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6 '>Your trusted partner for easy, reliable doctor appointments – health made simple.</p>
                </div>

                {/* Centre Section  */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600 '>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                {/* Right section  */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600 ' >
                        <li>+91-XXXXX XXXXX</li>
                        <li>tabishraza586@gmail.com</li>
                    </ul>
                </div>
            </div>

            <hr className='bg-gray-400 mb-2' />
            <div className='text-gray-600 flex justify-center mb-5 text-center '>Copyright © 2024 GreatStack - All Right Reserved.</div>
        </div>
    )
}

export default Footer