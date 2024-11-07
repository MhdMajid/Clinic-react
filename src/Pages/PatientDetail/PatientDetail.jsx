import { toast } from "react-toastify";
import "./PatientDetail.css";
import { useState } from "react";

const PatientDetail = () => {
  const tost =  ()=>{
    toast.info("Somthing hapinig ")
  }
  const [T,setT] =useState("")
  return (
    <div className="my-5">
      <h1>{T}</h1>
       <div class="input-group mb-3">
        {/* <span class="input-group-text">prefix</span> */}
        <button className="btn btn-primary input-group-text"
        onClick={tost}
        >اضافة تشخيص</button>

        <input
          onChange={(e)=>setT(e.target.value)}
          
          type="text"
          name="t"
          id="name"
          class="form-control"
          placeholder="Add new Detail for patient "
        />
        
      </div>
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white bg-primary border rounded rounded-top rounded-bottom ">
            <h2 className="text-dark">Personal Patient Information :</h2>
            <h5>Name : ahmed</h5>
            <h5>Age : 30</h5>
            <h5>Phone : 0912345678</h5>
            <h5>Email : tes@gmail.com</h5>
            <h5>Address : Tes/test/test</h5>
           
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-primary border rounded-3">
            <h2 className="text-light">Patient Health Information :</h2>
            <h5>Chronic Diseases : ahmed</h5>
            <h5>Previous Sugeries : 30</h5>
            <h5>Permanent Medication : 0912345678</h5>
            <h5>Current Disease Symptoms : tes@gmail.com</h5>
            <h5>Address : Tes/test/test</h5>
          </div>
        </div>
      </div>
    
     
      
      
    </div>
  );
};

export default PatientDetail;
