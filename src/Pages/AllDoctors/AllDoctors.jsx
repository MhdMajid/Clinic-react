import React, { useEffect, useState } from 'react'
import './AllDoctors.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { MDBContainer, MDBListGroup, MDBListGroupItem, MDBBtn ,MDBPagination, MDBPaginationItem, MDBCol,MDBRow,  MDBPaginationLink} from 'mdb-react-ui-kit';

function AllDoctors(){
// navigate to other page 
const navigate = useNavigate();
const handleButtonClick = () => {
  navigate('/Doctorinfo');
};





  return (
    <>
  
    <MDBContainer>
      {/* Title Section */}
      <div className="info-title-content text-center" dir='rtl'>
        <h3 className="info-title">
          <span>الأطباء </span>
        </h3>
      </div>

      {/* Filter Section */}
      <MDBRow className="d-flex align-items-start bg-body-tertiary mb-3" dir='rtl'>
        <MDBCol md="6">
          <select className='form-select' >
            <option>Damac</option>
            <option>Damac2</option>
            <option>Damac3</option>
            <option>Damac4</option>
          </select>
        </MDBCol>

      {/* Search Section*/}
        <MDBCol md="6">
          <form className='input-group' dir='rtl'>
            <input type='search' className='form-control' placeholder='اضغط هنا' aria-label='Search' />
            <MDBBtn color='primary'>بحث</MDBBtn>
          </form>
        </MDBCol>  

      </MDBRow>

       {/* Doctors List Section */}

      
    <div className='list with action buttons fs-5' dir='rtl' >
    <MDBListGroup style={{ minWidth: '40rem' }} light>
    

         <MDBListGroupItem className='d-flex justify-content-between align-items-center '>
         <div className='d-flex align-items-center'>
         <div className='ms-3'>
             <p className='fw-bold mb-1'>الاسم</p>
             <p className='text-muted mb-0'>الاختصاص</p>
             <p className='text-muted mb-0'>الرقم</p>
             <p className='text-muted mb-0'>البريد الالكتروني </p>
             <p className='text-muted mb-0'>المحافظة </p>
             <p className='text-muted mb-0'>عنوان</p>
           </div>
         </div>
         <MDBBtn rounded className='mx-2' color='info' size='lg' onClick={handleButtonClick}>
         عرض المواعيد
       </MDBBtn>
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

export default AllDoctors
