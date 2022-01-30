import { styled, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

interface IssuesCardProps {
  title: string;
  children?: React.ReactNode;
}

export const StyledTextField = styled(TextField)(({ theme }) => ({
  // margin: theme.spacing(9, 5, 0, 0),
  width: "100%",
  padding: "12px, 24px, 12px, 16px",
  backgroundColor: theme.palette.grey[700],
  borderRadius: "8px",
  textTransform: "capitalize",
}));

const Input = () => {
  const [text, setText] = useState("");

  return (
    <TextField
      id='outlined-name'
      label='Name'
      onChange={(e) => setText(e.target.value)}
      required
    />
  );
};

export default Input;
