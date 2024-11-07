import './DoctorInfo.css'
import img1 from'../../Assets/doctor.png'
import img2 from'../../Assets/calendar.png'
import { useNavigate, useParams } from 'react-router-dom'
import {
  MDBCard, MDBCardBody, MDBCardTitle,
  MDBCardText, MDBRow, MDBCol,
  MDBBtn, MDBCardImage, MDBContainer } from 'mdb-react-ui-kit';

function DoctorInfo(){
  const navigate = useNavigate();
 
  
  const handleButtonClick = () => {
    navigate('/AppointmentForm');
  };

return (
<>
<div className="info-title-content text-center" dir='rtl'>
        <h3 className="info-title">
          <span>المواعيد المتوفرة لدى الطبيب</span>
        </h3>
</div>

<MDBContainer dir='rtl' fluid >
  
  <MDBCard style={{  backgroundImage: 'linear-gradient(to right, #ECF2FF, #FBFCFF)' }} >
      <MDBRow className='g-0' dir="rtl">
        <MDBCol md='1'>
          <MDBCardImage src={img1} alt='...' width={40}fluid/>
        </MDBCol>
        <MDBCol md='13'>
          <MDBCardBody>
            <MDBCardTitle> <h3> معلومات الطبيب </h3></MDBCardTitle>
            <MDBCardText>
            <h5>اسم الطبيب</h5>
            <h5>الاختصاص</h5>
            <h5>سنوات الخبرة </h5>
            <h5>العمر </h5>
            <h5>البريد الالكتروني</h5>
            <h5>رقم العيادة</h5>
            <h5>المحافظة</h5>
            <h5>العنوان</h5>

            </MDBCardText>
            
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

<br></br>


        <MDBCard style={{  backgroundImage: 'linear-gradient(to left, #ECF2FF, #FBFCFF)' }}>
        <MDBRow className='g-0' dir="rtl">
        <MDBCol md='1'>
          <MDBCardImage src={img2} alt='...' fluid width={40}/>
        </MDBCol>
        <MDBCol md='13'>
        <MDBCardBody>
          <MDBCardTitle> <h3>جدول المواعيد</h3></MDBCardTitle>
          <MDBCardTitle> <h5>قم بتحديد الموعد المناسب ثم اضغط على تثبيت الموعد</h5></MDBCardTitle>
            <div>
                <ul className='list-group ' >
                      <li className="list-group-item">
                        <input type="radio" name='test' id='ts1' />
                        <label className='m-2' for="ts1">9:00 AM</label>
                      </li>
                      <li className="list-group-item">
                        <input type="radio" name='test' id='ts2' />
                        <label className='m-2' for="ts2">9:00 AM</label>
                      </li>
                      <li className="list-group-item">
                        <input type="radio" name='test' id='ts3' />
                        <label className='m-2' for="ts3">9:00 AM</label>
                      </li>
                      <li className="list-group-item">
                        <input type="radio" name='test' id='ts4' />
                        <label className='m-2' for="ts4">9:00 AM</label>
                      </li>
                      
                    </ul>
             </div>
             
          </MDBCardBody>
          <div className="text-center">
             <MDBBtn onClick={handleButtonClick} > <h5>تحديد الموعد</h5></MDBBtn>
          </div>
          <br></br>
        </MDBCol>
      </MDBRow>

          
        </MDBCard>

</MDBContainer> 
<br></br>

</>
)
}

export default DoctorInfo
