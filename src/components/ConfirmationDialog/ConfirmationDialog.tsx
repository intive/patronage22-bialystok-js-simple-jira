import { MouseEventHandler, SyntheticEvent, useState } from "react";
import BasicModal, { BasicModalProps } from "@components/BasicModal/BasicModal";
import { Button } from "@components/Button/Button";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

export interface ConfirmationDialogProps {
  children: string | JSX.Element | JSX.Element[];
  confirmHandler: () => void;
  isOpen: boolean;
  handleClose?: () => void;
}

export const ConfirmationDialog = ({
  children,
  confirmHandler,
  isOpen,
  handleClose,
}: ConfirmationDialogProps) => {
  const { t } = useTranslation();

  const handleConfirmation = () => {
    confirmHandler();
  };

  const buttons = [
    <Button onClick={handleClose} variant='text' key='btn-1'>
      {t("noBtn")}
    </Button>,
    <Button onClick={handleConfirmation} variant='contained' key='btn-2'>
      {t("yesBtn")}
    </Button>,
  ];

  return (
    <BasicModal
      buttons={buttons}
      isOpen={isOpen}
      paddings={[15, 6, 7, 6]}
      alignTitle='center'
      handleClose={handleClose}
    >
      <Typography textAlign='center'>{children}</Typography>
    </BasicModal>
  );
};
