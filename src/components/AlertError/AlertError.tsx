import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export interface AlertErrorProps {
  alertMsg: string;
  handleClose?: () => void;
  isOpen: boolean;
}

export default function AlertError({
  alertMsg,
  isOpen,
  handleClose,
}: AlertErrorProps) {
  return (
    <Snackbar open={isOpen} onClose={handleClose}>
      <Alert onClose={handleClose} severity='error' sx={{ width: "100%" }}>
        {alertMsg}
      </Alert>
    </Snackbar>
  );
}
