import {
  StyledDialog,
  IconBox,
  ButtonBox,
  StyledDialogTitle,
} from "./BasicModal.style";
import DialogContent from "@mui/material/DialogContent";

interface BasicModalProps {
  headerIcon?: JSX.Element;
  children?: JSX.Element | JSX.Element[];
  buttons: JSX.Element[];
  handleClose?: () => void;
  isOpen: boolean;
  paddings: Array<number>;
  title?: string;
  alignTitle: "center" | "end" | "start";
  titleMargin?: string;
  buttonsTopMargin?: string;
}

export default function BasicModal({
  children,
  headerIcon,
  isOpen,
  handleClose,
  paddings,
  title,
  alignTitle,
  titleMargin = "16px",
  buttons,
  buttonsTopMargin = "32px",
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
      <StyledDialogTitle alignTitle={alignTitle} titleMargin={titleMargin}>
        {title}
      </StyledDialogTitle>
      <DialogContent>{children}</DialogContent>
      <ButtonBox buttonsTopMargin={buttonsTopMargin}>{buttons}</ButtonBox>
    </StyledDialog>
  );
}
