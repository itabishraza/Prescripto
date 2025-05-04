import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/Appcontext';


function Doctor() {
    const { speciality } = useParams();
    const [filterDoc, setFilterDoc] = useState([]);
    const { doctors } = useContext(AppContext)
    const navigate = useNavigate()

    const applyFilter = () => {
        if (speciality) {
            setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
        } else {
            setFilterDoc(doctors)
        }
    }

    useEffect(() => {
        applyFilter()
    }, [doctors, speciality])

    return (
        <div>
            <p className='text-gray-600'>Browse through the doctors specialist.</p>
            <div className='flex flex-col sm:flex-row items-start mt-5 gap-5'>
                <div className='flex flex-col text-sm text-gray-600 gap-4'>
                    <p onClick={() => { speciality === "General physician" ? navigate("/doctors/") : navigate("/doctors/General physician"); scrollTo(0, 0) }} className={`w-[94vw] sm:w-auto border border-gray-300 rounded pl-3 pr-16 py-1.5 transition-all cursor-pointer  ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}>General physician</p>
                    <p onClick={() => { speciality === "Gynecologist" ? navigate("/doctors") : navigate("/doctors/Gynecologist"); scrollTo(0, 0) }} className={`w-[94vw] sm:w-auto border border-gray-300 rounded pl-3 pr-16 py-1.5 transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
                    <p onClick={() => { speciality === "Dermatologist" ? navigate("/doctors") : navigate("/doctors/Dermatologist"); scrollTo(0, 0) }} className={`w-[94vw] sm:w-auto border border-gray-300 rounded pl-3 pr-16 py-1.5 transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
                    <p onClick={() => { speciality === "Pediatricians" ? navigate("/doctors") : navigate("/doctors/Pediatricians"); scrollTo(0, 0) }} className={`w-[94vw] sm:w-auto border border-gray-300 rounded pl-3 pr-16 py-1.5 transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
                    <p onClick={() => { speciality === "Neurologist" ? navigate("/doctors") : navigate("/doctors/Neurologist"); scrollTo(0, 0) }} className={`w-[94vw] sm:w-auto border border-gray-300 rounded pl-3 pr-16 py-1.5 transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
                    <p onClick={() => { speciality === "Gastroenterologist" ? navigate("/doctors") : navigate("/doctors/Gastroenterologist"); scrollTo(0, 0) }} className={`w-[94vw] sm:w-auto border border-gray-300 rounded pl-3 pr-16 py-1.5 transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>
                </div>
                <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
                    {
                        filterDoc.map((item, index) => (
                            <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 ' key={index}>
                                <img className='bg-blue-50' src={item.image} alt="" />
                                <div className='p-4'>
                                    <div className='flex items-center text-sm text-center text-green-500 gap-2'>
                                        <p className='w-2 h-2 rounded-full bg-green-500 '></p><p>Available</p>
                                    </div>
                                    <p className='text-lg font-medium'>{item.name}</p>
                                    <p className='text-sm text-gray-600'>{item.speciality}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Doctor
