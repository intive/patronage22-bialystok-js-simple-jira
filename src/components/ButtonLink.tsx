import { Button } from "@mui/material";
import { StyledLink } from "./StyledLink";

interface ButtonLinkProps {
  label?: string;
  to: string;
  buttonVariant?: "text" | "outlined" | "contained";
}

const ButtonLink = ({ label = "Click me!", to, buttonVariant }: ButtonLinkProps) => {
  return (
    <StyledLink to={to}>
      <Button variant={buttonVariant}>{label}</Button>
    </StyledLink>
  );
};

export default ButtonLink;