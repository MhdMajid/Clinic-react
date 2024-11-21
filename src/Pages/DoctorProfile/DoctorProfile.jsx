import "./DoctorProfile.css";
import { MDBRow, MDBCol, MDBListGroupItem, MDBListGroup, MDBContainer, MDBCard, MDBCardHeader, MDBCardBody } from 'mdb-react-ui-kit';
import img1 from "../../Assets/stethoscope 1.png";
import img2 from "../../Assets/doctor.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import TodaysAppointment from "./TodaysAppointment";
import FinishedAppointment from "./FinishedAppointment";
import NewDate from "./NewDate";
import ChangePassword from "./ChangePassword";
import UnbookedAppointments from "./UnbookedAppointments";
import AllPatient from "../PatientDetail/AllPatient"
import PatientDetail from "../PatientDetail/PatientDetail";
import RecycleBin from "./RecycleBin"
import Logout from "../../Auth/Logout/Logout";
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,  // Register PointElement for point charts (scatter or line)
//   LineElement,   // Register LineElement if you're using line charts
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';
import Cookies from "universal-cookie";

// Register all components you need
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,  // Register this for point elements in line or scatter charts
//   LineElement,   // Register this for line charts
//   Title,
//   Tooltip,
//   Legend
// );
const DoctorProfileDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("Profile");
  const nav = useNavigate();

  // Sample data for the graph
  const data = {
    labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
    datasets: [
      {
        label: 'عدد المواعيد',
        data: [30, 45, 25, 50, 40, 60],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'تطور عدد المواعيد عبر الأشهر',
      },
    },
  };

  const cook = new Cookies ()
  const out = ()=>{
    cook.remove("token")
    nav("/")
    window.location.reload()
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    nav('/login');
  };

  const render = () => {
    switch (activeComponent) {
      case "Profile":
        return (
          <MDBContainer responsive>
            <div className="section-container">
              <div className="doctor-section shadow-5">
                <div className="text-section">
                  <h2 className="text-title">أهلا بالطبيب :</h2>
                  <div className="text-stats">
                    <div className="text-stats-container">
                      <h3 className="text-status">المعلومات الشخصية:</h3>
                      <h4 className="text-status">التخصص</h4>
                      <h4 className="text-status">العمر</h4>
                      <h4 className="text-status">البريد الالكتروني</h4>
                      <h4 className="text-status">رقم الموبيل</h4>
                      <h4 className="text-status">الخبرة</h4>
                      <h4 className="text-status">المحافظة</h4>
                      <h4 className="text-status">العنوان العيادة</h4>
                      <h4 className="text-status">مصدر الشهادة</h4>
                      <h4 className="text-status">المشفى</h4>
                      <h4 className="text-status">تاريخ انشاء الحساب</h4>
                    </div>
                  </div>
                </div>
                <div className="hero-image-section">
                  <img className="hero-image1" src={img1} alt="Doctor" />
                </div>
              </div>
            </div>
          </MDBContainer>
        );
      case "TodayAppointments":
        return <TodaysAppointment />;
      case "NewDate":
        return <NewDate />;
      case "ChangePassword":
        return <ChangePassword />;
      case "FinishedAppointents":
        return <FinishedAppointment />;
      case "UnbookedAppointments":
        return <UnbookedAppointments />;
      case "AllPatient":
        return <AllPatient />;
      case "RecycleBin":
        return <RecycleBin />;
      case "PatientDetail":
        return <PatientDetail />;
      case "Logout":
        return <Logout />;
      default:
        return (
          <MDBRow className="d-flex">
        <MDBCol md="4" className="mb-4">
          <MDBCard className="shadow-0">
            <MDBCardHeader className="text-center">
              <h5>الإحصائيات</h5>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="6">
                  <h6>عدد المواعيد هذا الشهر:</h6>
                  <h4>150</h4>
                </MDBCol>
                <MDBCol md="6">
                  <h6>المرضى الجدد:</h6>
                  <h4>20</h4>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-3">
                <MDBCol md="6">
                  <h6>الزيارات المنتهية:</h6>
                  <h4>130</h4>
                </MDBCol>
                <MDBCol md="6">
                  <h6>المواعيد الملغاة:</h6>
                  <h4>10</h4>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="shadow-0">
            <MDBCardHeader className="text-center">
              <h5>مخطط المواعيد</h5>
            </MDBCardHeader>
            <MDBCardBody>
              {/* <Line data={data} options={options} /> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
        )
    }
  };

  return (
    <MDBContainer responsive dir="rtl">
    
      <MDBRow>
        <MDBCol md='2'>
          <MDBListGroup className='px-3 mb-2 rounded-3' style={{ maxWidth: '20rem', minWidth: '12rem' }} shadow-5 light>
          <MDBListGroupItem tag='a' onClick={() => setActiveComponent("Statistics")} action noBorders aria-current='true' className='px-3'>
             الاحصائيات
            </MDBListGroupItem>
            <MDBListGroupItem tag='a' onClick={() => setActiveComponent("Profile")} action noBorders aria-current='true' className='px-3'>
              الملف الشخصي
            </MDBListGroupItem>
            <MDBListGroupItem tag='a' onClick={() => setActiveComponent("TodayAppointments")} action noBorders className='px-3'>
              مواعيد اليوم
            </MDBListGroupItem>
            <MDBListGroupItem tag='a' onClick={() => setActiveComponent("UnbookedAppointments")} action noBorders className='px-3'>
              المواعيد غير المحجوزة
            </MDBListGroupItem>
            <MDBListGroupItem tag='a' onClick={() => setActiveComponent("FinishedAppointents")} action noBorders className='px-3'>
              المواعيد المنتهية
            </MDBListGroupItem>
            <MDBListGroupItem tag='a' onClick={() => setActiveComponent("AllPatient")} action noBorders className='px-3'>
              ملفات المرضى
            </MDBListGroupItem>
            <MDBListGroupItem tag='a' onClick={() => setActiveComponent("NewDate")} action noBorders className='px-3'>
              اضافة موعد
            </MDBListGroupItem>
            <MDBListGroupItem tag='a' onClick={() => setActiveComponent("ChangePassword")} action noBorders className='px-3'>
              تغيير كلمة المرور
            </MDBListGroupItem>
            <MDBListGroupItem tag='a' onClick={() => setActiveComponent("RecycleBin")} action noBorders className='px-3'>
              سلة المحذوفات
            </MDBListGroupItem>
            <MDBListGroupItem tag='a' onClick={out} action noBorders className='px-3'>
              تسجيل خروج
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCol>
        <MDBCol md='10'>
          {render()}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DoctorProfileDashboard;
