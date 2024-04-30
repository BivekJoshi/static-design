import React from 'react';
import Group from "../../assets/images/Group 3.png"
import { Grid } from '@mui/material';
const FeaturedProject = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem", color: "#5D79E2", textAlign: "center" }}>
                <div>Honorable Mentions</div>
                <div style={{ width: "60px", height: "2px", backgroundColor: "#34D6FF", borderRadius: "1px" }}></div>
            </div>
            <div style={{ color: "#4273C1", fontWeight: 900, fontSize: "35px", padding: "1px 0px" }}>Featured Projects</div>
            <div>Some of the projects Business Name repaired</div>
            <div style={{ width: "100%", height: "300px", position: "relative", marginTop: "1rem" }}>
                <img src={Group} style={{ width: "100%", height: "100%" }} />
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 255, 0.4)" }}></div>
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                    <Grid container spacing={2} justifyContent="flex-end" sx={{ color: "#ffff" }} alignItems="center" direction="row">
                        <Grid item xs={6} md={3}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", margin: "1rem 2rem" }}>
                                <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                                    Project 01
                                </div>
                                <div>
                                    Jan 15,2020
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", margin: "1rem 2rem" }}>
                                <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                                    Project 02
                                </div>
                                <div>
                                    Jan 15,2020
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", margin: "1rem 2rem" }}>
                                <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                                    Project 03
                                </div>
                                <div>
                                    Jan 15,2020
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", margin: "1rem 2rem" }}>
                                <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                                    Project 04
                                </div>
                                <div>
                                    Jan 15,2020
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProject;
