// import React from 'react';
// import BackImage from "../../assets/images/plumbing-home.jpg";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Stepper from '../Stepper/Stepper';

// const MainHome = () => {
//     return (
//         <div style={{ position: "relative", width: "100%", height: "550px" }}>
//             <img src={BackImage} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//             <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 255, 0.3)" }}></div>
//             <div style={{ position: "absolute", bottom: 0, height: "100px", backgroundColor: "#34D6FF", width: "100%" }}>
//                 <div style={{ color: "white", fontWeight: 900, fontSize: "35px", padding: "30px 90px" }}>
//                     20+ Years of Experience
//                 </div>
//             </div>
//             <div style={{ position: "absolute", backgroundColor: "white", width: "350px", height: "450px", top: 60, right: 180 }}>
//                 <Stepper/>
//             </div>
// <div style={{ position: "absolute", top: 65, left: 140, color: "white", display: "flex", flexDirection: "column", gap: "1rem" }}>
//     <div>
//         Building with Confinence
//     </div>
//     <div style={{ fontSize: "45px", color: "white", fontWeight: 900 }}>
//         Building And <br /> Maintaining <br />Your Dreams
//     </div>
//     <div>
//         Fast, friendly home repair service done right the first time!!
//     </div>
//     <div style={{ backgroundColor: "white", width: "130px", padding: "12px", display: "flex", gap: ".4rem", cursor: "pointer", color: "#5D79E2", fontWeight: "bold",fontSize:"15px" }}>Explore More <ArrowForwardIcon /></div>
// </div>
// <div style={{ display: "flex", color: "white", justifyContent: "space-between", position: "absolute", top: 7,width:"100%" }}>
//     <div style={{padding:"0 50px", fontSize:"22px",fontWeight:"bold"}}>Business Logo</div>
//     <div style={{ display: "flex", flexDirection: "row", gap: "1rem" ,padding:"0 50px",cursor:'pointer'}}>
//         <div>Home</div>
//         <div>About</div>
//         <div>Projects</div>
//         <div>Services</div>
//         <div>Contact</div>
//     </div>

// </div>
//         </div>
//     );
// }

// export default MainHome;
import React, { useState } from 'react';
import BackImage from "../../assets/images/plumbing-home.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Stepper from '../Stepper/Stepper';
import { Grid, useMediaQuery } from '@mui/material';
import './MainHome.css'
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MainHome = () => {
    const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    return (
        <div style={{ position: "relative", width: "100%", height: "550px" }}>
            <img src={BackImage} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 255, 0.6)" }}></div>
            <div style={{ position: "absolute", bottom: 0, height: "90px", backgroundColor: "#34D6FF", width: "100%" }}>
                <div style={{ color: "white" }}>
                    <h1 className="responsive-text">20+ Years of Experience</h1>
                </div>
            </div>
            {/* <div style={{ position: "absolute", backgroundColor: "white", width: "350px", height: "450px", top: 60, right: 180 }}>
                <Stepper />
            </div> */}              
            <div className="stepper-container">
                <Stepper />
            </div>
            <div className="main-text"> 
                <div >
                    Building with Confinence
                </div>
                <div className="main-text-body">
                    <span style={{color:"#34D6FF"}}>Building</span> <span style={{color:"#ffff"}}>And</span> <br /> <span style={{color:"#34D6FF"}}>Maintaining</span> <br /><span style={{color:"#ffff"}}>Your Dreams</span>
                </div>
                <div>
                    Fast, friendly home repair service done right the first time!!
                </div>
                <div style={{ backgroundColor: "white", width: "130px", padding: "12px", display: "flex", gap: ".4rem", cursor: "pointer", color: "#5D79E2", fontWeight: "bold", fontSize: "15px" }}>Explore More <ArrowForwardIcon /></div>
            </div>
            {isXsScreen ?
                <div style={{ display: "flex", color: "white", justifyContent: "space-between", position: "absolute", top: 7, width: "100%" }}>
                    <div style={{ padding: "10px 30px", fontSize: "16px", fontWeight: "bold" }}>Business Logo</div>
                    <div style={{ display: "flex", gap: "1rem", padding: "0 20px", cursor: 'pointer' }}>
                        <IconButton onClick={handleMenuOpen} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                            <MenuItem onClick={handleMenuClose}>About</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Projects</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Services</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
                        </Menu>
                    </div>
                </div>
                : <div style={{ display: "flex", color: "white", justifyContent: "space-between", position: "absolute", top: 7, width: "100%" }}>
                    <div style={{ padding: "0 50px", fontSize: "22px", fontWeight: "bold" }}>Business Logo</div>
                    <div style={{ display: "flex", flexDirection: "row", gap: "1rem", padding: "0 50px", cursor: 'pointer' }}>
                        <div>Home</div>
                        <div>About</div>
                        <div>Projects</div>
                        <div>Services</div>
                        <div>Contact</div>
                    </div>

                </div>}

        </div>
    );
}

export default MainHome;
