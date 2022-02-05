import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { StyledDialog, IconBox, ButtonBox } from "./BasicModal.style";
import DialogContent from "@mui/material/DialogContent";
import { DialogTitle } from "@mui/material";

interface BasicModalProps {
  headerIcon?: JSX.Element;
  children?: JSX.Element | JSX.Element[];
  buttons: JSX.Element[];
  onConfirm?: () => void;
  handleClose?: () => void;
  isOpen: boolean;
  paddings: Array<number>;
  title?: string;
}

export default function BasicModal({
  children,
  headerIcon,
  onConfirm,
  isOpen,
  handleClose,
  paddings,
  title,
  buttons = [
    <Button onClick={handleClose}>Cancel</Button>,
    <Button onClick={onConfirm}>Confirm</Button>,
  ],
}: BasicModalProps) {
  return (
    <StyledDialog
      paddings={paddings}
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        elevation: 2,
      }}
    >
      {headerIcon && <IconBox>{headerIcon}</IconBox>}
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <ButtonBox>{buttons}</ButtonBox>
    </StyledDialog>
  );
}
