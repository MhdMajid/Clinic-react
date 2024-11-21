import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle } from "mdb-react-ui-kit";
import PatientDetail from "../PatientDetail/PatientDetail";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Axios } from "../../Axios";

const AppointmentDetails = () => {
 
  const { type, id } = useParams();

  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    const fetchAppointmentDetails = async () => {
      try {
        const response = await Axios.get(`doctor/appointment/details/${type}/${id}`);
        setAppointment(response.data);
      } catch (error) {
        toast.error("حدث خطأ أثناء جلب تفاصيل الموعد");
      }
    };

    fetchAppointmentDetails();
  }, [type, id]);

  return (
    <div className="my-5" dir="rtl">
      <MDBRow>
        <MDBCol md="4">
          <div><h3 className="text-primary">تفاصيل الموعد</h3></div>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>التاريخ و الوقت:</MDBCardTitle>
              <MDBCardSubTitle>التاريخ: {appointment?.date || "غير متوفر"}</MDBCardSubTitle>
              <br />
              <MDBCardSubTitle>الوقت: {appointment?.time || "غير متوفر"}</MDBCardSubTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="8">
          <PatientDetail patientData={appointment?.patient || {}} />
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default AppointmentDetails;
