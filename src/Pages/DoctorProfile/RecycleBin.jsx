import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Axios } from '../../Axios';

export default function RecycleBin() {
  const [deletedAppointments, setDeletedAppointments] = useState([]);
  const [deletedPatientFiles, setDeletedPatientFiles] = useState([]);

  // Fetch deleted appointments and patient files
  useEffect(() => {
    const fetchRecycleBinData = async () => {
      try {
        const appointmentsResponse = await Axios.get('doctor/recycle-bin');
        setDeletedAppointments(appointmentsResponse.data.appointments || []);
        setDeletedPatientFiles(appointmentsResponse.data.patient_files || []);
      } catch (error) {
        console.error("Error fetching recycle bin data:", error);
      }
    };

    fetchRecycleBinData();
  }, []);

  // Restore an appointment
  const restoreAppointment = async (type, id) => {
    try {
      await Axios.post(`doctor/restoration/appointment/${type}/${id}`);
      setDeletedAppointments(deletedAppointments.filter(appointment => appointment.id !== id));
    } catch (error) {
      console.error("Error restoring appointment:", error);
    }
  };

  // Restore a patient file
  const restorePatientFile = async (id) => {
    try {
      await Axios.post(`doctor/restoration/patient/file/${id}`);
      setDeletedPatientFiles(deletedPatientFiles.filter(file => file.id !== id));
    } catch (error) {
      console.error("Error restoring patient file:", error);
    }
  };

  return (
    <MDBContainer>
      <h3 className="text-primary">المواعيد المحذوفة</h3>
      <MDBTable align="middle">
        <MDBTableHead light>
          <tr>
            <th scope="col">التاريخ</th>
            <th scope="col">الوقت</th>
            <th scope="col">الحالة</th>
            <th scope="col">خيارات</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {deletedAppointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.status}</td>
              <td>
                <MDBBtn color="link" size="sm" onClick={() => restoreAppointment(appointment.type, appointment.id)}>
                  <FontAwesomeIcon icon={faArrowRotateLeft} />
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>

      <br />

      <h3 className="text-primary">ملفات المرضى المحذوفة</h3>
      <MDBTable align="middle">
        <MDBTableHead light>
          <tr>
            <th scope="col">الاسم</th>
            <th scope="col">البريد الالكتروني</th>
            <th scope="col">العنوان</th>
            <th scope="col">خيارات</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {deletedPatientFiles.map(file => (
            <tr key={file.id}>
              <td>{file.name}</td>
              <td>{file.email}</td>
              <td>{file.address}</td>
              <td>
                <MDBBtn color="link" size="sm" onClick={() => restorePatientFile(file.id)}>
                  <FontAwesomeIcon icon={faArrowRotateLeft} />
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}
