import { Button, TextField } from '@mui/material';
import React from 'react';
import Image from "../../../assets/images/p5.jpg"
const Quote = () => {
    return (
        <div>
            <div style={{ position: "relative", width: "100%", height: "300px", overflow: "hidden" }}>
                <img src={Image} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(5px)" }} />
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 255, 0.4)" }}></div>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "white" }}>
                    {/* <div style={{ display: "flex", flexDirection: "row", gap: "1rem"}}> */}
                        <div>Have some work for us?</div>
                        {/* <div style={{ width: "60px", height: "2px", backgroundColor: "#34D6FF", borderRadius: "1px" }}></div> */}
                    {/* </div> */}
                    <h2>Request A Quote Today</h2>
                    <p>Please Contact us with all your water needs. We look forward to servicing you.</p>
                </div>
            </div>

            {/* <div style={{ backgroundColor: "#ffff" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "400px", padding: "20px", }}>
                    <TextField
                        label="Full Name"
                        fullWidth
                        size="small"
                        InputLabelProps={{
                            shrink: false,
                        }}
                    />
                    <TextField
                        label="Email Address"
                        fullWidth
                        size="small"
                        InputLabelProps={{
                            shrink: false,
                        }}
                    />
                    <TextField
                        label="Contact Number"
                        fullWidth
                        size="small"
                        InputLabelProps={{
                            shrink: false,
                        }}
                    />
                    <TextField
                        label="Service title"
                        fullWidth
                        size="small"
                        InputLabelProps={{
                            shrink: false,
                        }}
                    />
                    <TextField
                        label="Service Description"
                        fullWidth
                        multiline
                        rows={4}
                        InputLabelProps={{
                            shrink: false,
                        }}
                        sx={{ '& input': { fontSize: '8px' } }}
                    />
                    <Button variant='contained'>Submit</Button>
                </div>
            </div> */}
            {/* <div
                style={{
                    backgroundColor: "#EFCB89",
                    position: "relative",
                    width: "300px",
                    height: "1000px",
                    bottom: "100px",
                    zIndex:-10
                }}
            >sxasxasx</div> */}
        </div >
    );
}

export default Quote;
