import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  label?: string;
  to: string;
  buttonVariant?: "text" | "outlined" | "contained";
}

const ButtonLink = ({ label = "Click me!", to, buttonVariant }: ButtonLinkProps) => {
  return (
    <Link to={to}>
      <Button variant={buttonVariant}>{label}</Button>
    </Link>
  );
};

export default ButtonLink;