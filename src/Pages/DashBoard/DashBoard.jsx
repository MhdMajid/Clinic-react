import { useNavigate } from "react-router-dom";
import "./DashBoard.css"
import { useState } from "react";

const DashBoard = () => {
  const nav = useNavigate()
  const [activeComponent , setActiveComponent] =useState('')
  const render = ()=>{
    switch(activeComponent){
      case "AddAcount": return(<h1>AddAcount</h1>);
      case "Accounts": return(<h1>سابات الاطباء </h1>);
      case "addDate": return(<h1>ضافة موعد </h1>);
      case "File": return(<h1>ملفات المرضى</h1>);
      
    }
  }
  return (
    <div className="said-bar ">
      <div className="content">{render()}</div>
      <div className="bar">
        <div className="nav">
          <ul className="d-flex flex-column align-items-end ">
            <li onClick={() => nav("/")}className="ft-list-items"> عرض احصائيات </li>
            <li onClick={() => setActiveComponent("AddAcount")} className="ft-list-items"  >اضافة حساب طبيب</li>
            <li onClick={() => setActiveComponent("Accounts")}className="ft-list-items"> حسابات الاطباء </li>
            <li onClick={() => setActiveComponent("File")}className="ft-list-items"> ملفات المرضى </li>
            <li onClick={() => setActiveComponent("addDate")}className="ft-list-items"> عرض المواعيد </li>
            <li onClick={() => setActiveComponent("DeletedAppointment")}className="ft-list-items"> الملفات المحذوفة</li>
            <li onClick={() => setActiveComponent("AddAcount")}className="ft-list-items"> تسجيل الخروج </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashBoard
