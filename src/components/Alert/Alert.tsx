import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export interface AlertExtraProps {
  alertMsg: string;
  handleClose?: () => void;
  isOpen: boolean;
}

export function AlertSuccess({
  alertMsg,
  isOpen,
  handleClose,
}: AlertExtraProps) {
  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity='success'>
        {alertMsg}
      </Alert>
    </Snackbar>
  );
}

export function AlertError({ alertMsg, isOpen, handleClose }: AlertExtraProps) {
  return (
    <Snackbar open={isOpen} onClose={handleClose}>
      <Alert onClose={handleClose} severity='error'>
        {alertMsg}
      </Alert>
    </Snackbar>
  );
}
