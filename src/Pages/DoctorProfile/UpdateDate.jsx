import { MDBBtn } from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Axios } from "../../Axios";

const UpdateDate = () => {
  // Get the appointment ID from the URL (assuming you pass it as a param)
  const { appointmentId } = useParams();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    // Fetch the current appointment details to populate the form fields
    const fetchAppointment = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await Axios.get(`doctor/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const appointment = response.data.appointments.find(app => app.id === appointmentId);
        if (appointment) {
          setDate(appointment.date);
          setTime(appointment.time);
        }
      } catch (error) {
        console.error("Error fetching appointment details:", error);
        toast.error("فشل في استرجاع بيانات الموعد");
      }
    };
    
    fetchAppointment();
  }, [appointmentId]);

  const handleAddAppointment = async () => {
    // Clear errors before validation
    setErrors({}); 

    if (!date) {
      setErrors({ date: "الرجاء اختيار تاريخ" });
      return; 
    }

    if (!time) {
      setErrors({ time: "الرجاء اختيار توقيت" });
      return; 
    }

    // Check if the new date and time are different from the old values
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/doctor/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const currentAppointment = response.data.appointments.find(app => app.id === appointmentId);

      if (currentAppointment.date === date && currentAppointment.time === time) {
        toast.info("لم يتم تغيير الموعد");
        return; // Prevent update if the values are the same
      }

      // Update the appointment
      const updateResponse = await axios.put(
        `http://127.0.0.1:8000/api/doctor/edit/appointment/${appointmentId}`, 
        { date, time }, 
        { 
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (updateResponse.status === 200) {
        toast.success('تم تعديل الموعد بنجاح');
        // Clear the form fields after successful submission
        setDate('');
        setTime('');
      } else {
        toast.error('فشلت عملية تعديل الموعد، الرجاء المحاولة مرة أخرى.');
      }
    } catch (error) {
      console.error('Error updating appointment:', error);
      toast.error('حدث خطأ ، الرجاء المحاولة مرة أخرى.');
    }
  };

  return (
    <div className="w-75" dir="rtl">
      <h3 className="text-primary">تعديل الموعد</h3>
      <br />
      <div className="mb-3">
        <label htmlFor="date" className="form-label">اختيار التاريخ</label>
        <input
          type="date"
          id="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {errors.date && <div className="text-danger">{errors.date}</div>}
        <br />
        
        <label htmlFor="time" className="form-label">اختيار الوقت</label>
        <input
          type="time"
          id="time"
          className="form-control"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        {errors.time && <div className="text-danger">{errors.time}</div>}
        <br />

        <MDBBtn
          rounded
          className="mx-2"
          size="lg"
          color="primary"
          onClick={handleAddAppointment}
        >
          حفظ التغييرات
        </MDBBtn>
      </div>
    </div>
  );
};

export default UpdateDate;
