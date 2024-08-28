import React, { useState } from "react";
import "./Courses.css";
import coding from "../../assets/courses_coding.jpg";
import designer from "../../assets/courses_designer.jpg";
import marketing from "../../assets/courses_dgmarketing.jpg";
import sideImg from "../../assets/Asset_5-removebg-preview-l.png";
import StarIcon from "@mui/icons-material/Star";
import MovingIcon from "@mui/icons-material/Moving";
import fist from "../../assets/fist.png";

function Courses() {
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);

  const handleOpenInfo = (cardNumber) => {
    if (cardNumber === 1) setShowInfo1(true);
    else if (cardNumber === 2) setShowInfo2(true);
    else if (cardNumber === 3) setShowInfo3(true);
  };

  const handleCloseInfo = (cardNumber) => {
    if (cardNumber === 1) setShowInfo1(false);
    else if (cardNumber === 2) setShowInfo2(false);
    else if (cardNumber === 3) setShowInfo3(false);
  };

  return (
    <div id="courses">
      <img className="course_img_side" src={sideImg} alt="" />
      <div className="courses_heading">
        <h1>Explore Our Courses </h1>
      </div>
      <div className="card">
        <div
          className={showInfo1 ? "course_card active " : "course_card"}
          onMouseEnter={() => handleOpenInfo(1)}
          onMouseLeave={() => handleCloseInfo(1)}
        >
          <div className="courses_img">
            <img src={coding} alt="coding" />
            <div className="courses_icon">
              <StarIcon />
            </div>
          </div>
          <h3 className="course_info"> Coding</h3>
          {showInfo1 && (
            <div className="course_info_details1">
              <p className="course_details_data">
                AliliTechAfrica offers comprehensive coding courses covering a
                range of programming languages and frameworks. Whether you're a
                beginner or an experienced coder, our courses cater to all skill
                levels. Dive into web development, mobile app creation, or
                software engineering with expert guidance and hands-on projects.
                Learn essential frontend and backend skills, master
                industry-standard tools, and gain the confidence to pursue a
                successful career in coding.
              </p>
            </div>
          )}
        </div>
        <div
          className={showInfo2 ? "course_card active" : "course_card"}
          onMouseEnter={() => handleOpenInfo(2)}
          onMouseLeave={() => handleCloseInfo(2)}
        >
          <div className="courses_img">
            <img src={designer} alt="design" />
            <div className="courses_icon">
              <MovingIcon />
            </div>
          </div>
          <h3 className="course_info">Design</h3>
          {showInfo2 && (
            <div className="course_info_details2">
              <p className="course_details_data">
                Unlock your creative potential with AliliTechAfrica's graphic
                design courses. From fundamental design principles to advanced
                techniques, our courses equip you with the skills needed to
                craft visually stunning designs. Explore logo design, branding,
                UI/UX, and digital illustration under the mentorship of seasoned
                designers. Through practical projects and constructive feedback,
                refine your design skills and build a standout portfolio that
                showcases your talent to the world.
              </p>
            </div>
          )}
        </div>
        <div
          className={showInfo3 ? "course_card active" : "course_card"}
          onMouseEnter={() => handleOpenInfo(3)}
          onMouseLeave={() => handleCloseInfo(3)}
        >
          <div className="courses_img">
            <img src={marketing} alt="digital marketing" />
            <div className="courses_icon">
              <img className="fist" src={fist} alt="" />
            </div>
          </div>
          <h3 className="course_info">Digital Marketing</h3>
          {showInfo3 && (
            <div className="course_info_details3">
              <p className="course_details_data">
                Elevate your marketing prowess with AliliTechAfrica's digital
                marketing courses. Dive into the dynamic world of online
                marketing, learning essential strategies and tactics to drive
                results. From SEO and social media marketing to content creation
                and PPC advertising, our courses cover all facets of digital
                marketing. Gain practical insights, hands-on experience, and
                industry-relevant certifications that empower you to excel in
                the digital landscape. Whether you're a marketer seeking to
                upskill or a business owner looking to expand your online
                presence, our courses are designed to help you achieve your
                goals.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
