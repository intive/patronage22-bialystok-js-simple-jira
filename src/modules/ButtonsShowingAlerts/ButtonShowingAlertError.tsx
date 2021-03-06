import * as React from "react";
import Stack from "@mui/material/Stack";
import { AlertError } from "@components/Alert/Alert";
import { Button } from "@components/Button/Button";

export default function ButtonShowingAlertError() {
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
      <Button onClick={handleClick}>Show alertError</Button>
      <AlertError
        alertMsg='This is an error message!'
        isOpen={open}
        handleClose={handleClose}
      />
    </Stack>
  );
}
