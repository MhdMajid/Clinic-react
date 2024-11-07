import React from "react";
import Doctor from "../../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "./BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/My-Booking");
  };
  

  return (
    <><div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content" dir="rtl">
        <h3 className="ba-title">
          <span>لماذا E- Clinic</span>
        </h3>
        <p className="ba-description">
          جرب الأسباب التي تجعل منصتنا الأفضل، و انضم الينا في رحلة نحو صحة أفضل
          و حياة أكثر سعادة
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> أفضل الأطباء المختصين
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> الرعاية الطارئة
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> التوافر الدائم 24/7
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> التسجيل السريع و السهل
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> احجز موعدك الآن
        </button>
      </div>
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

export default BookAppointment;
