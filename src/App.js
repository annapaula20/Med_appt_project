import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/Navbar/Navbar';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultationBooking from './Components/InstantConsultationBooking/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import BookingConsultation from './Components/BookingConsultation';
function App() {

     return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Landing_Page/>}></Route>
                    <Route path='/Sign_Up' element={<Sign_Up/>}></Route>
                    <Route path='/Login' element={<Login/>}></Route>
                    <Route path='/instant-consultation' element={<InstantConsultationBooking />} />
                    <Route path='/finddoctor' element={<FindDoctorSearch />} />
                    <Route path='/search/doctors' element={<BookingConsultation />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;