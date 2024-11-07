import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn
}
from 'mdb-react-ui-kit';
import { useNavigate, Link} from 'react-router-dom';
import './Register.css';


function Register() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
  navigate('/DashBoard');
  
};
  
    return (
      <><div className="Register-section" id="register" >
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <h3 className="info-title"><span>تسجيل دخول كمدير النظام</span></h3>
          <br/>
            <MDBInput wrapperClass='mb-4 ' label='البريد الالكتروني' id='form1' type='email'style={{ backgroundColor: '#ffffff'}}/> 
            <MDBInput wrapperClass='mb-4 ' label='كلمة المرور' id='form2' type='password' style={{ backgroundColor: '#ffffff'}}/>
  
             <MDBBtn className="mb-4" onClick={handleButtonClick}>تسجيل دخول</MDBBtn>
  
          </MDBContainer>
       </div>
     
        <br/>
        
      </>
  
    );
  }
  
  export default Register;
