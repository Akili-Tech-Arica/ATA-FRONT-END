import React from 'react'
import "./Services.css"
import coding from "../../assets/courses_coding.jpg"
function Services() {
  return (
    <div id="services" className="services">
      <h1 className='services_head'>Our Services</h1>
      <h4>
        We provide accessible, transformative digital training that's is
        designed for Africa
      </h4>
      <div className="services_cards">
        <div className="services_info">
          <div className="service_img">
            <img src={coding} alt="" />
            <div className="red_circle_service"></div>
            <div className="yellow_triangle_services"></div>
          </div>
          <h3>Affordable techie team training</h3>
        </div>

        <div className="services_info">
          <div className="service_img">
            <img src={coding} alt="" />
            <div className="red_circle_service"></div>
            <div className="yellow_triangle_services"></div>
          </div>

          <h3>Affordable techie team training</h3>
        </div>

        <div className="services_info">
          <div className="service_img">
            <img src={coding} alt="" />
            <div className="red_circle_service"></div>
            <div className="yellow_triangle_services"></div>
          </div>
          <h3>Affordable techie team training</h3>
        </div>
      </div>
    </div>
  );
}

export default Services