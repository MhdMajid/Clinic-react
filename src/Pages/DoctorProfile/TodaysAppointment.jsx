import React, { useState, useEffect } from 'react';
import { MDBTable, MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Axios } from '../../Axios';

const TodaysAppointment = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]); // Initialize as an empty array
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch today's appointments on component mount
  useEffect(() => {
    Axios.get('doctor/booked/appointments/today')
      .then(response => {
        console.log(response.data); // Check the structure of response data
        setAppointments(Array.isArray(response.data) ? response.data : []); // Ensure response is an array
      })
      .catch(error => console.error('Error fetching appointments:', error));
  }, []);

  const handleAddDiagnosis = (appointmentId) => {
    navigate(`/AddDiagnosis/${appointmentId}`);
  };

  const handleEditAppointment = (appointmentId) => {
    navigate(`/UpdateDate/${appointmentId}`);
  };

  const handleDeleteAppointment = (appointmentId) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      Axios.delete(`doctor/edit/appointment/${appointmentId}`)
        .then(() => setAppointments(appointments.filter(app => app.id !== appointmentId)))
        .catch(error => console.error('Error deleting appointment:', error));
    }
  };

  const filteredAppointments = appointments.filter(
    (appointment) => appointment.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MDBContainer breakpoint="sm" dir="rtl">
      <h3 className="text-primary">المواعيد المحجوزة اليوم</h3>
      <br />

      {/* Search Section */}
      <MDBRow className="d-flex align-items-start bg-body-tertiary mb-3">
        <MDBCol md="8">
          <form className="input-group" dir="ltr">
            <input
              type="search"
              className="form-control"
              placeholder="اضغط هنا"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <MDBBtn outline color="primary">بحث</MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>

      <MDBTable striped hover>
        <thead className="table-light">
          <tr>
            <th>التاريخ</th>
            <th>الاسم</th>
            <th>رقم الموبيل</th>
            <th>البريد الالكتروني</th>
            <th>خيارات</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((appointment) => (
            <tr className="table-light" key={appointment.id}>
              <td>{appointment.time}</td>
              <td>{appointment.name}</td>
              <td>{appointment.phone}</td>
              <td>{appointment.email}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleAddDiagnosis(appointment.id)}
                >
                  اضافة تشخيص
                </button>
                <button
                  type="button"
                  className="btn btn-success mx-2"
                  onClick={() => handleEditAppointment(appointment.id)}
                >
                  تعديل
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDeleteAppointment(appointment.id)}
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </MDBTable>
    </MDBContainer>
  );
};

export default TodaysAppointment;
