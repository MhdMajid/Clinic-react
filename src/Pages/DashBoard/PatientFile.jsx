import React, { useEffect, useState } from 'react'
import { Axios } from '../../Axios'

const PatientFile = () => {
    const [data,setdata] = useState()
    useEffect(()=>{fetchdata()},[])
    const fetchdata=async () => {
    
        await Axios.get("admin/patient/files")
        .then((data=>{console.log(data.data.data)
            setdata(data.data.data)
            
        }))
        .catch((data)=>console.log(data))
        
    }

    const deleteDoctor = async (id) =>{
        await Axios.delete(`admin/delete/permanently/appointment/Booked/514`)
        .then((data)=>console.log(data))
        .catch((data)=>console.log(data))
        fetchdata()
    }
  return (
    <>
    <div
      class="table-responsive-lg" 
      style={{margin:"10px"}}
    >
      <table
          class="table table-primary"
      >
          <thead>
              <tr>
                  <th scope="col"> اسم المريض </th>
                  <th scope="col">الطبيب</th>
                 
                  <th scope="col">العمر</th>
                  <th scope="col">الهاتف</th>
                  <th scope="col">البريد الالكتروني</th>
                  <th scope="col">العنوان</th>
                  <th scope="col">الاجراء</th>
              </tr>
          </thead>
          <tbody>
              {
                  data && data.map((row , i )=>(
                  <tr >
                      <td >{row["Patient Name"]}</td>
                      <td>{row.Doctor}</td>
                      
                      <td>{row["Patient Age"]}</td>
                      <td>{row["Patient Phone"]}</td>
                      <td>{row["Patient Email"]}</td>
                      <td>{row["Patient Address"]}</td>
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
                  ))

              }
             
             
          </tbody>
      </table>
    </div>
    
  </>
  )
}

export default PatientFile