import { Box, Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import Test from './Test';

const Testimonials = () => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box sx={{width:"100%",padding:isXsScreen?"0px":"60px 140px"}}>
      <Grid container>
        <Grid item sx={12} md={6}>
          <br/>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem", color: "#5D79E2", textAlign: "center" }}>
                <div>What our client's say</div>
                <div style={{ width: "60px", height: "2px", backgroundColor: "#34D6FF", borderRadius: "1px" }}></div>
            </div>
            <div style={{ color: "#4273C1", fontWeight: 900, fontSize: "35px", padding: "1px 0px" }}>Client's <br/> Testimonials</div>
            <div>Here's what our Customers are saying about <br/>Your Business Name LLC</div>
        </Grid>

        <Grid item sx={12} md={6} ><div style={{width:isXsScreen?"":"400px",height:"300px"}}><Test/></div></Grid>
      </Grid>
    </Box>
  );
}

export default Testimonials;
