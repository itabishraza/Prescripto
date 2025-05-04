import React, { useContext } from 'react'
import { AppContext } from '../context/Appcontext'

const MyAppointment = () => {

    const { doctors } = useContext(AppContext)
    return (
        <div>
            <p className='font-medium text-gray-600 text-2xl border-b'>My appointments</p>
            <div >
                {doctors.slice(0, 2).map((item, index) => (
                    <div className='grid grid-cols-[1fr_2fr] sm:flex gap-4 sm:gap-6 border-b py-2' key={index}>
                        <div>
                            <img className='w-32 bg-indigo-200' src={item.image} alt="" />
                        </div>
                        <div className='flex-1 text-sm text-zinc-600'>
                            <p className='text-neutral-800 font-semibold '>{item.name}</p>
                            <p>{item.speciality}</p>
                            <p className='text-zinc-700 font-medium mt-2'>Address:</p>
                            <p className='text-xs'>{item.address.line1}</p>
                            <p className='text-xs'>{item.address.line2}</p>
                            <p className='text-xs mt-1'><span className='font-medium text-sm text-zinc-700'>Date & Time: </span>25, July, 2024 |  8:30 PM</p>
                        </div>
                        <div></div>
                        <div className='flex flex-col justify-end gap-2'>
                            <button className=' py-2 border sm:min-w-48 text-sm border-gray-500 rounded hover:bg-primary hover:text-white transition-all duration-300' >Pay here</button>
                            <button className=' py-2 border sm:min-w-48 text-sm border-gray-500 rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAppointment
