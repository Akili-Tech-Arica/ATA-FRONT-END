import React from "react";
import "./Team.css";
import coding from "../../assets/courses_coding.jpg";
import africa from "../../assets/Picture5.png";
import sideImg from "../../assets/Asset_5-removebg-preview-l.png";
import sideLeft from "../../assets/Asset_5-removebg-preview.png";
function Team() {
  return (
    <div className="team_team">
      <img className="side_img-left" src={sideImg} alt="" />
      <img className="side_img-right" src={sideLeft} alt="" />
      <h1>Meet Out Team</h1>

      <div className="team_card">
        <div className="team_info">
          <div className="img_team">
            <img src={coding} alt="" />
          </div>

          <div className="team_white"></div>
          <img className="africa_theme" src={africa} alt="african theme" />
        </div>
        <div className="team_info">
          <div className="img_team">
            <img src={coding} alt="" />
          </div>

          <div className="team_white"></div>
          <img className="africa_theme" src={africa} alt="african theme" />
        </div>
        <div className="team_info">
          <div className="img_team">
            <img src={coding} alt="" />
          </div>

          <div className="team_white"></div>
          <img className="africa_theme" src={africa} alt="african theme" />
        </div>
      </div>
    </div>
  );
}

export default Team;
