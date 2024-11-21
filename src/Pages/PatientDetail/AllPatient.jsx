import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MDBContainer, MDBListGroup, MDBListGroupItem, MDBBtn ,MDBPagination, MDBPaginationItem, MDBCol,MDBRow,  MDBPaginationLink} from 'mdb-react-ui-kit';
import axios from 'axios'

function AllPatient(){

// navigate to other page 
const navigate = useNavigate();
const handleButtonClick = () => {
  navigate('/PatientDetail');


{/*
    هي الصفحة فيها ملفات المرضى يلي عند هالدكتور حصرا
    Show Patient Files
    127.0.0.1:8000/api/doctor/patient/files

    فيه بحث عن مريض 
    Search for Patient
    127.0.0.1:8000/api/doctor/search/patient?search

    و فيه زر حذف 
    Delete Patient File
    127.0.0.1:8000/api/doctor/delete/patient/file/{patient_file}
    
    
    
    
    */}


};

 




  return (
    <>
  
    <MDBContainer>
    <div><h3 className="text-primary ">ملفات المرضى</h3></div>
    <br/>
     {/* Search Section*/}
      <MDBRow className="d-flex align-items-start bg-body-tertiary mb-3" dir='rtl'>
     
      
        <MDBCol md="8" >
        <form className='input-group'dir="ltr">
            <input type='search' className='form-control' placeholder='اضغط هنا' aria-label='Search' />
            <MDBBtn outline color='primary'>بحث</MDBBtn>
          </form>
        </MDBCol>  

      </MDBRow>

       {/* Doctors List Section */}

    <div className='list with action buttons fs-5' dir='rtl' >
    <MDBListGroup style={{ minWidth: '40rem' }} light>
        <MDBListGroupItem  className="d-flex justify-content-between align-items-center ">
                <div className="d-flex align-items-center">
                  <div className="ms-3">
                    <p className="fw-bold mb-1">اسم المريض</p>
                    <p className="text-muted mb-0"> العمر</p>
                    <p className="text-muted mb-0">الرقم </p>
                    <p className="text-muted mb-0"> المحافظة </p>
                
                  </div>
                </div>
                <div className="d-flex align-items-center">
                <MDBBtn rounded className="mx-2" color="info" size="lg"
                onClick={()=>{navigate('/Diagnosis')}}
                >
                  عرض التفاصيل
                </MDBBtn>
                <MDBBtn rounded className="mx-2" color="danger" size="lg" >
                  حذف
                </MDBBtn>

                </div>
              
          </MDBListGroupItem>
          <MDBListGroupItem  className="d-flex justify-content-between align-items-center ">
                <div className="d-flex align-items-center">
                  <div className="ms-3">
                    <p className="fw-bold mb-1">اسم المريض</p>
                    <p className="text-muted mb-0"> العمر</p>
                    <p className="text-muted mb-0">الرقم </p>
                    <p className="text-muted mb-0"> المحافظة </p>
                
                  </div>
                </div>
                <div className="d-flex align-items-center">
                <MDBBtn rounded className="mx-2" color="info" size="lg"
                onClick={()=>{navigate('/Diagnosis')}}
                >
                  عرض التفاصيل
                </MDBBtn>
                <MDBBtn rounded className="mx-2" color="danger" size="lg" >
                  حذف
                </MDBBtn>

                </div>
              
          </MDBListGroupItem>
          
      


      
      {/* Pagination Section */}
      <nav aria-label='...' dir='rtl' >
      <MDBPagination circle className='mb-0' >
        <MDBPaginationItem>
          <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true'>
            الصفحة السابقة
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>1</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem active>
          <MDBPaginationLink href='#'>
            2 <span className='visually-hidden'>(current)</span>
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>3</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>الصفحة التالية</MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
    
    </MDBListGroup>
    </div>
    <br></br>
    

    </MDBContainer>

    </>
  )
}

export default AllPatient
