
import './App.css';
import {BrowserRouter as Router , Route, Routes } from "react-router-dom";
import {Home , About ,DashBoard, PatientDetail , MyBooking, AllDoctors, DoctorInfo, AppointmentForm ,DoctorProfile}
 from './Pages/index'
import Page404 from './Pages/Page404/Page404';
import FrontManeger from './FrontManeger';
import Login from './Auth/Login/Login';
import ResetPassword from './Auth/Login/ResetPassword';
import ForgetPassword from './Auth/Login/ForgetPassword' ;
import Register from './Auth/Register/Register';
import LegalDocs from './Pages/LegalDocs/LegalDocs';
import FinishedAppointment from './Pages/DoctorProfile/FinishedAppointment';
import TodaysAppointment from './Pages/DoctorProfile/TodaysAppointment';
import  AllAppointments from './Pages/DoctorProfile/AllAppointments';
import NewDate from './Pages/DoctorProfile/NewDate';
import ChangePassword from './Pages/DoctorProfile/ChangePassword';

function App() {
  return (
    <Router>
    <Routes>
      

        <Route path='*' element={<Page404/>}/>
        <Route path='/' element={ <FrontManeger />}>
          <Route path='' element={ <Home />}/>
          <Route path='About' element={ <About />}/>
          <Route path='Login' element={ <Login />}/>
          <Route path='My-Booking' element={ <MyBooking />}/>
          <Route path='AllDoctors/:id' element={ <AllDoctors />}/>
          <Route path='DoctorInfo/' element={ <DoctorInfo/>}/>
          <Route path='AppointmentForm' element={ <AppointmentForm/>}/>
          <Route path='DoctorProfile' element={<DoctorProfile/>}/>
          <Route path='PatientDetail' element={<PatientDetail/>}/>
          <Route path='DashBoard' element={<DashBoard/>}/>
          <Route path='LegalDocs' element={<LegalDocs/>}/>
          <Route path='Register' element={<Register/>}/>
          <Route path='ResetPassword' element={<ResetPassword/>}/>
          <Route path='ForgetPassword' element={<ForgetPassword/>}/>
          <Route path='TodaysAppointment' element={<TodaysAppointment/>}/>
          <Route path='FinishedAppointment' element={<FinishedAppointment/>}/>
          <Route path='AllAppointments' element={<AllAppointments/>}/>
          <Route path='NewDate' element={<NewDate/>}/>
          <Route path='ChangePassword' element={<ChangePassword/>}/>

          


        </Route>


    </Routes>
   
</Router>
  );
}

export default App;
