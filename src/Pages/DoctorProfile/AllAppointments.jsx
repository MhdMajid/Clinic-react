import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const AllApppintments = () => {

    const nav = useNavigate();
    const NavigateTo = () => {
        nav("/AppointmentForm");}
        const [T,setT] = useState("")

    return (
          
        <div className="table-responsive-lg">
         
            <div class="input-group mb-3">
      {/* <span class="input-group-text">prefix</span> */}
      <button className="btn btn-primary input-group-text"
      onClick={()=>toast.info("i'm cliked")}
      >Add new Date</button>
      <input
        type="datetime-local"
        name="T"
        id="name"
        onChange={(e)=>setT(e.target.value)}

        class="form-control"
        placeholder="Add new Date "
      />
      
    </div>
        <table className="table  table-hover table-borderless  table-success table-striped ">
          <thead className="table-primary">
            <h3 className="text-primary">Booked Appointments Today</h3>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr className="table-primary">
              <td >10/10/2010</td>
              <td >03:00</td>
              <td>Name</td>
              <td>+963912345678</td>
              <td>Test@gmail.com</td>
              <td>Damac/test/tset</td>
              <td>
                <button type="button" className="btn btn-primary" onClick={()=>{nav('/PatientDetail')}}> Details</button>
                <button type="button" className="btn btn-success mx-2"> Edit</button>
                <button type="button" className="btn btn-danger "> Delete</button>
              </td>
            </tr>
            <tr className="table-primary">
              <td >10/10/2010</td>
              <td >03:00</td>
              <td>Name</td>
              <td>+963912345678</td>
              <td>Test@gmail.com</td>
              <td>Damac/test/tset</td>
              <td>
                <button type="button" className="btn btn-primary"> Details</button>
                <button type="button" className="btn btn-success mx-2"> Edit</button>
                <button type="button" className="btn btn-danger "> Delete</button>
              </td>
            </tr>
            <tr className="table-primary">
              <td >10/10/2010</td>
              <td >03:00</td>
              <td>Name</td>
              <td>+963912345678</td>
              <td>Test@gmail.com</td>
              <td>Damac/test/tset</td>
              <td>
                <button type="button" className="btn btn-primary"> Details</button>
                <button type="button" className="btn btn-success mx-2"> Edit</button>
                <button type="button" className="btn btn-danger "> Delete</button>
              </td>
            </tr>
            <tr className="table-primary">
              <td >10/10/2010</td>
              <td >03:00</td>
              <td>Name</td>
              <td>+963912345678</td>
              <td>Test@gmail.com</td>
              <td>Damac/test/tset</td>
              <td>
                <button type="button" className="btn btn-primary"> Details</button>
                <button type="button" className="btn btn-success mx-2"> Edit</button>
                <button type="button" className="btn btn-danger "> Delete</button>
              </td>
            </tr>
           
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      );
}
export default AllApppintments;