import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "./Info.css";
import "./InformationCard";

function Info() {
  return (
    <div className="info-section" id="services" align="right" dir ="rtl">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>من نحن</span>
        </h3>
        <p className="info-description">
         
          نحن في E-Clinic نؤمن بأن صحتك هي أثمن ما تملك. 
          لذلك قمنا بتطوير هذه المنصة لتوفير تجربة حجز مواعيد طبية سهلة وسريعة. 
          فريقنا المتخصص يعمل جاهداً لتوفير أحدث التقنيات وأكثرها أمانًا لتسهيل حياتك. 
          نحن نتعاون مع نخبة من الأطباء والعيادات المتخصصة في مختلف المجالات الطبية، 
          لنضمن لك الحصول على أفضل الرعاية الصحية. رسالتنا هي أن نكون شريكك الموثوق في رحلتك نحو عافية أفضل.
        </p>
      </div>

    </div>
  );
}

export default Info;
