
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
// import Home1 from "../../assets/Home1.png";
// import Home2 from "../../assets/Home2.png";
// import Home3 from "../../assets/Home3.png";
import Home1 from "../../assets/images/girl.jpg";
import Home2 from "../../assets/images/man.jpg";
import Home3 from "../../assets/images/man-2.jpg";
import Home4 from "../../assets/images/p7.jpg";

import { useMediaQuery } from "@mui/material";

const images = [
    {
        lulu: "Binisha Joshi",
        label: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled n printer took a galley of type and scrambled n printer took a galley of type and scrambled",
        imgPath: Home1,
    },
    {
        lulu: "Sagar Rijal",
        label: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
        imgPath: Home2,
    },
    {
        lulu: "ROnish Thapa",
        label: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
        imgPath: Home3,
    },
];

function Test() {
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
        <Box
            sx={{
                position: "relative",
                width: isXsScreen ? "300px" : "100%",
                height: isXsScreen ? "200px" : "300px"
            }}
        >
            <div style={{ border: "1px solid grey", width: "100%", height: "100%" }}>
                <img
                    src={Home4}
                    style={{ width: "100%", height: "100%" }}
                />
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 255, 0.4)" }}></div>
                <div style={{ position: "absolute", top: 30, left: 30, color: "#ffff" }}>
                    <div style={{fontWeight:900}}>
                    {images[activeStep].lulu}
                    </div>
                    <br />
                    {images[activeStep].label}
                </div>
            </div>
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
            <div style={{ width: isXsScreen ? "100px" : "180px", height: isXsScreen ? "100px" : "180px", position: "absolute", top: isXsScreen ? "152px" : "180px", right: isXsScreen ? "196px" : "260px" }}>
                <img
                    src={images[activeStep].imgPath}
                    alt={images[activeStep].label}
                    style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
            </div>
        </Box>
    );
}

export default Test;
