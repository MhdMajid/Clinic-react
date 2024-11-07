import React, { useEffect, useState } from 'react'
import './AllDoctors.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { MDBContainer, MDBListGroup, MDBListGroupItem, MDBBtn ,MDBPagination, MDBPaginationItem, MDBCol,MDBRow,  MDBPaginationLink} from 'mdb-react-ui-kit';
import { BaseUrl } from '../../Axios';

function AllDoctors(){
  const { id } = useParams();
// navigate to other page 
const navigate = useNavigate();
const handleButtonClick = () => {
  navigate('/Doctorinfo');
};
const [data,setdata] = useState()
useEffect(()=>{FetchDoctors()},[1])
const [dd,setdd] = useState("0")


const FetchDoctors = async () => {
  await axios.get(`${BaseUrl}patient/show/doctors/${id}`)
  .then((data)=>{console.log(data.data.data)
    setdata(data.data.data)
  }).catch((e)=>console.log(e))
}




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
          <select onChange={(e)=>setdd(e.target.value)} className='form-select' >
            <option value={"0"} >الكل</option>
            <option value={"دمشق"} >دمشق</option>
            <option value={"حلب"} >حلب</option>
            <option value={"حمص"} >حمص</option>
            <option value={"اللاذقية"} >الاذقية</option>
            <option value={"طرطوس"} >طرطوس</option>
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
    

         
    {
        data && data.map((row , i)=>(
          <MDBListGroupItem key={i} className='d-flex justify-content-between align-items-center '>
            { dd == row.governorate ?
             <><div className='d-flex align-items-center'>
             <div className='ms-3'>
                 <p className='fw-bold mb-1'>{row.name}</p>
                 <p className='text-muted mb-0'>{row.Specialty}</p>
                 <p className='text-muted mb-0'>{row.phon}</p>
                 <p className='text-muted mb-0'>{row.email}</p>
                 <p className='text-muted mb-0'>{row.governorate}</p>
                 <p className='text-muted mb-0'>{row["clinic location"]}</p>
               </div>
             </div>
             <MDBBtn rounded className='mx-2' color='info' size='lg' onClick={handleButtonClick}>
             عرض المواعيد
           </MDBBtn></>
             :
             dd == "0" ?  <><div className='d-flex align-items-center'>
             <div className='ms-3'>
                 <p className='fw-bold mb-1'>{row.name}</p>
                 <p className='text-muted mb-0'>{row.Specialty}</p>
                 <p className='text-muted mb-0'>{row.phon}</p>
                 <p className='text-muted mb-0'>{row.email}</p>
                 <p className='text-muted mb-0'>{row.governorate}</p>
                 <p className='text-muted mb-0'>{row["clinic location"]}</p>
               </div>
             </div>
             <MDBBtn rounded className='mx-2' color='info' size='lg' onClick={handleButtonClick}>
             عرض المواعيد
           </MDBBtn></> :"" }
         
       </MDBListGroupItem>
        ))
      }

      
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
