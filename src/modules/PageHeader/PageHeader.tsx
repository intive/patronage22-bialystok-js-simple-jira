import { MouseEventHandler } from "react";
import Box from "@mui/material/Box";
import {
  StyledButton,
  StyledGrid,
  Title,
  SubTitle,
  StyledLink,
  StyledGridItem,
} from "./PageHeader.style";
import { CardActions } from "@mui/material";
import { toProjects } from "src/views/routes";

export interface SectionProps {
  pageTitle: string;
  buttonText?: string;
  buttonHandler?: MouseEventHandler;
  menuComponent?: React.ReactNode;
  returnLink?: string;
  interactiveElement?: JSX.Element;
}

export default function PageHeader({
  pageTitle,
  buttonText,
  buttonHandler = () => {},
  returnLink,
  menuComponent,
  interactiveElement,
}: SectionProps) {
  return (
    <Box>
      <StyledGrid container>
        <StyledGridItem>
          {returnLink && (
            <StyledLink to={toProjects}>
              <SubTitle>{returnLink}</SubTitle>
            </StyledLink>
          )}
          <Title>{pageTitle}</Title>
        </StyledGridItem>
        <StyledGridItem secondary>
          {!!menuComponent && <CardActions>{menuComponent}</CardActions>}
          {interactiveElement}
        </StyledGridItem>
      </StyledGrid>
    </Box>
  );
}
