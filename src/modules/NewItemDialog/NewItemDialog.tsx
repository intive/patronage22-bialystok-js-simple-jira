import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import EditIcon from "@mui/icons-material/Edit";
import { LoadingButton } from "@mui/lab";

import BasicModal from "@components/BasicModal/BasicModal";
import { Button } from "@components/Button/Button";
import Input from "@components/Input/Input";
import { AlertSuccess, AlertError } from "@components/Alert/Alert";

import {
  ButtonBox,
  IconBox,
  StyledDialogTitle,
  NewItemDialogContent,
} from "./NewItemDialog.style";
import { createNewProjectPattern } from "../../validation/patterns.const";
interface NewItemDialogProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  dialogTitle: string;
  dialogHelper: string;
  board?: boolean;
  handleAdd: (arg: string) => void;
}

export const NewItemDialog = ({
  isOpen,
  setIsOpen,
  dialogTitle,
  dialogHelper,
  handleAdd,
}: NewItemDialogProps) => {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAlertProjectSuccessOpen, setIsAlertProjectSuccessOpen] =
    useState(false);
  const [isAlertProjectErrorOpen, setIsAlertProjectErrorOpen] = useState(false);

  const firstRender = useRef(true);

  useEffect(() => {
    const changeViewTimeout = setTimeout(() => {
      setIsLoading(false);
      setIsOpen(false);
    }, 1000);
    const alertProjectSuccessTimeout = setTimeout(() => {
      setIsAlertProjectSuccessOpen(false);
    }, 1500);
    return () => {
      clearTimeout(changeViewTimeout);
      clearTimeout(alertProjectSuccessTimeout);
    };
  }, [isLoading]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCreate = () => {
    inputValue && handleAdd(inputValue);
    setIsLoading(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setError("");
    setInputValue(value);
    const reg = new RegExp(createNewProjectPattern).test(value);
    if (!reg) {
      setError(dialogHelper);
    }
  };
  return (
    <>
      <BasicModal open={isOpen} onClose={handleClose}>
        <NewItemDialogContent>
          <IconBox>
            <EditIcon />
          </IconBox>
          <StyledDialogTitle>{dialogTitle}</StyledDialogTitle>
          <Input
            value={inputValue}
            onChangeHandler={handleInputChange}
            error={Boolean(error)}
            helperText={error}
            variant='filled'
          />
          <ButtonBox>
            <Button onClick={handleClose} variant='text'>
              {t("cancelBtn")}
            </Button>
            {isLoading ? (
              <LoadingButton sx={{ minWidth: "98.77px" }} loading={true} />
            ) : (
              <Button disabled={!!error || !inputValue} onClick={handleCreate}>
                {t("createBtn")}
              </Button>
            )}
          </ButtonBox>
        </NewItemDialogContent>
      </BasicModal>
      <AlertSuccess
        isOpen={isAlertProjectSuccessOpen}
        alertMsg={t("alertProjectCreated")}
      />
      <AlertError
        isOpen={isAlertProjectErrorOpen}
        alertMsg={t("alertProjectError")}
        handleClose={() => {
          setIsAlertProjectErrorOpen(false);
        }}
      />
    </>
  );
};
