import { useState, useEffect } from 'react';
import axios from 'axios';
import { Axios } from '../../Axios';

const FinishedAppointment = () => {
  const [appointments, setAppointments] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/doctor/completed/appointments');
        setAppointments(Array.isArray(response.data) ? response.data : []); // Ensure response is an array
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setAppointments([]); // Fallback to empty array in case of error
      }
    };

    fetchAppointments();
  }, []);

  const navigateToDetails = (type, id) => {
    // Implement navigation to appointment details page
  };

  const navigateToPatientFile = (patientFile) => {
    // Implement navigation to patient file
  };

  const deleteAppointment = async (type, id) => {
    try {
      await Axios.delete(`doctor/delete/appointment/${type}/${id}`);
      setAppointments(appointments.filter(appointment => appointment.id !== id));
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  return (
    <div className="w-100">
      <h3 className="text-primary">المواعيد المنتهية</h3>
      <table className="table table-striped-columns table-hover table-borderless table-success table-striped align-middle">
        <thead className="table-light">
          <tr>
            <th>التاريخ</th>
            <th>الاسم</th>
            <th>رقم الموبيل</th>
            <th>البريد الالكتروني</th>
            <th>خيارات</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {appointments.map((appointment) => (
            <tr className="table-light" key={appointment.id}>
              <td>{appointment.date}</td>
              <td>{appointment.name}</td>
              <td>{appointment.mobile}</td>
              <td>{appointment.email}</td>
              <td>
                <button type="button" className="btn btn-primary" onClick={() => navigateToDetails(appointment.type, appointment.id)}>
                  التفاصيل
                </button>
                <button type="button" className="btn btn-warning mx-2" onClick={() => navigateToPatientFile(appointment.patient_file)}>
                  ملف المريض
                </button>
                <button type="button" className="btn btn-danger" onClick={() => deleteAppointment(appointment.type, appointment.id)}>
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinishedAppointment;
