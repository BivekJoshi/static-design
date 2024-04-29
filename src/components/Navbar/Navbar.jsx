// import { Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useMediaQuery } from '@mui/material';

const Navbar = () => {
    const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

    return (
        <div style={{ backgroundColor: "#34D6FF", width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "0px 22px", alignItems: "center", padding: "6px", height: "18px" }}>
                <div style={{ color: "grey", display: "flex", gap: "1rem", fontSize: "12px" }}>
                    <div>
                        Mon-Fri: 9 AM -5 PM
                    </div>
                    <div>
                        {isXsScreen ? "" : " your business@business.com"}

                    </div>
                </div>
                <div style={{ display: "flex", gap: ".6rem", fontSize: "small", cursor: "pointer" }}>
                    <InstagramIcon sx={{ fontSize: 18 }} />
                    <FacebookIcon sx={{ fontSize: 18 }} />
                    <LinkedInIcon sx={{ fontSize: 18 }} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
