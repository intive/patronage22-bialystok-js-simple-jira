import {
  StyledDialog,
  IconBox,
  ButtonBox,
  StyledDialogTitle,
} from "./BasicModal.style";
import DialogContent from "@mui/material/DialogContent";

export interface BasicModalProps {
  headerIcon?: JSX.Element;
  children?: JSX.Element | JSX.Element[];
  buttons: JSX.Element[];
  handleClose?: () => void;
  isOpen: boolean;
  /**paddings are calculated by taking mui theme spacing
   * property and multiplying it by values in Array, calculated paddings are set clockwise, just like in normal css*/
  paddings: Array<number>;
  title?: string;
  alignTitle: "center" | "end" | "start";
  /** Bottom title margin*/
  titleMargin?: number;
  buttonsTopMargin?: number;
}

export default function BasicModal({
  children,
  headerIcon,
  isOpen,
  handleClose,
  paddings,
  title,
  alignTitle,
  titleMargin = 16,
  buttons,
  buttonsTopMargin = 32,
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
