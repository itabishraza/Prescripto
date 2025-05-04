import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from "./pages/Doctor"
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Footer from './components/Footer'
import MyProfile from './pages/MyProfile'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%] '>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-appointments" element={<MyAppointment />} />
        <Route path="/appointment/:doc_id" element={<Appointment />} />
        <Route path="/my-profile" element={<MyProfile />} />


      </Routes>
      <Footer />

    </div>
  )
}

export default App
