import React from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import { MDBBtn, MDBTextArea}from "mdb-react-ui-kit";
import PatientDetail from "./PatientDetail";
import axios from 'axios';


const AddDiagnosis   = () => {

  {/**
    ها كود اضافة تشخيص 
    127.0.0.1:8000/api/doctor/store/diagnosis/{booked_appointment}
    بيمشي بس ع مواعيد اليوم 
    المواعيد الثاني بيطلعولا هذول بس بلا تعديل 

    */}
  
  const [diagnosis, setDiagnosis] = useState("");
  const [treatmentPlan, setTreatmentPlan] = useState("");
  const [medicalTests, setMedicalTests] = useState("");
  const [imagingTests, setImagingTests] = useState("");
  const [isSaved, setIsSaved] = useState(false); // State to track if data is saved


  const handleSave = async () => {
    
    try {
      const response = await axios.post('127.0.0.1:8000/api/doctor/store/diagnosis/{booked_appointment}', {
        diagnosis,
        treatmentPlan,
        medicalTests,
        imagingTests
      });

      if (response.status === 201) { 
        setIsSaved(true);
        toast.success("تمت إضافة التشخيص بنجاح");
      } else {
        toast.error("حدث خطأ أثناء حفظ البيانات");
          //Clear the form fields after successful submission
          setDiagnosis("");
          setTreatmentPlan("");
          setMedicalTests("");
          setImagingTests("");
      }
    } catch (error) {
      console.error('Error saving data:', error);
      toast.error("حدث خطأ غير متوقع");

      //Clear the form fields after successful submission
      setDiagnosis("");
      setTreatmentPlan("");
      setMedicalTests("");
      setImagingTests("");

    }
  };


  return(


    <div className="container justify-content-center" >

         <div>
          <PatientDetail/>

         </div>
         <h3 className="text-status" dir="rtl">ادخل التشخيص: </h3>
         <h4 className="text-status" dir="rtl">قم بالنقر على الصندوق لاضافة التشخيص</h4>
         
           <div class="input-group mb-3 gap-5 fs-5">
           
             <MDBTextArea 
             label="تشخيص الحالة المرضية" 
             id="textAreaExample" 
             rows="{5}" 
             placeholder="أضف هنا "
           
             />
         
             <MDBTextArea 
             label="الخطة العلاجية " 
             id="textAreaExample" 
             rows="{5}" 
             placeholder="أضف هنا "
            
             />
          </div>

          <div class="input-group mb-3 gap-5 fs-5">
  
             <MDBTextArea 
             label="الاختبارات الطبية" 
             id="textAreaExample" 
             rows="{5}" 
             placeholder="أضف هنا "
             
             />

             <MDBTextArea 
             label="الصور الاشعاعية المطلوبة" 
             id="textAreaExample" 
             rows="{5}" 
             placeholder="أضف هنا "
            
             />
          </div>

         <div className="d-grid gap-2 d-md-flex justify-content-center">
          <MDBBtn  rounded className="mx-2 "  size="lg"  color='primary'
           onClick={handleSave}
          >حفظ التغييرات 
          </MDBBtn>

         </div>
         <br/>
        </div>

)

}
export default AddDiagnosis  