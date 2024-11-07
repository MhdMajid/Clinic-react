import React ,{ useState, useEffect } from 'react';
import { MDBContainer, MDBInput, MDBBtn}from 'mdb-react-ui-kit';
import { useNavigate, Link} from 'react-router-dom';
import './Login.css';


   
function ForgetPassword() {

   
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/ResetPassword');
  };
  const [email, setEmail] = useState("")
  

  return (
    <><div className="login-section" id="login" >
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <h3 className="info-title"><span>طلب اعادة تعيين كلمة مرور</span></h3>
        <br/>
        <p>قم باضافة بريدك الالكتروني ثم اضغط على زر طلب الرابط ليصلك رابط يمكنك من اعادة تعيين كلمة سر جديدة</p>
        <br/>
          
        <MDBInput wrapperClass='mb-4 ' label='البريد الالكتروني' id='form1' type='email'style={{ backgroundColor: '#ffffff'}}/> 
        <MDBBtn className="mb-4" onClick={handleButtonClick}>طلب الرابط</MDBBtn>

        <div className="text-center" dir="rtl">
          
         <p>العودة لصفحة تسجيل الدخول <Link to ="/Login"> هنا </Link></p> 
        </div>

      </MDBContainer>
     </div>
    
      <br/>
     
    </>

  );
}

export default ForgetPassword;