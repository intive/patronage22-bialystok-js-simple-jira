import { MouseEventHandler } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  StyledButton,
  // StyledContainer,
  StyledGrid,
  Title,
} from "./PageHeader.style";

interface SectionProps {
  pageTitle?: string;
  buttonText?: string;
  buttonHandler?: MouseEventHandler;
}

export default function PageHeader({
  pageTitle,
  buttonText,
  buttonHandler = () => {},
}: SectionProps) {
  return (
    <Box>
      {/* <StyledContainer> */}
      <StyledGrid container>
        <Grid item>
          <Title>{pageTitle}</Title>
        </Grid>
        <Grid item>
          <StyledButton onClick={buttonHandler}>{buttonText}</StyledButton>
        </Grid>
      </StyledGrid>
      {/* </StyledContainer> */}
    </Box>
  );
}
