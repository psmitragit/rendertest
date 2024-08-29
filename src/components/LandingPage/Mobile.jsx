import React, { useState, useEffect } from 'react';
import "../../styles/mobile.css";
import investorImg from "../../assets/Images/Investor_Mode_Phone.png";
import managerImg from "../../assets/Images/Landing_Page_Manager_Mode.png";
import twelvthHome from "../../assets/Images/TwelvthHome.png";

const Mobile = () => {
  const [currentPhase, setCurrentPhase] = useState('logo');

  useEffect(() => {
    const phases = ['logo', 'investor', 'manager'];
    let phaseIndex = 0;

    const phaseInterval = setInterval(() => {
      phaseIndex += 1;
      if (phaseIndex >= phases.length) {
        phaseIndex = 0; // Restart the loop
      }
      setCurrentPhase(phases[phaseIndex]);
    }, 5000); // Change phase every 5 seconds

    return () => clearInterval(phaseInterval);
  }, []);

  return (
    <div>
      <div className="phone-graphic">
        <div className="phone-case">
          <div className="phone-container-outer">
            <div className="phone-container-inner">
              <div className="phone-display-content">
                {currentPhase === 'logo' && (
                  <div className="image-phase">
                    <img src={twelvthHome} alt="Twelvth Logo" />
                  </div>
                )}
                {currentPhase === 'investor' && (
                  <div className="image-phase">
                    <img src={investorImg} alt="Investor Mode" />
                  </div>
                )}
                {currentPhase === 'manager' && (
                  <div className="image-phase">
                    <img src={managerImg} alt="Manager Mode" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
