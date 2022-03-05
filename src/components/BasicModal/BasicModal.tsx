import { StyledDialog } from "./BasicModal.style";
export interface BasicModalProps {
  children?: JSX.Element | JSX.Element[];
  handleClose?: () => void;
  isOpen: boolean;
}

export default function BasicModal({
  children,
  isOpen,
  handleClose,
}: BasicModalProps) {
  return (
    <StyledDialog
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        elevation: 2,
      }}
    >
      {children}
    </StyledDialog>
  );
}
