import { Button, Grid, TextField,Box, useMediaQuery } from '@mui/material';
import React from 'react';
import Image from "../../../assets/images/p5.jpg"
import RequestForm from '../Form/RequestForm';
const Quote = () => {
    const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

    return (
        <div>
            <div style={{ position: "relative", width: "100%", height: "300px", overflow: "hidden" }}>
                <img src={Image} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(5px)" }} />
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 255, 0.4)" }}></div>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "white" }}>
                    <div>Have some work for us?</div>
            
                    <h2>Request A Quote Today</h2>
                    <p>Please Contact us with all your water needs. We look forward to servicing you.</p>
                </div>
            </div>
            <Box sx={{padding:isXsScreen?"":"22px",width:"100%"}}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6}>
                    <RequestForm />
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem", color: "#5D79E2", textAlign: "center" }}>
                        <div>Visit Our Office</div>
                        <div style={{ width: "60px", height: "2px", backgroundColor: "#34D6FF", borderRadius: "1px" }}></div>
                    </div>
                    <div style={{ color: "#4273C1", fontWeight: 900, fontSize: "35px", padding: "1px 0px" }}>Our Main Office</div>
                    <div>We are welcome to visit our office during office hours, Find <br /> details of our location and business hours below.</div>
                    <div style={{ width: "160px", height: "2px", backgroundColor: "grey", borderRadius: "1px", margin: "1rem 0rem" }}></div>
                    <div style={{ marginTop: "1rem" }}>Address: <span style={{ color: "grey", marginLeft: "1rem" }}>LaPorte,IN 4567</span></div>
                    <div style={{ marginTop: "1rem" }}>Phone: <span style={{ color: "grey", marginLeft: "1rem" }}>(123) 123-1234</span></div>
                    <div style={{ marginTop: "1rem" }}>Business Hours: <span style={{ color: "grey", marginLeft: "1rem" }}>Mon-Fri: 9 am-5pm</span></div>
                    <div style={{ marginTop: "1rem" }}>Email Address: <span style={{ color: "grey", marginLeft: "1rem" }}>yourbusiness@business.com</span></div>
                    <div style={{ color: "#4273C1", fontWeight: 900, fontSize: "35px", padding: "1px 0px" }}>Area Covered</div>
                    <div style={{ marginTop: "1rem",color:"grey" }}>LaPorte countries</div>
                    <div style={{ marginTop: "1rem",color:"grey" }}>Porter countries</div>
                    <div style={{ marginTop: "1rem",color:"grey" }}>Michigan City</div>
                    <div style={{ marginTop: "1rem",color:"grey" }}>Michigan</div>
                </Grid>
            </Grid>
            </Box>
        </div >
    );
}

export default Quote;
