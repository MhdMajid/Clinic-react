import React, { useEffect, useState } from "react"
import Doctor from "../../Assets/doctor-picture.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarCheck , faAngleUp } from "@fortawesome/free-solid-svg-icons"
import {  useNavigate  } from "react-router-dom"
import "./Hero.css"

function Hero() {
  // const navigate = useNavigate()
  //  const [goUp, setGoUp] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const navigate = useNavigate()
  const handleBookAppointmentClick = () => {
    navigate("/My-Booking")
  }

  // useEffect(() => {
  //   const onPageScroll = () => {
  //     if (window.scrollY > 600) {
  //       setGoUp(true)
  //     } else {
  //       setGoUp(false)
  //     }
  //   }
  //   window.addEventListener("scroll", onPageScroll)

  //   return () => {
  //     window.removeEventListener("scroll", onPageScroll)
  //   }
  // }, [])

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section" dir="rtl">
          <h2 className="text-title">
           صحتك أولويتنا 💙
          </h2>
          <p className="text-descritpion">
          احجز موعدك الطبي بثقة واطمئنان. منصتنا تضمن لك  حجز موعد مع طبيبك المفضل في أي وقت ومن أي مكان. قل وداعًا للانتظار الطويل في العيادات، واستمتع بتجربة صحية أكثر سلاسة
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} />  بدء الحجز
          </button>
          
          
        </div>

       
      </div>
 
      <div
        //  onClick={scrollToTop}
        //  className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        {/* <FontAwesomeIcon icon={faAngleUp} />/ */}
      </div>
    </div>
  )
}

export default Hero
