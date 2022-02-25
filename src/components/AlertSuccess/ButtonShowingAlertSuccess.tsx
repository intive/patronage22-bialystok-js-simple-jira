import * as React from "react";
import Stack from "@mui/material/Stack";
import { Button } from "../Button/Button";
import AlertSuccess from "./AlertSuccess";

export default function ButtonShowingSuccessAlert() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack>
      <Button onClick={handleClick}>Show alertSuccess</Button>
      <AlertSuccess
        alertMsg='This is a success message!'
        isOpen={open}
        handleClose={handleClose}
      />
    </Stack>
  );
}
