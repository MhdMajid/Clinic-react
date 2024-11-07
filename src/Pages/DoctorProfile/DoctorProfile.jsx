import "./DoctorProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import img from "../../Assets/stethoscope 1.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { toast } from "react-toastify";
import TodaysAppointment from "./TodaysAppointment";
import FinishedAppointment from "./FinishedAppointment";
import AllApppintments from "./AllAppointments";
import NewDate from "./NewDate";
import ChangePassword from "./ChangePassword";
import axios from "axios";
import { Axios } from "../../Axios";
import Cookies from "universal-cookie";



const DoctorProfile = () => {
  // window.location.reload()
  const nav = useNavigate();
  const navigate = () => {
    nav("/");
  };

const [profile,setprofile] = useState()
const [,] = useState()

  const [T, setT] = useState("")
  const [activeComponent, setActiveComponent] = useState("Profile");

  useEffect(()=>{fetchProfile()},[])
  


  const fetchProfile = async () => {
    await Axios.get("doctor/profile")
    .then((data)=>{console.log(data)
      console.log(Cookies().get("token"))
    })
    .catch((data)=>{console.log(data)})
  };
  const handleLogout = () => {
    // Implement your logout logic here, e.g., clear tokens, redirect to login page
    navigate('/login'); // Replace '/login' with your desired login page
  };
 



 
  const render = () => {
    switch (activeComponent) {
      case "Profile":
        return (
          <div className="section-container">
            <div className="doctor-section">
              
              <div className="text-section">
                <h2 className="text-title">الملف الشخصي</h2>
                <div className="text-stats">
                  <div className="text-stats-container">
                  <h4>الاسم </h4>
                  <h4>التخصص</h4>
                  <h4>العمر </h4>
                  <h4>البريد الالكتروني </h4>
                  <h4>رقم الموبيل</h4>
                  <h4>الخبرة </h4>
                  <h4>المحافظة</h4>
                  <h4>العنوان العيادة</h4>
                  <h4>مصدر الشهادة</h4>
                  <h4>المشفى </h4>
                  <h4>تاريخ انشاء الحساب</h4>
                  </div>

                </div>


                
              </div>
            <br/>
            <br/>
            <br/>
              <div className="hero-image-section">
                <img className="hero-image1" src={img} alt="Doctor" />
              </div>
            </div>

           
          </div>
        );

      case "TodayAppointments":
        return (
         <TodaysAppointment/>
        );

      case "AllApppintments":
        return (
          <AllApppintments/>
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

      case "Today's": return ("Today's");

      case "RecycleBin": return ("RecycleBin");

      default : return("")
    }
 // For Logout Button 


  };

  return (
    <>
   
      <div className="d-flex justify-content-center">
        <div className=" border border-solid  bg-info p-2 my-2 w-100  rounded-pill">
          <div className="mx-5">
            <div className="d-flex  justify-content-between flex-wrap" dir="rtl">
              <li
                className="ft-list-items hov cursor-pointer "
                onClick={() => {
                  setActiveComponent("Profile");
                }}
              >
                الملف الشخصي
              </li>
              <li
                className="ft-list-items hov"
                onClick={() => {
                  setActiveComponent("TodayAppointments");
                }}
              >
                المواعيد المجدولة اليوم
              </li>
              <li
                className="ft-list-items hov"
                onClick={() => {
                  setActiveComponent("FinishedAppointents");
                }}
              >
                المواعيد المنتهية
              </li>
              <li
                className="ft-list-items hov"
                onClick={() => {
                  setActiveComponent("AllApppintments");
                }}
              >
                جميع المواعيد 
              </li>
              <li
                className="ft-list-items hov"
                onClick={() => {
                  setActiveComponent("NewDate");
                }}
              >
                اضافة موعد جديد 
              </li>
              <li
                className="ft-list-items hov"
                onClick={() => {
                  setActiveComponent("ChangePassword");
                }}
              >
                تغيير كلمة السر 
              </li>
              <li
                className="ft-list-items hov"
                onClick={() => {
                  setActiveComponent("RecycleBin");
                }}
              >
                سلة المحذوفات 
              </li>
              <li
                className="ft-list-items hov cursor-pointer"
                onClick={handleLogout}
              >
                تسجيل الخروج
                </li>
              <li
                className="ft-list-items hov"
                onClick={() => {
                  setActiveComponent("RecycleBin");
                }}
              >
                ملفات المرضى لا تنسييي
              </li>
            </div>
            
          
          </div>
        </div>

        <div className="navbar">
        <ul>
          
          <li className="ft-list-items hov cursor-pointer" onClick={handleLogout}>
          <MDBBtn floating size='lg' tag='a'>
             <MDBIcon fas icon="sign-in-alt" />
          </MDBBtn>
          </li>
        </ul>
      </div>
      </div>
      <div className="scr-full"> {render()}</div>
    
    </>
  );
};

export default DoctorProfile;
