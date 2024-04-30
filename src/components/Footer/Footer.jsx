import { Box, Grid, useMediaQuery } from '@mui/material';

const Footer = () => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box sx={{ width: "100vw", height: isXsScreen?"500px":"300px", backgroundColor: "#4273C1", display: 'flex', justifyContent: 'center', alignItems: 'center', color: "#ffff" }}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3} sx={{ width: "100vw", display: "flex", justifyContent: "space-around" }}>
            <div style={{ width:"250px",backgroundColor:"#ffff",height:"200px",padding:"16px" }}>
            <div style={{ fontSize: "22px", fontWeight: 900, marginBottom: "1rem", color: "#38D9FF" }}>Business Logo</div>
            <div style={{color:"#666666"}}>  Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.</div>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div style={{ display: "flex", flexDirection: "column", width: "fit-content" }}>
              <div style={{ fontSize: "22px", fontWeight: 900, marginBottom: "1rem", color: "#38D9FF" }}>Quick Links</div>
              <div>About Us</div>
              <div>Quick Links</div>
              <div>Portfolio</div>
              <div>Testimonials</div>
              <div>Services</div>
              <div>Contact</div>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div style={{ display: "flex", flexDirection: "column", width: "fit-content" }}>
              <div style={{ fontSize: "22px", fontWeight: 900, marginBottom: "1rem", color: "#38D9FF" }}>Get In Touch</div>
              <div>Facebook</div>
              <div>Instagram</div>
              <div>Linkin</div>
              <div>Youtube</div>
              <div>Twitter</div>
              <div>Pi Intrest</div>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div style={{ display: "flex", flexDirection: "column", width: "fit-content" }}>
              <div style={{ fontSize: "22px", fontWeight: 900, marginBottom: "1rem", color: "#38D9FF" }}>Basic Info</div>
              <div></div>
              <div>Quick Links</div>
              <div>Portfolio</div>
              <div>Testimonials</div>
              <div>Services</div>
              <div>Contact</div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>

  );
}

export default Footer;
