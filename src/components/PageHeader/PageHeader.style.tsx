import { styled, css } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Button } from "../Button/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface StyledWrapperProps {
  secondary?: boolean;
}

export const StyledGridItem = styled(Grid)<StyledWrapperProps>`
  margin-left: 64px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100%;

  ${({ secondary }) =>
    secondary &&
    css`
      margin-right: 64px;
      flex-direction: row;
      height: 100%;
      align-items: center;
    `}
`;

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  lineHeight: "40px",
  color: theme.palette.grey[700],
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  marginBottom: "8px",
  fontSize: "14px",
  lineHeight: "24px",
  color: theme.palette.grey[500],
}));

export const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  height: "40px",
  padding: theme.spacing(1, 3, 1, 3),
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.grey[700],
  borderRadius: 8,
  textTransform: "none",
  fontWeight: "400",
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.text.secondary,
  borderBottom: `1px solid ${theme.palette.grey[100]}`,
  justifyContent: "space-between",
  height: "152px",
}));
