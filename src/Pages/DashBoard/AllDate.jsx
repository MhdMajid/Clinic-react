import React, { useEffect, useState } from "react"
import { Axios } from "../../Axios";

const AllDate = () => {


    const [data,setdata] = useState()
    useEffect(()=>{fetchdata()},[])
    const fetchdata=async () => {
    
        await Axios.get("admin/appointments")
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
                  <th scope="col">الطبيب صاحب الموعد </th>
                  <th scope="col">تاريخ</th>
                 
                  <th scope="col">الوقت</th>
                  <th scope="col">الحالة</th>
                  <th scope="col">الاجراء</th>
              </tr>
          </thead>
          <tbody>
              {
                  data && data.map((row , i )=>(
                  <tr >
                      <td >{row["By Doctor"]}</td>
                      <td>{row.Date}</td>
                      
                      <td>{row.Time}</td>
                      <td>{row.Status}</td>
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

export default AllDate