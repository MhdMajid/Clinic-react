import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import img from '../../Assets/species-icons/heart.png';
import { useNavigate} from "react-router-dom";

function InformationCard({ id, im, title, description,key }) {
// const [d,sd]=useState()
  const nav = useNavigate() 
  const NavigateTo =() =>{

    nav("/AllDoctors/"+id)
  }
 
  return (
    
    <div key={key} className="specialization-cards" dir="rtl" >
      <span className="specialization-card-img-top">
        {/*<FontAwesomeIcon className="specialization-fa-icon" icon={props.icon} />*/}
        <img className="specialization-card-img" id="specialize-img" src={im}   />
      </span>
      <p className="specialization-card-title" id="specialize-title">{title}</p>
      <p className="specialization-card-description" id="specialize-description">{description}</p>
     
      <div class="d-grid gap-2 col-6 mx-auto">
         <button class="btn btn-primary" 
         type="button" 
         style={{ backgroundColor: '#4682b4', color: 'white' }}
         onClick={NavigateTo}>اختيار</button>
         
      </div>
      <br></br>
    </div>
  );
}

export default InformationCard;
