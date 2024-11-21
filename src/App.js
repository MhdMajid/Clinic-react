import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  DashBoard,
  PatientDetail,
  MyBooking,
  AllDoctors,
  DoctorInfo,
  AppointmentForm,
  DoctorProfile,
} from "./Pages/index";
import Page404 from "./Pages/Page404/Page404";
import FrontManeger from "./FrontManeger";
import Login from "./Auth/Login/Login";
import ResetPassword from "./Auth/Login/ResetPassword";
import ForgetPassword from "./Auth/Login/ForgetPassword";
import Register from "./Auth/Register/Register";
import LegalDocs from "./Pages/LegalDocs/LegalDocs";
import FinishedAppointment from "./Pages/DoctorProfile/FinishedAppointment";
import TodaysAppointment from "./Pages/DoctorProfile/TodaysAppointment";
import NewDate from "./Pages/DoctorProfile/NewDate";
import ChangePassword from "./Pages/DoctorProfile/ChangePassword";
import UnbookedAppointments from "./Pages/DoctorProfile/UnbookedAppointments";
import AllPatient from "./Pages/PatientDetail/AllPatient";
import Diagnosis from "./Pages/PatientDetail/Diagnosis";
import AddDiagnosis from "./Pages/PatientDetail/AddDiagnosis";
import UpdateDate from "./Pages/DoctorProfile/UpdateDate";
import AppointmentDetails from "./Pages/DoctorProfile/AppointmentDetails";
import RecycleBin from "./Pages/DoctorProfile/RecycleBin";
import AddAccount from "./Pages/DashBoard/AddAccount";
import DoctorsList from "./Pages/DashBoard/DoctorsList";
import Logout from "./Auth/Logout/Logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<FrontManeger />}>
          <Route path="" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Login" element={<Login />} />
          <Route path="My-Booking" element={<MyBooking />} />
          <Route path="AllDoctors/:id" element={<AllDoctors />} />
          <Route path="DoctorInfo/:id" element={<DoctorInfo />} />
          <Route path="AppointmentForm/:id" element={<AppointmentForm />} />
          <Route path="DoctorProfile" element={<DoctorProfile />} />
          <Route path="PatientDetail" element={<PatientDetail />} />
          <Route path="DashBoard" element={<DashBoard />} />
          <Route path="LegalDocs" element={<LegalDocs />} />
          <Route path="Register" element={<Register />} />
          <Route path="ResetPassword" element={<ResetPassword />} />
          <Route path="ForgetPassword" element={<ForgetPassword />} />
          <Route path="TodaysAppointment" element={<TodaysAppointment />} />
          <Route path="FinishedAppointment" element={<FinishedAppointment />} />
          <Route path="NewDate" element={<NewDate />} />
          <Route path="ChangePassword" element={<ChangePassword />} />
          <Route
            path="UnbookedAppointments"
            element={<UnbookedAppointments />}
          />
          <Route path="AllPatient/:id" element={<AllPatient />} />
          <Route path="Diagnosis" element={<Diagnosis />} />
          <Route path="AddDiagnosis" element={<AddDiagnosis />} />
          <Route path="UpdateDate" element={<UpdateDate />} />
          <Route path="AppointmentDetails" element={<AppointmentDetails />} />
          <Route path="RecycleBin" element={<RecycleBin />} />
          <Route path="AddAccount" element={<AddAccount />} />
          <Route path="DoctorsList" element={<DoctorsList />} />
          <Route path="Logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
