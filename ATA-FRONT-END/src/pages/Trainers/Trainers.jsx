import React from "react";
import "./Trainers.css";
import coding from "../../assets/courses_coding.jpg";
import sideLeft from "../../assets/Asset_5-removebg-preview.png";
function Trainers() {
  return (
    <div id="trainers" className="trainers">
      <img className="side_img_team" src={sideLeft} alt="" />
      <h1 className="team">Meet Our Trainers</h1>
      <div className="trainers_data">
        <div className="trainers_info">
          <img className="trainers_img" src={coding} alt="trainers" />

          <div className="trainers_name">
            <h3>Joseph Oluoch</h3>
          </div>
        </div>
        <div className="trainers_info">
          <img className="trainers_img" src={coding} alt="trainers" />

          <div className="trainers_name">
            <h3>Joseph Oluoch</h3>
          </div>
        </div>
        <div className="trainers_info">
          <img className="trainers_img" src={coding} alt="trainers" />
          <div className="trainers_name">
            <h3>Joseph Oluoch</h3>
          </div>
        </div>
        <div className="trainers_info">
          <img className="trainers_img" src={coding} alt="trainers" />

          <div className="trainers_name">
            <h3>Joseph Oluoch</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
