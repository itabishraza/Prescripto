import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
            </div>
            <div className='flex flex-col md:flex-row justify-center mt-10 gap-6 '>
                <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
                <div className='text-sm text-gray-600 flex flex-col gap-4 items-start'>
                    <p className='font-semibold text-gray-700 text-lg'>OUR OFFICE</p>
                    <p>54709 Willms Station <br />Suite 350, Washington, USA</p>
                    <p>Tel: +91 XXXXX XXXXX <br />Email: tabishraza586@gmail.com</p>
                    <p className='font-semibold text-gray-700 text-lg ' >Careers at PRESCRIPTO</p>
                    <p>Learn more about our teams and job openings.</p>
                    <button className='border border-black py-2 px-4 hover:bg-black hover:text-white transition-all duration-300'>Explore Jobs</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
