import { Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "black",
        color: "rgba(255,255,255,0.4)",
        width: "100%",
        height: "25px",
      }}
    >
      <Typography variant="caption">
        © 2020-2021 Fadi J. Zakharia. All Rights Reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
