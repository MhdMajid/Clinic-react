import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer-section" dir="rtl">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              E- <span className="ft-sign">Clinic</span>
            </p>
            <p className="ft-description">
            احجز موعدك الطبي بثقة واطمئنان. 
            منصتنا تضمن لك حجز موعد مع طبيبك المفضل في أي وقت ومن أي مكان. 
            قل وداعًا للانتظار الطويل في العيادات، واستمتع بتجربة صحية أكثر سلاسة
            </p>
          </div>

          
        </div>

  
        <div className="ft-list">
          <p className="ft-list-title">معلومات قانونية</p>
          <ul className="ft-list-items">
            <li>
              <Link to="/LegalDocs#general-info">معلومات عامة</Link>
            </li>
            <li>
               <Link to="/LegalDocs#privacy-policy">سياسة الخصوصية</Link>
            </li>
            <li>
              <Link to="/LegalDocs#terms-of-service">شروط الخدمة</Link>
            </li>
            <li>
              <Link to="/LegalDocs#how-it-works">طريقة العمل</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">تواصل مع فريق العمل</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:admin4eclinic@gmail.com">admin4eclinic@gmail.com</a>
            </li>
            
            <li>
              <a href="tel:+963 940 517 696" dir="ltr">+963 940 517 696</a>
            </li>
            <li>
              <a href="tel:+963 933 060 761"dir="ltr">+963 933 060 761</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>
          حسابات فريق العمل على مواقع التواصل الاجتماعي:
        </p>

        <ul className="ft-social-links">
          
          <li>
            <a
              href="https://www.facebook.com/share/Jmt4ekPTmXhHbaTc/"
              title="Mohammad's FaceBook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
              
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/share/ZfYUhztF5ps7rfaj/"
              title="Shimaa's FaceBook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
              
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
