import React ,{ useState }from 'react';
import axios from "axios";
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate, Link} from 'react-router-dom';
import './Login.css';
import { BaseUrl } from '../../Axios';
import Cookies from 'universal-cookie';



   
 function  Login() {
  
  const navigate = useNavigate();

  
 

 const cookies = new Cookies()


  const [email , setemail] = useState()
  const [pass , setpass] = useState()
  const [isDoctor , setisDoctor] = useState()
  const [isAdmin , setisAdmin] = useState()

  const handleButtonClick = async () => {
    await axios.post(`${BaseUrl}login` , {
      "password": pass ,
      "email" :  email
    })
    .then((data)=>{console.log(data.data.data.Admin)
      cookies.set("doctor" ,data.data.data.Doctor)
      cookies.set("admin" ,data.data.data.Admin)
      cookies.set("token" , data.data.data.authorization.token)
      if(data.data.data.Doctor === undefined){
        navigate('/dashboard')
        cookies.remove("doctor")
      }
      if(data.data.data.Admin === undefined){
        navigate('/DoctorProfile');
      }
       
       window.location.reload()
      
       
    })
    .catch((data)=>console.log(data))

 
    
  };

  if(cookies.get("token" !== undefined)){
    return navigate('/DoctorProfile')
  }
  return (
    <>
    


    
    
    <div className="login-section" id="login" >
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <h3 className="info-title"><span>تسجيل دخول</span></h3>
        <br/>
          
          <MDBInput
          onChange={(e)=> setemail(e.target.value)}
          wrapperClass='mb-4 ' label='البريد الالكتروني' id='form1' type='email'style={{ backgroundColor: '#ffffff'}}/> 
          <MDBInput onChange={(e)=> setpass(e.target.value)} wrapperClass='mb-4 ' label='كلمة المرور' id='form2' type='password' style={{ backgroundColor: '#ffffff'}}/>

         <div className="d-flex justify-content-between mx-3 mb-4" dir="rtl">
           <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='تذكر كلمة المرور' />
           <Link to ="/ForgetPassword">هل نسيت كلمة المرور؟</Link>
          </div>
 
           <MDBBtn className="mb-4" onClick={handleButtonClick}>تسجيل دخول</MDBBtn>

         <div className="text-center" dir="rtl">
           <p>تريد الانضمام لفريقنا الطبي ؟ </p>
           <p>تواصل معنا عبر البريد الالكتروني <a href="mailto:admin4eclinic@gmail.com">هنا</a></p>
           <br/>
           <p>تسجيل الدخول كمدير برنامج <Link to ="/Register"> هنا </Link></p> 
          </div>

        </MDBContainer>
     </div>
    <div>
        <p> 
          <br>
          </br>
        </p>
      </div>
    </>

  );
}

export default Login;