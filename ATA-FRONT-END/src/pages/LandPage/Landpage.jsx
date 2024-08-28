import React from 'react';
import "./LandPage.css";
import course from '../../assets/A2.png'; // Ensure this path is correct
import africanPrint from '../../assets/imagetest.webp'; // Ensure this path is correct
import triangleAsset from '../../assets/A24.jpeg'; // Replace with actual path to your asset
function Landpage() {
  return (
    <div className="land_page">
      <div className="pictures">
        <img className='toon' src={course} alt="Illustration of a person with a laptop" />
      </div>
      <div className="land_page_info">
        <h1 className="land-page-red">Be Connected</h1>
        <h1 className="land_page_blue">Be Nurtured</h1>
        <h1 className="land-page-red-innovative">Be Innovative</h1>
      </div>
      <div className="triangle-container">
        <div className="african-print" style={{ backgroundImage: `url(${africanPrint})` }}></div>
      </div>
      {/* Adding the triangles at the toon's feet */}
      <img src={triangleAsset} alt="Triangles decoration" className="triangles-at-feet" />
      {/* ... */}
    </div>
  );
}
export default Landpage;
