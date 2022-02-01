import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { StyledDialog, IconBox } from "./BasicModal.style";

interface BasicModalProps {
  headerIcon?: JSX.Element;
  children?: JSX.Element | JSX.Element[];
  onConfirm?: () => void;
  canOverFlow: Boolean;
}

export default function BasicModal({
  children,
  headerIcon,
  onConfirm,
  canOverFlow,
}: BasicModalProps) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <StyledDialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 2,
          sx: { overflow: canOverFlow ? "visible" : "auto" },
        }}
      >
        {headerIcon && <IconBox>{headerIcon}</IconBox>}
        {children}
        <ButtonGroup variant='contained'>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onConfirm}>Confirm</Button>
        </ButtonGroup>
      </StyledDialog>
    </div>
  );
}
