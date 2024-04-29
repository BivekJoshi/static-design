import React from "react";
import Img1 from "../../assets/images/watertreatment.jpg";
import Img2 from "../../assets/images/p3.jpg";
import Image1 from "../../assets/images/Image1.png";

import { useMediaQuery } from "@mui/material";

const Image = () => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      {isXsScreen ? (
        <div
          style={{
            width: "200px",
            height: "200px",
            // marginTop:'9rem'
          }}
        >
          <img src={Image1} style={{ width: "100%", height: "100%" }} />
        </div>
      ) : (
        <div style={{ position: "relative" }}>
          <div
            style={{
              width: "270px",
              backgroundColor: "#ffff",
              height: "270px",
              position: "absolute",
              top: "-150px",
              left: "200px",
            }}
          >
            <div style={{ padding: "6px", height: "257px" }}>
              <img src={Img1} style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
          <div
            style={{
              width: "150px",
              backgroundColor: "#ffff",
              height: "150px",
              position: "absolute",
              top: "10px",
              left: "400px",
            }}
          >
            <div style={{ padding: "6px", height: "140px" }}>
              <img src={Img2} style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Image;
