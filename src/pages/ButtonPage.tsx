import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

interface Props {
  text: string;
}

const StyledBox = styled(Box)`
  display: flex;
  margin: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function ButtonPage({ text }: Props): any {
  return (
    <StyledBox>
      <Button variant='contained'>
        <Typography>{text}</Typography>
      </Button>
    </StyledBox>
  );
}

export default ButtonPage;
