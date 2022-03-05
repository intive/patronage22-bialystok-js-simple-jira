import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EditIcon from "@mui/icons-material/Edit";
import { LoadingButton } from "@mui/lab";

import BasicModal from "@components/BasicModal/BasicModal";
import { Button } from "@components/Button/Button";
import Input from "@components/Input/Input";

import {
  ButtonBox,
  IconBox,
  StyledDialogTitle,
  NewProjectDialogContent,
} from "./NewProjectDialog.style";

import { Pages } from "../../views/pages";
import { createNewProjectPattern } from "../../validation/patterns.const";

interface NewProjectDialogProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  dialogTitle: string;
  dialogHelper: string;
  handleClick?: any;
  board?: boolean;
}

export default function NewProjectDialog({
  isOpen,
  setIsOpen,
  dialogTitle,
  dialogHelper,
  handleClick,
  board,
}: NewProjectDialogProps) {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const firstRender = useRef(true);

  const navigate = useNavigate();

  useEffect(() => {
    let changeViewTimeout: any;
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    changeViewTimeout = setTimeout(() => {
      !board && navigate(Pages.Projects);
      setIsLoading(false);
      setIsOpen(false);
    }, 1000);
    return () => {
      clearTimeout(changeViewTimeout);
    };
  }, [isLoading]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCreate = () => {
    board
      ? (handleClick = handleClick(inputValue))
      : (handleClick = handleClick);
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
    <BasicModal isOpen={isOpen} handleClose={handleClose}>
      <NewProjectDialogContent>
        <IconBox>
          <EditIcon />
        </IconBox>
        <StyledDialogTitle>{dialogTitle}</StyledDialogTitle>
        <Input
          value={inputValue}
          onChangeHandler={handleInputChange}
          error={Boolean(error)}
          helperText={error}
        />
        <ButtonBox>
          <Button onClick={handleClose} variant='text' key='btn-1'>
            {t("cancelBtn")}
          </Button>
          {isLoading ? (
            <LoadingButton
              sx={{ minWidth: "98.77px" }}
              key='btn-2'
              loading={true}
            />
          ) : (
            <Button
              disabled={!!error || !inputValue}
              onClick={handleCreate}
              key='btn-2'
            >
              {t("createBtn")}
            </Button>
          )}
        </ButtonBox>
      </NewProjectDialogContent>
    </BasicModal>
  );
}
