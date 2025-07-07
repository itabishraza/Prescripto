import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const currencySymbol = "$";
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [doctors, setDoctors] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
    const [userData, setUserData] = useState(false)



    const getDoctorData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/doctor/list`);

            if (data.success) {
                setDoctors(data.doctors);
            } else {
                console.error(data.message);
                toast.error(data.message);
            }
        } catch (error) {
            console.error("Error fetching doctor data:", error);
            toast.error("Failed to fetch doctor data. Please try again.");
        }
    };

    const loadUserProfileData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, { headers: { token } })
            if (data.success) {
                setUserData(data.userData)
            } else {
                toast.error(error.message)
            }

        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    }



    const value = {
        doctors, getDoctorData,
        currencySymbol,
        token, setToken,
        backendUrl,
        userData, setUserData,
        loadUserProfileData
    };

    useEffect(() => {
        getDoctorData();
    }, []);

    useEffect(() => {
        if (token) {
            loadUserProfileData()
        } else {
            setUserData(false)
        }
    }, [token])

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
