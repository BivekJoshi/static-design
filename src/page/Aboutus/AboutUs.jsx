import React from 'react';
import WaterMark from "../../assets/images/p6.jpg";
import './AboutUs.css'; // Import CSS file for styling
import { Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from './Image';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <img src={WaterMark} alt="Watermark" className="faded-image" />
      <div className="text-overlay" style={{ width: "100%" }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent='space-around'
        >
          <Grid item xs={12} sm={6}><Image /></Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem", color: "#5D79E2", textAlign: "center" }}>
                <div>About Our Company</div>
                <div style={{ width: "60px", height: "2px", backgroundColor: "#34D6FF", borderRadius: "1px" }}></div>
              </div>
              <div className='main-text-body'>Your Business<br /> Name LLC</div>
              <div className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
              <div style={{ backgroundColor: "#5D79E2", width: "120px", padding: "12px", display: "flex", gap: ".4rem", cursor: "pointer", color: "#ffff", fontWeight: "bold", fontSize: "15px" }}>Read More <ArrowForwardIcon /></div>

            </div>
          </Grid>

        </Grid>
      </div>
    </div>
  );
}

export default AboutUs;
