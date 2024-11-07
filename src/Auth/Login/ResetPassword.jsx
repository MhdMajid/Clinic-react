import React ,{ useState, useEffect } from 'react';
import { MDBContainer, MDBInput, MDBBtn}from 'mdb-react-ui-kit';
import { useNavigate, Link} from 'react-router-dom';
import './Login.css';


function ForgetPassword() {

   
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate('/Login');
    };
    const [email, setEmail] = useState("")
    
  
    return (
      <><div className="login-section" id="login" >
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <h3 className="info-title"><span> تعيين كلمة مرور جديدة</span></h3>
          <br/>
          <br/>
            
          <MDBInput wrapperClass='mb-4 ' label='كلمة المرور جديدة' id='form2' type='password' style={{ backgroundColor: '#ffffff'}}/>
          <MDBInput wrapperClass='mb-4 ' label='تأكيد كلمة المرور' id='form2' type='password' style={{ backgroundColor: '#ffffff'}}/>
          <MDBBtn className="mb-4" onClick={handleButtonClick}>حفظ</MDBBtn>
  
        
  
        </MDBContainer>
       </div>
      
        <br/>
       
      </>
  
    );
  }
  
  export default ForgetPassword;