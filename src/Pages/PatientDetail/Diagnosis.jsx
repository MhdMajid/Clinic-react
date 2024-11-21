import React from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBContainer, MDBRow, MDBCol}from "mdb-react-ui-kit";
import PatientDetail from "./PatientDetail";

const Diagnosis   = () => {

    {/**
      ها كود التشخيص
      بيمشي ع كل المواعيد ما عدا تبع اليوم 
  
      */}
   

  
  
    return(
  
    <MDBContainer breakpoint="sm" dir="rtl" >
        <div>
            <PatientDetail/>
  
        </div>

        <h3 className="text-status" dir="rtl">التشخيص: </h3>
            <MDBRow>
                <MDBCol md='5'>
                     
                    <MDBCard shadow='0' border='primary' background='white' className='mb-3'>
                  
                         <MDBCardBody >
                          <MDBCardTitle className='text-primary' >التشخيص </MDBCardTitle>
                          <MDBCardText>
                                   تفاصيل التشخيص
                              </MDBCardText>
                          </MDBCardBody>
                      </MDBCard>
                </MDBCol>

                <MDBCol md='5'>
                <MDBCard shadow='0' border='primary' background='white' className='mb-3'>
                  <MDBCardBody >
                     <MDBCardTitle className='text-primary' >الخطة العلاجية </MDBCardTitle>
                     <MDBCardText>
                           تفاصيل الخطة
                      </MDBCardText>
                  </MDBCardBody>
                    </MDBCard>
                 </MDBCol>
     
             </MDBRow>
  <br/>
             <MDBRow>
             <MDBCol md='5'>         
            <MDBCard shadow='0' border='primary' background='white' className='mb-3'>
                  <MDBCardBody >
                     <MDBCardTitle className='text-primary' >الاختبارات الطبية</MDBCardTitle>
                     <MDBCardText>
                           تفاصيل الاختبارات الطبية
                      </MDBCardText>
                  </MDBCardBody>
              </MDBCard>
             </MDBCol>

             <MDBCol md='5'>
              <MDBCard shadow='0' border='primary' background='white' className='mb-3'>
                  <MDBCardBody >
                     <MDBCardTitle className='text-primary' >الصور الشعاعية</MDBCardTitle>
                     <MDBCardText>
                           تفاصيل الصورالشعاعية
                      </MDBCardText>
                  </MDBCardBody>
              </MDBCard>
              
             </MDBCol>
             </MDBRow>
     <br/>
    
          
    </MDBContainer>   
        
  )
  
  }
  export default Diagnosis  