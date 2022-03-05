import { MouseEventHandler, SyntheticEvent, useState } from "react";
import BasicModal, { BasicModalProps } from "@components/BasicModal/BasicModal";
import { Button } from "@components/Button/Button";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

import {
  ConfirmationDialogContent,
  ButtonBox,
} from "./ConfirmationDialog.style";

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

  return (
    <BasicModal isOpen={isOpen} handleClose={handleClose}>
      <ConfirmationDialogContent>
        <Typography textAlign='center'>{children}</Typography>
        <ButtonBox>
          <Button onClick={handleClose} variant='text' key='btn-1'>
            {t("noBtn")}
          </Button>
          <Button onClick={handleConfirmation} variant='contained' key='btn-2'>
            {t("yesBtn")}
          </Button>
        </ButtonBox>
      </ConfirmationDialogContent>
    </BasicModal>
  );
};
