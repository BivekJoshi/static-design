import { useMediaQuery } from '@mui/material';
import React from 'react';

const LowerFooter = () => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

    return (
        <div style={{ backgroundColor: "#24437C", padding: isXsScreen?"2px":"6px 120px",color:"#ffff",display:"flex" }}>
            Copyright 2023 - All rights reserved, Designed By Uptech Solutions
        </div>
    );
}

export default LowerFooter;
