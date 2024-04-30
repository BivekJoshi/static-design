import React from 'react';
import Card from '../../components/Card/Card';
import { useMediaQuery } from '@mui/material';

const Services = () => {
    const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

    return (
        <div style={{ padding: isXsScreen ? "30px" : "30px 150px", position: 'relative' }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem", color: "#5D79E2", textAlign: "center" }}>
                <div>What we are offering</div>
                <div style={{ width: "60px", height: "2px", backgroundColor: "#34D6FF", borderRadius: "1px" }}></div>
            </div>
            <div style={{ color: "#4273C1", fontWeight: 900, fontSize: "35px", padding: "1px 0px" }}>Our Services</div>
            <div>No job is too big or too small for that crew at Your Business Name LLC</div>
            <div style={{ display: "flex", gap: "3rem", flexWrap: 'wrap', marginTop: "12px" }}>
                <Card title="Plumbing"/>
                <Card title="Water Treatment"/>
                <br />
                <Card maxWidth="400px" title='Commercial Property Mainteanace'/>
                <Card maxWidth="400px" title="Preventative maintenance"/>
            </div>
            <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '40%', backgroundColor: 'rgb(217, 239, 244)',height:"500px",zIndex:-10 }}></div>
        </div>
    );
}

export default Services;
