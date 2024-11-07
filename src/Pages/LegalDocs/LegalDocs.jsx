import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "./LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title" id="legal" dir="rtl">
      <h1 className="legal-siteTitle">
        <Link to="/">
          E-<span className="legal-siteSign">Clinic</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">معلومات عامة</p>
        <p className="legal-description" id="general-info">
        أهلاً بك في E- Clinic ، منصتك الصحية الموثوقة عبر الإنترنت. 
        تتمثل مهمتنا في توفير خدمات الرعاية الصحية و تأمين الوصول السهل إليها 
        و الخدمات الشخصية للأفراد الذين يبحثون عنن علاج من خبراء.
         باستخدام منصتنا، فإنك توافق على الشروط الواردة في سياسة الخصوصية وشروط الخدمة الخاصة بنا.
        </p>

        <p className="legal-title">سياسة الخصوصية</p>
        <p className="legal-description" id="privacy-policy">
        خصوصيتك ذات أهمية قصوى بالنسبة لنا. تحدد سياسة الخصوصية الخاصة بنا كيفية جمعنا 
        واستخدامنا وحماية معلوماتك الشخصية والطبية. 
        نضمن معالجة البيانات الآمنة، ويمكنك أن تثق في أن معلوماتك تُعامل بأقصى قدر من السرية.
        </p>

        <p className="legal-title">شروط الخدمة</p>
        <p className="legal-description" id="terms-of-service">
        عند استخدام E- Clinic، فإنك توافق على شروط الخدمة الخاصة بنا. 
        يشمل ذلك الإرشادات لاستخدام منصتنا والتفاعل مع الأطباء ومسؤوليات كلا الطرفين. 
        من الضروري فهم هذه الشروط لضمان تجربة سلسة لجميع المستخدمين.
        </p>

        
        <p className="legal-title">طريقة العمل</p>
        <p className="legal-description" id="how-it-works">
        تم تصميم E- Clinic لتبسيط الوصول إلى الرعاية الصحية. يمكنك اختيار أخصائي، جدولة موعد في عيادته، 
        بأبسط الطرق، كذلك يسمح للاطباء باستخدام هذه المنصة لجدولة المواعيد المناسبة لهم 
        و تنظيم هذه المواعيد و الاحتفاظ بملفات المرضى 
        </p>
      </div>

      <div className="legal-footer">
        <p>
          <br></br>
        </p>
      </div>
    </div>
  );
}

export default LegalDocs;
