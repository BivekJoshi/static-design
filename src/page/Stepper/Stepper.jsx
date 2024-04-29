
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
// import Home1 from "../../assets/Home1.png";
// import Home2 from "../../assets/Home2.png";
// import Home3 from "../../assets/Home3.png";
import Home1 from "../../assets/images/p1.jpg";
import Home2 from "../../assets/images/p2.jpg";
import Home3 from "../../assets/images/p3.jpg";
import Home4 from "../../assets/images/p4.jpg";
import Home5 from "../../assets/images/p5.jpg";
import Home6 from "../../assets/images/p6.jpg";
import Home7 from "../../assets/images/p7.jpg";
import { useMediaQuery } from "@mui/material";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: Home1,
  },
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: Home2,
  },
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: Home3,
  },
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: Home4,
  }, {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: Home5,
  }, {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: Home6,
  }, {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: Home7,
  },
];

function Stepper() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));


  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [activeStep]);

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: isXsScreen?"206px":"450px"
        }}
        className="main"
      >
        <img
          src={images[activeStep].imgPath}
          alt={images[activeStep].label}
          style={{ width: "100%", height: "100%" }}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
          }}
        />
      </Box>
    </Box>
  );
}

export default Stepper;
