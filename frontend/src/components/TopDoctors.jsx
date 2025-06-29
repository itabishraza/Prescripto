import React, { useContext } from 'react'
import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Appcontext';

const TopDoctors = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext)
    return (
        <div className='flex flex-col items-center gap-4 mx-10 text-gray-900'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 ' key={index}>
                        <img className='bg-blue-50' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className='flex items-center text-sm text-center text-green-500 gap-2'>
                                <p className='w-2 h-2 rounded-full bg-green-500 '></p><p>Available</p>
                            </div>
                            <p className='text-lg font-medium'>{item.name}</p>
                            <p className='text-sm text-gray-600'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => { navigate("/doctors"), scrollTo(0, 0) }} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full  md:mt-10'>more</button>
        </div >
    )
}

export default TopDoctors