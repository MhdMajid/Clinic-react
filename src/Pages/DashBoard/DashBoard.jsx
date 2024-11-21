import { useNavigate } from "react-router-dom";
import "./DashBoard.css"
import PatientFile from "./PatientFile"
import { useState,useEffect } from "react";
// import Box from '@mui/material/Box';
import AddAccount from "./AddAccount";
import DoctorsList from "./DoctorsList";
import * as React from 'react';

import { Axios } from "../../Axios";
import AllDate from "./AllDate";
import Cookies from "universal-cookie";





const DashBoard = () => {

  const [dashinfo , setdashinfo] =useState('')
  useEffect(()=>{fetchdash()},[])
  const fetchdash =async()=>{
    await Axios.get("admin/dashboard")
    // .then((data)=>console.log(data.data.data))
    .then((data)=>{setdashinfo(data.data.data)
      console.log(data)
    })
    .catch((data)=>console.log(data.data.data))
  }

 

  const cook = new Cookies ()
  const out = ()=>{
    cook.remove("token")
    nav("/")
    window.location.reload()
  }


  const nav = useNavigate()
  const [activeComponent , setActiveComponent] =useState('')
  const render = ()=>{
    switch(activeComponent){
      case "charts":
        return("")

      case "AddAccount": return(
       <AddAccount/>
      );


      case "DoctorsList": return(
       <DoctorsList/>
    );

      case "addDate": return(
     <AllDate />
    );
    
      case "File": return(
      <PatientFile />
    );
    default : return ("")
      
    }
  }
  return (
    <div className="said-bar ">

      {activeComponent ?  <div className="content">{render()}</div> :
    
    <>
    
    <div className="container text-center">
  <div className="row">
    <div className="col" style={{backgroundColor : "#fedede" , borderRadius : "50px"}}>المواعيد المحجوزة اليوم: {dashinfo["Today Booked Appointments"]} </div>
    <div className="col"style={{backgroundColor : "#fedede" , borderRadius : "50px"}}>المواعيد المنجزة اليوم: {dashinfo["Today Completed Appointments"]}</div>
    <div className="col"style={{backgroundColor : "#fedede" , borderRadius : "50px"}}>المواعيد التي تم إنشاؤها اليوم: {dashinfo["Today Created Appointments"]}</div>
    <div className="col"style={{backgroundColor : "#fedede" , borderRadius : "50px"}}>الزيارات اليوم: {dashinfo["Today visits"]}</div>
  </div>
</div>

    
    </>
    
    
    }
     


      <div className="bar">
        <div className="nav" >
          <ul className="d-flex flex-column align-items-end ">
            <li 
              onClick={() => setActiveComponent("")}className="ft-list-items"> 

              عرض احصائيات  

            </li>
            <li 
            onClick={() => setActiveComponent("AddAccount")} className="ft-list-items"  >
              
              اضافة حساب طبيب
            
            </li>
            <li onClick={() => setActiveComponent("DoctorsList")}className="ft-list-items">
              
               قائمة الاطباء
               
            </li>
            <li onClick={() => setActiveComponent("File")}className="ft-list-items">

               ملفات المرضى 
               
            </li>
            <li onClick={() => setActiveComponent("addDate")}className="ft-list-items">
              
               عرض المواعيد 
               
            </li>
          
            <li onClick={out}className="ft-list-items">
              
               تسجيل الخروج 
               
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default DashBoard
