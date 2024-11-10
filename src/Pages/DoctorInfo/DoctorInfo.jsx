import "./DoctorInfo.css";
import img1 from "../../Assets/doctor.png";
import img2 from "../../Assets/calendar.png";
import { useNavigate, useParams } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardImage,
  MDBContainer,
} from "mdb-react-ui-kit";
import axios from "axios";
import { BaseUrl } from "../../Axios";
import { useEffect, useState } from "react";

function DoctorInfo() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [doctorInfo, setDoctorInfo] = useState();
  const [nullDate, setnullDate] = useState();
  const [DateAvilabel, setDateAvilabel] = useState();
  const [checkDate, setcheckDate] = useState();
  useEffect(() => {
    fetchDoctor();
  },[]);

  const fetchDoctor = async () => {
    await axios
      .get(`${BaseUrl}patient/page/doctor/${id}`)
      .then((data) => {
        console.log(data.data.data[1]);
        setDoctorInfo(data.data.data[0]);
        setDateAvilabel(data.data.data[1]);
      })
      .catch((e) => console.log(e));
  };

  const handleButtonClick = () => {
    if(checkDate === undefined){
      setnullDate("يرجى اختيار موعد للحجز و المتابعة")
    }else{
      navigate(`/AppointmentForm/${checkDate}`);
    }
  };

  return (
    <>
    {nullDate && 
     <div
     className="alert alert-primary test"
     role="alert"
     style={{
      display: "flex" , 
      flexDirection: "row",
      flexWrap: "nowrap",
      alignContent: "center",
      justifyContent: "center",
     }}
   >
    <h1 className=""> {nullDate}</h1>
    
   </div>}
    
      <div className="info-title-content text-center" dir="rtl">
        <h3 className="info-title">
          <span>المواعيد المتوفرة لدى الطبيب</span>
        </h3>
      </div>

      <MDBContainer dir="rtl" fluid>
        {doctorInfo && (
          <MDBCard
            style={{
              backgroundImage: "linear-gradient(to right, #ECF2FF, #FBFCFF)",
            }}
          >
            <MDBRow className="g-0" dir="rtl">
              <MDBCol md="1">
                <MDBCardImage src={img1} alt="..." width={40} fluid />
              </MDBCol>
              <MDBCol md="13">
                <MDBCardBody>
                  <MDBCardTitle>
                    {" "}
                    <h3> معلومات الطبيب </h3>
                  </MDBCardTitle>
                  <MDBCardText>
                    <h5>اسم الطبيب {doctorInfo.Name}</h5>
                    <h5>الاختصاص {doctorInfo.Specialty} </h5>
                    <h5>سنوات الخبرة {doctorInfo.Experience} </h5>
                    {/* <h5>العمر {}</h5> */}
                    <h5>البريد الالكتروني {doctorInfo.Email}</h5>
                    <h5>رقم العيادة {doctorInfo.Phone}</h5>
                    <h5>مكان العمل {doctorInfo.Hospital}</h5>
                    {/* <h5>المحافظة {}</h5> */}
                    <h5>العنوان {doctorInfo["Clinic Location"]}</h5>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        )}

        <br></br>

        <MDBCard
          style={{
            backgroundImage: "linear-gradient(to left, #ECF2FF, #FBFCFF)",
          }}
        >
          <MDBRow className="g-0" dir="rtl">
            <MDBCol md="1">
              <MDBCardImage src={img2} alt="..." fluid width={40} />
            </MDBCol>
            <MDBCol md="13">
              <MDBCardBody>
                <MDBCardTitle>
                  {" "}
                  <h3>جدول المواعيد</h3>
                </MDBCardTitle>
                <MDBCardTitle>
                  {" "}
                  <h5>قم بتحديد الموعد المناسب ثم اضغط على تثبيت الموعد</h5>
                </MDBCardTitle>

                <div>
                  <ul className="list-group ">
                    {DateAvilabel &&
                      DateAvilabel.map((row, i) => (
                        <li key={i} className="list-group-item">
                          <input
                          style={{margin:"15px"}}
                            type="radio"
                            name="test"
                            id={`ts${i}`}
                            onChange={() => setcheckDate(row.id)}
                          />
                          <label for={`ts${i}`}>
                            {" "}
                             تاريخ : {row.Date} توقيت : {row.Time}
                          </label>
                        </li>
                      ))}
                  </ul>
                </div>
              </MDBCardBody>
              <div className="text-center">
                <MDBBtn onClick={handleButtonClick}>
                  {" "}
                  <h5>تحديد الموعد</h5>
                </MDBBtn>
              </div>
              <br></br>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
      <br></br>
    </>
  );
}

export default DoctorInfo;
