import React, { useEffect, useState } from "react"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { Axios } from "../../Axios";

const DoctorsList = () => {
    const [data,setdata] = useState()
useEffect(()=>{fetchdata()},[])
const fetchdata=async () => {

    await Axios.get("admin/doctors")
    .then((data=>{console.log(data.data.data)
        setdata(data.data.data)
        
    }))
    .catch((data)=>console.log(data))
    
}

    const deleteDoctor = async (id) =>{
        await Axios.delete(`admin/delete/permanently/doctor/profile/${id}`)
        .then((data)=>console.log(data))
        .catch((data)=>console.log(data))
        fetchdata()
    }
    return (
      <>
        <div class="table-responsive-lg" style={{ margin: "10px" }}>
          <table class="table table-primary">
            <thead>
              <tr>
                <th scope="col">الاسم </th>
                <th scope="col">التخصص</th>
                <th scope="col">رقم الهاتف </th>
                <th scope="col">البريد الالكتروني </th>
                <th scope="col">المحافظة</th>
                <th scope="col">الموقع</th>
                <th scope="col">الاجراء</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((row, i) => (
                  <tr>
                    <td>{row.name}</td>
                    <td>{row.Specialty}</td>

                    <td>{row.phone}</td>
                    <td>{row.email}</td>
                    <td>{row.governorate}</td>
                    <td>{row["clinic location"]}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => deleteDoctor(row.id)}
                      >
                        حذف
                      </button>
                      <button
                        type="button"
                        class="btn btn-success"
                      >
                        نعديل
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                      >
                        عرض
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </>
    );
}

export default DoctorsList