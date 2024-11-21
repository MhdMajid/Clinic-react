import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import React, { useState } from 'react';

import axios from 'axios';
import { Axios } from "../../Axios"
const AddAccount = () => {
   
    const [formData, setFormData] = useState({});
   
        const [doctorName, setDoctorName] = useState("");
        const [doctorEmail, setDoctorEmail] = useState("");
        const [doctorAge, setDoctorAge] = useState("");
        const [doctorPhone, setDoctorPhone] = useState("");
        const [doctorAddress, setDoctorAddress] = useState("");
        // select for choes
        const [doctorSpeciality, setDoctorSpeciality] = useState("");
        const [doctorExperience, setDoctorExperience] = useState("");
        const [doctorGovernorate, setDoctorGovernorate, ] = useState("");
        const [doctorCertificate, setDoctorCertificate] = useState("");
        const [errors, setErrors] = useState({});
        


        const [hospital, sethospital] = useState("");
        const [location, setlocation] = useState("");
        const [password, setpassword] = useState("");
        


        
        
      const handleSubmit = async (e) => {
        e.preventDefault();   
    
    
        // Basic input validation
        const validationErrors = {};
      

        if (!doctorName.trim()) {
            validationErrors.doctorName = "يرجى ادخال الاسم الكامل";
          } else if (doctorName.trim().length < 6) {
            validationErrors.doctorName = "يجب أن يكون اسم الطبيب على الأقل من 6 حروف";
          }
          if (!doctorSpeciality.trim()) {
            validationErrors.doctorSpeciality = "يرجى ملء الفراغ";
       
          }
          ////
          if (!location.trim()) {
            validationErrors.location = "يرجى ملء الفراغ";
       
          }
          if (!password.trim()) {
            validationErrors.password = "يرجى ملء الفراغ";
       
          }
          if (!hospital.trim()) {
            validationErrors.hospital = "يرجى ملء الفراغ";
       
          }
          //////


          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!doctorEmail.trim()) {
            validationErrors.doctorEmail = "يرجى ادخال البريد الالكتروني";
          } else if (!emailRegex.test(doctorEmail)) {
            validationErrors.doctorEmail = "صيغة البريد الالكتروني خاطئة، يرجى ادخال صيغة أخرى مثل: (name@example.com)";
          }
          if (!doctorPhone.trim()) {
            validationErrors.doctorPhone = "يرجى ادخال رقم الموبيل";
          } else if (doctorPhone.trim().length !== 10) {
            validationErrors.doctorPhone = "يجب أن يتألف رقم الموبيل من 10 أرقام";
          }
            if (!doctorAge.trim()) {
                validationErrors.doctorAge = "يرجى ادخال العمر";
          } else {
              const age = parseInt(doctorAge.trim());
              if (isNaN(age) || age < 23 || age > 110) {
                validationErrors.doctorAge = "الرجاء إدخال عمر صحيح بين 23 و 110 سنة";
              }
          }
            if (!doctorAddress.trim()) {
                validationErrors.doctorAddress = "يرجى ادخال العنوان";
            } else if (doctorAddress.trim().length < 3) {
                validationErrors.doctorAddress = "يجب أن يكون العنوان على الأقل من 3 حروف";
            } else if (!/^[^\s]+(\s+[^\s]+)*$/.test(doctorAddress.trim())) {
                validationErrors.doctorAddress = "العنوان يجب أن يتكون من كلمات مفصولة بمسافات";
            }
           if (!doctorExperience.trim()) {
            validationErrors.doctorExperience = "يرجى ملءالفراغ";
           }
                 if (!doctorGovernorate.trim()) {
            validationErrors.doctorGovernorate = "يرجى ملءالفراغ";
          }
          if (!doctorCertificate.trim()) {
            validationErrors.doctorCertificate = "يرجى ملءالفراغ";
          }
          if (!doctorCertificate.trim()) {
            validationErrors.doctorCertificate = "يرجى ملءالفراغ";
         }
         
          
         await Axios.post("register_doctor" ,{
          "name" : doctorName,
          "age" :  doctorAge,
          "phone" : doctorPhone,
          "email": doctorEmail,
          "governorate" : doctorGovernorate,
          "specialty" : "2",
          "academic_certificates":doctorCertificate,
          "hospital": hospital,
          "experience" : doctorExperience,
          "clinic_location": location,
          "password" : password
         }).then((data)=>console.log(data))
         .catch((data)=>console.log(data))

        
        
        
        // ... other validation rules
    
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }


        setDoctorName("");
        setDoctorEmail("");
        setDoctorAge("");
        setDoctorPhone("");
        setDoctorAddress("");
        setDoctorSpeciality("");
        setDoctorExperience("");
        setDoctorGovernorate("");
        setDoctorCertificate("");
        sethospital("");
        setlocation("");
        setpassword("");
    }
    

    return(
        <MDBContainer dir="rtl"> 
            
            <h3 className="text-primary ">اضافة طبيب جديد </h3>
            <br/>
        <form className="form-content" onSubmit={handleSubmit}>
            <MDBRow>
                 <MDBCol md='4'>
                 <label htmlFor="newText">اسم الطبيب </label>
                   <input
                     type="text"
                      id="newName"
                      className="form-control"
                      value={doctorName}
                      onChange={(e) => setDoctorName(e.target.value)}
                      required
                     />
                      {errors.doctorName && (
                         <p className="error-message">{errors.doctorName}</p>
                     )}
                       
                </MDBCol>
                 <MDBCol md='4'>
                 <label htmlFor="newAge">العمر</label>
                   <input
                     type="text"
                      id="newAge"
                      className="form-control"
                      value={doctorAge}
                      onChange={(e) => setDoctorAge(e.target.value)}
                      required
                     />
                       {errors.doctorAge && (
                         <p className="error-message">{errors.doctorAge}</p>
                     )}
                 </MDBCol>
                 <MDBCol md='4'>
                 <label htmlFor="newText">التخصص</label>
                   <input
                     type="text"
                      id="newText"
                      className="form-control"
                      value={doctorSpeciality}
                      onChange={(e) => setDoctorSpeciality(e.target.value)}
                      required
                   
                     />
                      {errors.doctorSpeciality && (
                         <p className="error-message">{errors.doctorSpeciality}</p>
                     )}
                 </MDBCol>
            </MDBRow>
            <br/>
            <MDBRow>
                 <MDBCol md='6'>
                 <label htmlFor="newEmail">البريد الالكتروني</label>
                   <input
                     type="email"
                      id="newEmail"
                      className="form-control"
                      value={doctorEmail}
                      onChange={(e) => setDoctorEmail(e.target.value)}
                      required
                   
                     />
                      {errors.doctorEmail && (
                         <p className="error-message">{errors.doctorEmail}</p>
                     )}
                </MDBCol>

                 <MDBCol md='6'>
                 <label htmlFor="newPhone">رقم الموبيل</label>
                   <input
                     type="phone"
                      id="newPhone"
                      className="form-control"
                      value={doctorPhone}
                      onChange={(e) => setDoctorPhone(e.target.value)}
                      required
                   
                     />
                       {errors.doctorPhone && (
                         <p className="error-message">{errors.doctorPhone}</p>
                     )}
                 </MDBCol>
              
            </MDBRow>
            <br/>
            <MDBRow>
                 <MDBCol md='4'>
                 <label htmlFor="newText">سنوات الخبرة</label>
                   <input
                     type="text"
                      id="newName"
                      className="form-control"
                      value={doctorExperience}
                      onChange={(e) => setDoctorExperience(e.target.value)}
                      required
                   
                     />
                      {errors.doctorExperience && (
                         <p className="error-message">{errors.doctorExperience}</p>
                     )}
                </MDBCol>
                 <MDBCol md='4'>
                 <label htmlFor="newPassword">المحافظة</label>
                   <input
                     type="text"
                      id="newAge"
                      className="form-control"
                      value={doctorGovernorate}
                      onChange={(e) => setDoctorGovernorate(e.target.value)}
                      required
                   
                     />
                      {errors.doctorGovernorate && (
                         <p className="error-message">{errors.doctorGovernorate}</p>
                     )}
                 </MDBCol>
                 <MDBCol md='4'>
                 <label htmlFor="newText">مصدر الشهادة</label>
                   <input
                     type="text"
                      id="newText"
                      className="form-control"
                      value={doctorCertificate}
                      onChange={(e) => setDoctorCertificate(e.target.value)}
                      required
                   
                     />
                      {errors.doctorCertificate && (
                         <p className="error-message">{errors.doctorCertificate}</p>
                     )}
                 </MDBCol>
            </MDBRow>
            <br/>

            {/* --------------------- */}

            <MDBRow>
                 <MDBCol md='4'>
                 <label htmlFor="newText">المشفى</label>
                   <input
                     type="text"
                      id="newName"
                      className="form-control"
                      value={hospital}
                      onChange={(e) => sethospital(e.target.value)}
                      required
                   
                     />
                      {errors.hospital && (
                         <p className="error-message">{errors.hospital}</p>
                     )}
                </MDBCol>
                 <MDBCol md='4'>
                 <label htmlFor="newPassword">الموقع</label>
                   <input
                     type="text"
                      id="newAge"
                      className="form-control"
                      value={location}
                      onChange={(e) => setlocation(e.target.value)}
                      required
                   
                     />
                      {errors.location && (
                         <p className="error-message">{errors.location}</p>
                     )}
                 </MDBCol>
                 <MDBCol md='4'>
                 <label htmlFor="newText">كلمة المرور </label>
                   <input
                     type="text"
                      id="newText"
                      className="form-control"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      required
                   
                     />
                      {errors.password && (
                         <p className="error-message">{errors.password}</p>
                     )}
                 </MDBCol>
            </MDBRow>
            <br/>

            {/* ---------------------------- */}
            <MDBRow>
                 <MDBCol md='6'>
                 <label htmlFor="newText">العنوان</label>
                   <input
                     type="text"
                      id="newAddress" 
                      className="form-control"
                      value={doctorAddress}
                      onChange={(e) => setDoctorAddress(e.target.value)}
                      required
                   
                     />
                      {errors.doctorAddress && (
                         <p className="error-message">{errors.doctorAddress}</p>
                     )}
                </MDBCol>
             
              
            </MDBRow>
            <br/>

            <div className="d-grid gap-2 d-md-flex justify-content-center"> 
                <MDBBtn rounded  className="mx-2"  size="lg"  color='primary'
                    >انشاء حساب
                 </MDBBtn>
           
             </div>
        </form>
        </MDBContainer>

    )


}

export default AddAccount