import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/Appcontext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';
import { toast } from 'react-toastify';
import axios from 'axios';


const Appointment = () => {
    const { doc_id } = useParams();
    const { doctors, currencySymbol, backendUrl, token, getDoctorData } = useContext(AppContext);
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const navigate = useNavigate()

    const [docInfo, setDocInfo] = useState(null);
    const [docSlot, setDocSlot] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState("");

    const findDocInfo = async () => {
        const docInfo = doctors.find(doc => doc._id === doc_id);
        setDocInfo(docInfo);


    }

    const getAvailableSlot = async () => {
        setDocSlot([]);

        // getting current date
        let today = new Date();

        for (let i = 0; i < 7; i++) {
            //Gatting date with index
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i)

            // Setting end time 
            let endtime = new Date();
            endtime.setDate(today.getDate() + i);
            endtime.setHours(21, 0, 0, 0)
            //console.log(currentDate, "end ", endtime);

            //Setting Hours 

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }

            let timeSlot = [];

            if (currentDate < endtime) {
                while (currentDate < endtime) {
                    let formatedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

                    timeSlot.push({
                        datetime: new Date(currentDate),
                        time: formatedTime
                    })

                    // Increment time by 30 min 
                    currentDate.setMinutes(currentDate.getMinutes() + 30)
                }
            }
            if (timeSlot.length > 0) {
                setDocSlot(prev => ([...prev, timeSlot]));
            }

        }

    }

    const bookAppointment = async () => {
        if (!token) {
            toast.warn('Login to book Appointment')
            return navigate('/login')
        }
        try {
            const date = docSlot[slotIndex][0].datetime

            let day = date.getDate()
            let month = date.getMonth() + 1;
            let year = date.getFullYear()

            const slotDate = day + "_" + month + "_" + year

            const { data } = await axios.post(`${backendUrl}/api/user/book-appointment`, { doc_id, slotDate, slotTime }, { headers: { token } })
            if (data.success) {
                toast.success(data.message)
                getDoctorData()
                navigate('/my-appointment')

            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)

        }
    }

    useEffect(() => {
        findDocInfo()
    }, [doc_id, doctors])

    useEffect(() => {
        getAvailableSlot();
    }, [docInfo])

    useEffect(() => {


    }, [docSlot])

    return docInfo && (
        <div>
            {/* Doctor detail */}
            <div className='flex flex-col sm:flex-row gap-4'>
                <div   >
                    <img className='w-full bg-primary sm:max-w-[19rem] rounded' src={docInfo.image} alt="Img" />
                </div>
                {/* doc info etc */}
                <div className='flex-1 border border-gray-400 text-gray-600 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 '>
                    <div  >
                        <p className='flex items-center gap-2 text-xl sm:text-2xl text-gray-900 font-medium '>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>
                        <div className='flex items-center gap-2 mt-1 text-sm'>
                            <p className='text-sm'>{docInfo.degree}-{docInfo.speciality}</p>
                            <button className='border border-gray-400 rounded-full py-0.5 px-2 text-xs '>{docInfo.experience}</button>
                        </div>
                    </div>

                    {/* About section  */}
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
                            About <img src={assets.info_icon} alt="" />
                        </p>
                        <p className='text-sm text-gray-500 mt-1 max-w-[700px]'>{docInfo.about}</p>
                        <div className='flex mt-3'>
                            <p>Appointment fee:</p>
                            <p className='text-gray-900 font-medium'>{currencySymbol}{docInfo.fees}</p>
                        </div>
                    </div>
                </div>

            </div>
            {/* Booking Slots */}

            <div className='flex flex-col sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-600'>
                <p>Booking slots</p>
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                    {
                        docSlot.length && docSlot.map((item, index) => (
                            <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 cursor-pointer rounded-full ${slotIndex === index ? "bg-primary text-white" : "border border-gray-200"}`} key={index}>
                                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                <p>{item[0] && item[0].datetime.getDate()}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='flex gap-3 w-full overflow-x-scroll font-light text-sm mt-4 '>
                    {
                        docSlot.length && docSlot[slotIndex].map((item, index) => (
                            <p onClick={() => setSlotTime(item.time)} className={` flex-shrink-0 text-center  px-3 py-2 cursor-pointer rounded-full ${item.time === slotTime ? "bg-primary text-white" : "border border-gray-200"} `} key={index}>
                                {item.time.toLowerCase()}
                            </p>

                        ))
                    }
                </div>
                <button onClick={bookAppointment} className=' bg-primary py-2 sm:w-80 sm:py-3 px-16 sm:px-20 rounded-full text-white mt-6 '>Book an appointment</button>
            </div>

            {/* Related Doctors */}

            <RelatedDoctors doc_id={doc_id} speciality={docInfo.speciality} />
        </div>
    )
}

export default Appointment