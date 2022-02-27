import * as React from "react";
import Stack from "@mui/material/Stack";
import { AlertSuccess } from "./Alert";
import { Button } from "@components/Button/Button";

export default function ButtonShowingAlertSuccess() {
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
