import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useMediaQuery } from "@mui/material";

const Card = ({ maxWidth,title }) => {
  const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <div style={{ position: "relative",zIndex:100 }}>
      <div
        style={{
          border: "1px solid #34D6FF",
          width: "fit-content",
          padding: "10px 13px",
          maxWidth: maxWidth ? maxWidth : "340px",
          borderRadius: "4px",
          backgroundColor: "#fff",
        }}
      >
        <div style={styles.title}>{title}</div>
        <p style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </p>
        <p style={styles.view}>
          View Details <ArrowForwardIcon />
        </p>
      </div>
      {isXsScreen?"":
            <div
            style={{
              position: "absolute",
              width: "35px",
              height: "35px",
              backgroundColor: "#4273C1",
              bottom: -4,
              left: maxWidth ? 400 : 340,
              zIndex: -20,
              borderRadius: "2px",
            }}
          ></div>}

    </div>
  );
};
const styles = {
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#4273C1",
    marginBottom: "10px",
  },
  description: {
    fontSize: "15px",
    color: "#666666",
    lineHeight: "1.5",
  },
  view: {
    color: "#34D6FF",
    display: "flex",
    aliginItems: "center",
    justifyContent: "flex-end",
  },
};

export default Card;
