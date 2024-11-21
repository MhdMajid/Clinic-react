import { toast } from "react-toastify";
import "./PatientDetail.css";
import { useState } from "react";

const PatientDetail = () => {

  {/**
    عرض تفاصيل المريض ما بدو شي 
    Show Patient
    127.0.0.1:8000/api/doctor/patient/file/{patient_file}
    
    */}



 
  return (
   
<div className="my-5" dir="rtl">
   <div><h3 className="text-primary ">تفاصيل ملف المريض </h3></div>
   <br/>
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded rounded-top rounded-bottom ">
            <h2 className="text-primary">المعلومات الأساسية</h2>
            <h5>الاسم : ...</h5>
            <h5>العمر : 30</h5>
            <h5>رقم الموبيل : 0912345678</h5>
            <h5>الايميل : tes@gmail.com</h5>
            <h5>العنوان : Tes/test/test</h5>
           
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2 className="text-primary">المعلومات الصحية :</h2>
            <h5>الامراض المزمنة : ahmed</h5>
            <h5>العمليات السابقة : 30</h5>
            <h5>الادوية الدائمة : 0912345678</h5>
            <h5>الاعراض الحالية: tes@gmail.com</h5>
            <h5>نوع الزيارة : Tes/test/test</h5>
          </div>
        </div>
      </div>
    
   </div>  
      
      
   
  );
};

export default PatientDetail;
