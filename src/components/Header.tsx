import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "styled-components";

const StyledBox = styled(Box)`
  background: #bdc3c7;
`;

export default function Header(): any {
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ): void => {
    setValue(newValue);
  };
  return (
    <StyledBox sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} aria-label='nav tabs example'>
        <Tab component={Link} label='Button' to='/' />
        <Tab component={Link} label='text' to='/text' />
      </Tabs>
    </StyledBox>
  );
}
