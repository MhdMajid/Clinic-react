import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { BaseUrl } from "../../Axios";

function AppointmentForm() {
  
  const {id} = useParams()

// Needed consts
const [sendData, setsendData]=useState();
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [previousSurgeries, setPreviousSurgeries] = useState("");
  const [permanentMedications, setPermanentMedications] = useState("");
  const [currentDiseaseSymptoms, setCurrentDiseaseSymptoms] = useState("");
  const [visitType, setVisitType] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  //To scroll to the top of the page after submitting
  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsSubmitted(false); 
    }
  }, [isSubmitted]); 



  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${BaseUrl}patient/store/patient/${id}`, {
      // add data here :
      "name": patientName,
      "age": patientAge,
      "phone": patientNumber,
      "email": patientEmail,
      "address": patientAddress,
      "previous_surgeries": previousSurgeries,
      "permanent_medications": permanentMedications,
      "current_disease_symptoms": currentDiseaseSymptoms,
      "visit_type": visitType,
    })
      .then((data)=>{console.log(data)})
      .catch((err)=>{console.log(err)})
    // Validate form inputs
    const errors = {};

    // Patient Name
    if (!patientName.trim()) {
      errors.patientName = "يرجى ادخال الاسم الكامل";
    } else if (patientName.trim().length < 6) {
      errors.patientName = "يجب أن يكون اسم المريض على الأقل من 6 حروف";
    }


     // Patient E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patientEmail.trim()) {
        errors.patientEmail = "يرجى ادخال البريد الالكتروني";
    } else if (!emailRegex.test(patientEmail)) {
        errors.patientEmail = "صيغة البريد الالكتروني خاطئة، يرجى ادخال صيغة أخرى مثل: (name@example.com)";
    }

     // Patient Phone Number
    if (!patientNumber.trim()) {
      errors.patientNumber = "يرجى ادخال رقم الموبيل";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "يجب أن يتألف رقم الموبيل من 10 أرقام";
    }

      // Patient Age
      if (!patientAge.trim()) {
        errors.patientAge = "يرجى ادخال العمر";
    } else {
        const age = parseInt(patientAge.trim());
        if (isNaN(age) || age < 0 || age > 110) {
            errors.patientAge = "الرجاء إدخال عمر صحيح بين 0 و 110 سنة";
        }
    }

      // Patient Address
      if (!patientAddress.trim()) {
        errors.patientAddress = "يرجى ادخال العنوان";
      } else if (patientAddress.trim().length < 3) {
        errors.patientAddress = "يجب أن يكون العنوان على الأقل من 3 حروف";
      } else if (!/^[^\s]+(\s+[^\s]+)*$/.test(patientAddress.trim())) {
        errors.patientAddress = "العنوان يجب أن يتكون من كلمات مفصولة بمسافات";
      }
 

      // Patient Previous Surgeries
     if (!previousSurgeries.trim()) {
       errors.previousSurgeries = "يرجى ملءالفراغ";
     }

     // Patient  Permanent Medications
     if (!permanentMedications.trim()) {
      errors.permanentMedications = "يرجى ملءالفراغ";
    }

    // Patient  Current Disease Symptoms
    if (!currentDiseaseSymptoms.trim()) {
       errors.currentDiseaseSymptoms = "يرجى ملءالفراغ";
    }

    // Patient  Visit Type
    if (!visitType.trim()) {
      errors.visitType = "يرجى ملءالفراغ";
    }


  //Display erroes to the user if needed
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientEmail("");
    setPatientNumber("");
    setPreviousSurgeries("");
    setPatientAge("");
    setPatientAddress("");
    setPermanentMedications("");
    setCurrentDiseaseSymptoms("");
    setFormErrors({});


    // Toast 
    toast.success("تم حجز الموعد بنجاح !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <>
    <div className="appointment-form-section " dir="rtl">
      
      <div className="form-container">
        <h2 className="form-title">
          <span>بيانات المريض</span>
        </h2>
      <div>
        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            اسم المريض
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && (
              <p className="error-message">{formErrors.patientName}</p>
            )}
          </label>
          <br/>

          <label>
            البريد الالكتروني
            <input
              type="email"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
              required
            />
            {formErrors.patientEmail && (
              <p className="error-message">{formErrors.patientEmail}</p>
            )}
          </label>
          <br />

          <label>
            رقم الموبايل
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && (
              <p className="error-message">{formErrors.patientNumber}</p>
            )}
          </label>

          <br />
          <label>
            العنوان
            <input
              type="text"
              value={patientAddress}
              onChange={(e) => setPatientAddress(e.target.value)}
              required
            />
            {formErrors.patientAddress && (
              <p className="error-message">{formErrors.patientAddress}</p>
            )}
          </label>
          <br/>

          <label>
            العمر
            <input
              type="text"
              value={patientAge}
              onChange={(e) => setPatientAge(e.target.value)}
              required
            />
            {formErrors.patientAge && (
              <p className="error-message">{formErrors.patientAge}</p>
            )}
          </label>
          <br />

          <label>
            الأعراض التي يشعر بها المريض حالياً
            <textarea  value={currentDiseaseSymptoms}
              onChange={(e) => setCurrentDiseaseSymptoms(e.target.value)}
              required rows="5" cols="33">

            </textarea>
            {formErrors.currentDiseaseSymptoms && (
              <p className="error-message">{formErrors.currentDiseaseSymptoms}</p>
            )}
          </label>
          <br/>

          <label>
            العمليات السابقة
           <textarea  value={previousSurgeries}
              onChange={(e) => setPreviousSurgeries(e.target.value)}
              required rows="5" cols="33">

            </textarea>
            {formErrors.previousSurgeries && (
              <p className="error-message">{formErrors.previousSurgeries}</p>
            )}
          </label>
          <br/>
          
          <label>
            الأدوية التي يأخذها المريض باستمرار
            <textarea  value={permanentMedications}
              onChange={(e) => setPermanentMedications(e.target.value)}
              required rows="5" cols="33">

            </textarea>
            {formErrors.permanentMedications && (
              <p className="error-message">{formErrors.permanentMedications}</p>
            )}
          </label>
          <br/>

          <label>
            الهدف من الزيارة
            <input
              type="text"
              value={visitType}
              onChange={(e) => setVisitType(e.target.value)}
              required
            />
            {formErrors.visitType && (
              <p className="error-message">{formErrors.visitType}</p>
            )}
          </label>
          <br/>
         
          <button type="submit" className="text-appointment-btn">
            تأكيد حجز الموعد
          </button>
  
        </form>
      </div>
      </div>
      <br></br>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
    </>
  );
}

export default AppointmentForm;
