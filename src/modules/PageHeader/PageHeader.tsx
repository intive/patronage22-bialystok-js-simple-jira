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
import { CardActions } from "@mui/material";

export interface SectionProps {
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
  menuComponent,
}: SectionProps) {
  return (
    <Box>
      <StyledGrid container>
        <StyledGridItem>
          {returnLink && (
            <StyledLink to='/projects'>
              <SubTitle>{"Return to Projects"}</SubTitle>
            </StyledLink>
          )}
          <Title>{pageTitle}</Title>
        </StyledGridItem>
        <StyledGridItem secondary>
          {!!menuComponent && <CardActions>{menuComponent}</CardActions>}
          <StyledButton onClick={buttonHandler}>{buttonText}</StyledButton>
        </StyledGridItem>
      </StyledGrid>
    </Box>
  );
}
