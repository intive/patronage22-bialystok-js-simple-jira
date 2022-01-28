import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
// import { LinearProgressProps } from "/@mui/material";

export default function LinearIndeterminate() {
  return (
    <Box sx={{ width: "100%", px: 2 }}>
      <LinearProgress sx={{ width: "80%", mx: "auto" }} />
    </Box>
  );
}
