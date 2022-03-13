import Box from "@mui/material/Box";
import {
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
  menuComponent?: React.ReactNode;
  returnLinkName?: string;
  returnLink?: string;
  interactiveElement?: JSX.Element;
}

export default function PageHeader({
  pageTitle,
  returnLink,
  menuComponent,
  interactiveElement,
  returnLinkName,
}: SectionProps) {
  return (
    <Box>
      <StyledGrid container>
        <StyledGridItem>
          {returnLink && (
            <StyledLink to={returnLink}>
              <SubTitle>{returnLinkName}</SubTitle>
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
