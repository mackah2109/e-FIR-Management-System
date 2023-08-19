import React, { useState } from "react";
import "./public.css";
import image from "../images/fir1.png";
import Registeration_fir from "./Registeration_fir";
import View_fir from "./View_fir";


function Public() {
  const [showRegistration, setShowRegistration] = useState(true);

  const handleViewFirClick = (event) => {
    event.preventDefault();
    setShowRegistration(false);
  };
  const handleViewRegisterClick = (event) =>{
    event.preventDefault();
    setShowRegistration(true);
  }

  return (
    <>
      <div className="fir_registeration">
        <div className="registeration">
          
            <div className="registeration_photo">
              <img src={image} alt="Registeration photo" />
              <div className="register_wel"><h1 >Welcome to Register FIR</h1></div>
            </div>
            <div className="registeration_form">
              <div className="fir_button">
              
                <button onClick={handleViewRegisterClick}>Register FIR</button>
                <button onClick={handleViewFirClick}>View FIR</button>
              </div>
              <div>
              {showRegistration ? (
                  <Registeration_fir/>
                ) : (
                  <View_fir />
                )}
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
  
}

export default Public;
