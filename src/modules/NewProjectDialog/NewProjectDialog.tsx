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

import { createNewProjectPattern } from "../../validation/patterns.const";
import { toProjects } from "src/views/routes";

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
      !board && navigate(toProjects);
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
    <BasicModal open={isOpen} onClose={handleClose}>
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
          variant='filled'
        />
        <ButtonBox>
          <Button onClick={handleClose} variant='text'>
            {t("cancelBtn")}
          </Button>
          {isLoading ? (
            <LoadingButton sx={{ minWidth: "98.77px" }} loading={true} />
          ) : (
            <Button
              disabled={!!error || !inputValue}
              onClick={() => handleClick(inputValue)}
            >
              {t("createBtn")}
            </Button>
          )}
        </ButtonBox>
      </NewProjectDialogContent>
    </BasicModal>
  );
}
