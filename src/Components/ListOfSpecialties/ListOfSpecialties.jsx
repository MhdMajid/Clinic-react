import React from "react";
import SpecialtiesCard from "./SpecialtiesCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import { useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import "./ListOfSpecialties.css";
import axios from 'axios';
import { BaseUrl } from "../../Axios";
// import "./SpecialtiesCard";

function ListOfSpecialties() {

  const {listOfSpecialties, setListOfSpecialties} = useState()

  const [data,setData] = useState()

  useEffect(()=>{fetchData()},[])

  const fetchData = async ()=>{
    await axios.get(`${BaseUrl}patient/specialties`)
    .then((data)=>{console.log(data.data.data)
      setData(data.data.data)
    })
    .catch((e)=>{console.log(e)})
  }

  return (
    <div className="info-section" id="services" dir="rtl">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>الاختصاصات المتوفرة</span>
        </h3>
      </div>

      <div className="specialization-cards-content">
      
        { data && data.map((row , i )=>(
           <SpecialtiesCard 
          key= {i}
          id = {row.id}
          im = {row.image}
          title ={row.Specialty}
          description={row.description}  
        />
        ))}

       
       
      </div>
    </div>
  );
}

export default ListOfSpecialties;
