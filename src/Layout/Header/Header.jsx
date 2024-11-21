import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";


import { toast } from "react-toastify";
import Cookies from 'universal-cookie';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };
  const navigate = useNavigate();
  const cookie = new Cookies()
  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  const goto = async ()=>{

    // if(cookie.get("admin") !== undefined ){
    //   navb("/dashboard")
    // }
    // else if(cookie.get("doctor") !== undefined ){
    //   navb("/DoctorProfile")
    // }
    // else{
    //   navb("/Login")
    // }
    
    if(await cookie.get("token")){
      if(await cookie.get("doctor") ){
        
        navigate('/DoctorProfile');
        return;
      }
      if(await cookie.get("admin")  ){
         navigate('/dashboard')
         return;
      }
    }else{
      navigate('/Login');
    }
    // navigate('/Login');
    console.log(cookie.get("admin"))
    console.log(cookie.get("doctor"))
    
    
  }

  return (
    <>
     <div className="navbar-section" dir="rtl">
      <h1 className="navbar-title">
        <Link to="/">
          E- <span className="navbar-sign">Clinic</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            الصفحة الرئيسية
          </Link>
        </li>
        <li>
          <Link to="About" className="navbar-links">
            حول الموقع
          </Link>
        </li>
        
        <li>
          <Link onClick={goto} className="navbar-links">


          {
            cookie.get("token") ? 
                "لوحة التحكم"
            
            : "هل انت طبيب "
          }
            
          </Link>
        </li>
        <li>
          <Link to={-1} className="navbar-links">
          الصفحة السابقة
          </Link>
        </li>
        
      </ul>

      <div
        className=""
      
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        {/* <FontAwesomeIcon icon={faCommentDots} /> Live Chat */}
      </div>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              الصفحة الرئيسية
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="About">
              حول الموقع
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="login">
            هل أنت طبيب؟
            </Link>
          </li>
          <li>
            <Link to={-1} className="navbar-links">
            الصفحة السابقة
            </Link>
          </li>
          
          
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
    </>
  )
}

export default Header

