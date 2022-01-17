import React from "react";
import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import incrementClickCount from "../actions";

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
  const dispatch = useDispatch();
  return (
    <StyledBox>
      <Button
        onClick={() => dispatch(incrementClickCount())}
        variant='contained'
      >
        <Typography>{text}</Typography>
      </Button>
    </StyledBox>
  );
}

export default ButtonPage;
