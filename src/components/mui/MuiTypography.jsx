import React from "react";
import { Typography } from "@mui/material";

export const MuiTypography = ({ children }) => {
  return (
    <div>
      <Typography variant="h1"> h1 type</Typography>
      <Typography variant="h2"> h2 type</Typography>
      <Typography variant="h3"> h3 type</Typography>
      <Typography variant="h4"> h4 type</Typography>
      <Typography variant="h5"> h5 type</Typography>
      {children}
    </div>
  );
};
