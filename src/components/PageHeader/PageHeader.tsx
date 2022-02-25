import { MouseEventHandler } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  StyledButton,
  StyledGrid,
  Title,
  SubTitle,
  StyledLink,
  StyledGridItem,
} from "./PageHeader.style";

interface SectionProps {
  pageTitle: string;
  buttonText: string;
  buttonHandler?: MouseEventHandler;
  menuComponent?: React.ReactNode;
  returnLink?: boolean;
}

export default function PageHeader({
  pageTitle,
  buttonText,
  buttonHandler = () => {},
  returnLink,
}: SectionProps) {
  return (
    <Box>
      <StyledGrid container>
        <StyledGridItem item>
          {returnLink && (
            <StyledLink to='/projects'>
              <SubTitle>{"Return to Projects"}</SubTitle>
            </StyledLink>
          )}
          <Title>{pageTitle}</Title>
        </StyledGridItem>
        <Grid item>
          <StyledButton onClick={buttonHandler}>{buttonText}</StyledButton>
        </Grid>
      </StyledGrid>
    </Box>
  );
}
