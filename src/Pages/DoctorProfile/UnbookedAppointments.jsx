import React, { useEffect, useState } from "react";
import { MDBTable, MDBBtn, MDBBadge, MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import { Axios } from "../../Axios";

const UnbookedAppointments = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch unbooked appointments on component mount
  useEffect(() => {
    Axios.get('doctor/profile')
      .then(response => {
        // Assuming the unbooked appointments are in the lower section of the response data
        setAppointments(response.data.unbookedAppointments || []);
      })
      .catch(error => {
        console.error("Error fetching appointments:", error);
        toast.error("Failed to fetch appointments");
      });
  }, []);

  // Handle update appointment
  const handleUpdateAppointment = (appointmentId) => {
    navigate(`/UpdateDate/${appointmentId}`);
  };

  // Handle delete appointment
  const handleDeleteAppointment = (type, id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      Axios.delete(`doctor/delete/appointment/${type}/${id}`)
        .then(() => {
          setAppointments(appointments.filter(app => app.id !== id));
          toast.success("Appointment deleted successfully");
        })
        .catch(error => {
          console.error("Error deleting appointment:", error);
          toast.error("Failed to delete appointment");
        });
    }
  };

  // Filter appointments based on search query
  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.phone.includes(searchQuery) || appointment.date.includes(searchQuery)
  );

  return (
    <div className="table-responsive-lg">
      <div><h3 className="text-primary">المواعيد غير المحجوزة</h3></div>
      
      {/* Search Section */}
      <MDBRow className="d-flex align-items-start bg-body-tertiary mb-3" dir="rtl">
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

      {/* Appointments Table */}
      <MDBTable striped hover dir="rtl">
        <thead className="table-light">
          <tr>
            <th>التاريخ</th>
            <th>الوقت</th>
            <th>رقم الموبيل</th>
            <th>الحالة</th>
            <th>خيارات</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {filteredAppointments.map((appointment) => (
            <tr key={appointment.id} className="table-light">
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.phone}</td>
              <td>
                <MDBBadge size="lg" color="success" pill>
                  متوفر
                </MDBBadge>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-success mx-2"
                  onClick={() => handleUpdateAppointment(appointment.id)}
                >
                  تحديث
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDeleteAppointment(appointment.type, appointment.id)}
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </MDBTable>
    </div>
  );
};

export default UnbookedAppointments;
