import { MouseEventHandler, SyntheticEvent, useState } from "react";
import BasicModal from "@components/BasicModal/BasicModal";
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
    <BasicModal open={isOpen} onClose={handleClose}>
      <ConfirmationDialogContent>
        <Typography textAlign='center'>{children}</Typography>
        <ButtonBox>
          <Button onClick={handleClose} variant='text'>
            {t("noBtn")}
          </Button>
          <Button onClick={handleConfirmation} variant='contained'>
            {t("yesBtn")}
          </Button>
        </ButtonBox>
      </ConfirmationDialogContent>
    </BasicModal>
  );
};
