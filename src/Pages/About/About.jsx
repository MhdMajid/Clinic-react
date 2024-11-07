import './About.css';
import {Doctor,SolutionStep} from '../../Components/index'
import DoctorsGroupImage from "../../Assets/doctor-group.png";

const About = () => {
  return (
   <>
    <div className="about-section" id="about" dir="rtl">
      <div className="about-image-content">
        <img src={DoctorsGroupImage} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>حول الموقع</span>
        </h3>
        <p className="about-description">
        مرحباً بكم في E-Clinic، موقعكم الموثوق للرعاية الصحية الشاملة والشخصية.
         يقدم أطبائنا الخبراء خدمات الحجز  في عياداتهم عبر الإنترنت لتوفير وسيلة أسهل وأكثر ملاءمة للتواصل.
        </p>

        <h4 className="about-text-title">الخدمات المتوفرة لك</h4>

        <SolutionStep
          title="اختر اخصائياً"
          description="ابحث عن الأخصائي الأفضل لحالتك واحجز بسهولة. يعتبر فريقنا الطبي صحتك في أولوياتهم، ويقدمون لك رعاية مخصصة."
        />

        <SolutionStep
          title="قم باختيار موعد"
          description="اختر التاريخ والوقت المناسبين لك، ودع فريقنا المؤلف من الأطباء المحترفين يضمن راحتك من خلال رعاية شخصية."
        />

        <SolutionStep
          title="احصل على أفضل الخطط العلاجية"
          description="أطبائنا ذوو الخبرة هنا لتقديم المشورة وخطط العلاج الشخصية، مما يساعدك على تحقيق أفضل صحة ممكنة."
        />
      </div>
    </div>
  
   </>
  )
}

export default About
