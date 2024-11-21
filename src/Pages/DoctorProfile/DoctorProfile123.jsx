import "./DoctorProfile.css";
import { MDBRow, MDBCol ,MDBListGroupItem, MDBListGroup, MDBContainer} from 'mdb-react-ui-kit';
import img1 from "../../Assets/stethoscope 1.png";
import img2 from "../../Assets/doctor.png";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { toast } from "react-toastify";
import TodaysAppointment from "./TodaysAppointment";
import FinishedAppointment from "./FinishedAppointment";
import NewDate from "./NewDate";
import ChangePassword from "./ChangePassword";
import UnbookedAppointments from "./UnbookedAppointments";
import AllPatient from "../PatientDetail/AllPatient"
import PatientDetail from "../PatientDetail/PatientDetail";
import RecycleBin from "./RecycleBin"
import Logout from "../../Auth/Logout/Logout";



const DoctorProfile = () => {

 {/* 

    هون صفحةالدكتور
    هذا ال api
    127.0.0.1:8000/api/doctor/profile
    بس القسم الاولاني من البيانات يلي بالرابط 
    
    القسم الثاني للمواعيد غير المحجوزة بعدا من المريض 

    */}


  const nav = useNavigate();
  const navigate = () => {
    nav("/Profile");
  };
  

  const [activeComponent, setActiveComponent] = useState("");
// منشان تسجيل الخروج
  const handleLogout = () => {
    
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };




 
  const render = () => {
    switch (activeComponent) {
      case "Profile":
        return (
          <MDBContainer responsive>
          <div className="section-container">
            <div className="doctor-section shadow-5">
              
              <div className="text-section">
                <h2 className="text-title">أهلا بالطبيب : </h2>
                <div className="text-stats">
                  <div className="text-stats-container">
                  <h3 className="text-status">المعلومات الشخصية: </h3>
                  <h4 className="text-status">التخصص</h4>
                  <h4 className="text-status">العمر </h4>
                  <h4 className="text-status">البريد الالكتروني </h4>
                  <h4 className="text-status">رقم الموبيل</h4>
                  <h4 className="text-status">الخبرة </h4>
                  <h4 className="text-status">المحافظة</h4>
                  <h4 className="text-status">العنوان العيادة</h4>
                  <h4 className="text-status">مصدر الشهادة</h4>
                  <h4 className="text-status">المشفى </h4>
                  <h4 className="text-status">تاريخ انشاء الحساب</h4>
                  <br/>
                 
                  </div>


                </div>


                
              </div>
            <br/>
            <br/>
            <br/>
              <div className="hero-image-section">
                <img className="hero-image1" src={img1} alt="Doctor" />
              </div>
            </div>

           
          </div>
          </MDBContainer>
        );

      case "TodayAppointments":
        return (
         <TodaysAppointment/>
        );

    

      case "NewDate":return (
         <NewDate/>
        );
      
      case "ChangePassword" :return (

        <ChangePassword/>
     
      );
      
      case "FinishedAppointents" : return (
       <FinishedAppointment/>
      );

      case "UnbookedAppointments": return (
        <UnbookedAppointments/>
      );
      case "AllPatient": return (
        <AllPatient/>
      );

      case "RecycleBin": return (
        <RecycleBin/>
      );


      case "PatientDetail" : return (
        <PatientDetail/>
       );


       case "Logout" : return (
        <Logout/>
       );

     
    }
 


  };

  return (
    <>
   
      <MDBContainer responsive dir="rtl"> 
      <MDBRow>
      <MDBCol md='2'>
      <MDBListGroup  className='px-3 mb-2 rounded-3' style={{ maxWidth: '20rem' , minWidth: '12rem',  }} shadow-5 light>
      <MDBListGroupItem 
      tag='a' 
      onClick={() => {setActiveComponent("Profile");}}
      action 
      noBorders 
      aria-current='true'
      className='px-3'
      >
        الملف الشخصي
      </MDBListGroupItem>


      <MDBListGroupItem 
      tag='a' 
      onClick={() => {setActiveComponent("TodayAppointments");}}
      action 
      noBorders 
      className='px-3'
      >
        مواعيد اليوم
      </MDBListGroupItem>


      <MDBListGroupItem 
      tag='a' 
      onClick={() => {setActiveComponent("UnbookedAppointments");}}
      action 
      noBorders 
      className='px-3'
      >
        المواعيد غير المحجوزة
      </MDBListGroupItem>

      <MDBListGroupItem 
      tag='a' 
      onClick={() => {setActiveComponent("FinishedAppointents");}}
      action 
      noBorders 
      className='px-3'
      >
        المواعيد المنتهية
      </MDBListGroupItem>
      
    
      <MDBListGroupItem 
      tag='a' 
      onClick={() => {setActiveComponent("AllPatient");}}
      action 
      noBorders 
      className='px-3'>
        ملفات المرضى
      </MDBListGroupItem>

      <MDBListGroupItem 
      tag='a' 
      onClick={() => {setActiveComponent("NewDate");}}
      action 
      noBorders 
      className='px-3'>
        اضافة موعد
      </MDBListGroupItem>

      <MDBListGroupItem 
      tag='a' 
      onClick={() => {setActiveComponent("ChangePassword");}}
      action 
      noBorders 
      className='px-3'>
        تغيير كلمة المرور
      </MDBListGroupItem>
    
      <MDBListGroupItem 
      tag='a' 
      onClick={() => {setActiveComponent("RecycleBin");}}
      action 
      noBorders 
      className='px-3'>
        سلة المحذوفات
      </MDBListGroupItem>


      <MDBListGroupItem 
      tag='a' 
      onClick={() => {setActiveComponent("Logout");}}
      action 
      noBorders 
      className='px-3'>
        تسجيل خروج
      </MDBListGroupItem>
    

    </MDBListGroup>
    
    
      </MDBCol>

      <MDBCol md='10'>
      {render()}
      </MDBCol>
    </MDBRow>
        
       
    </MDBContainer>
        <br/>
    
    </>
  );
};

export default DoctorProfile; 