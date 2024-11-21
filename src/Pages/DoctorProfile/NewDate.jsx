import { MDBBtn } from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { Axios } from "../../Axios";

const NewDate = () => {
  // توضيح الـ API
  // هذا الكود يستخدم لتخزين موعد جديد للطبيب

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState({});

  const handleAddAppointment = async () => {
    // مسح الأخطاء قبل التحقق
    setErrors({});

    if (!date) {
      setErrors({ date: "الرجاء اختيار تاريخ" });
      return;
    }

    if (!time) {
      setErrors({ time: "الرجاء اختيار توقيت" });
      return;
    }

    // تنفيذ طلب إضافة الموعد
    try {
      const token = localStorage.getItem("token");
      const response = await Axios.post("doctor/store/appointment",
        {
          date,
          time,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        toast.success("تم اضافة موعد بنجاح");
        // تفريغ الحقول بعد الإضافة الناجحة
        setDate("");
        setTime("");
      } else {
        toast.error("فشلت عملية اضافة الموعد، الرجاء المحاولة مرة أخرى.");
      }
    } catch (error) {
      console.error("Error adding appointment:", error);
      toast.error("حدث خطأ ، الرجاء المحاولة مرة أخرى.");
      setDate("");
      setTime("");
    }
  };

  return (
    <div className="w-75">
      <h3 className="text-primary">اضافة موعد جديد</h3>
      <br />
      <div className="mb-3">
        <label className="form-label">اختيار التاريخ</label>
        <input
          type="date"
          className="form-control"
          placeholder="Add new Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {errors.date && <div className="text-danger">{errors.date}</div>}
        <br />
        <label className="form-label">اختيار الوقت</label>
        <input
          type="time"
          className="form-control"
          placeholder="Add new Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        {errors.time && <div className="text-danger">{errors.time}</div>}
        <br />
        <MDBBtn rounded className="mx-2" size="lg" color="primary" onClick={handleAddAppointment}>
          اضافة موعد
        </MDBBtn>
      </div>
    </div>
  );
};

export default NewDate;
