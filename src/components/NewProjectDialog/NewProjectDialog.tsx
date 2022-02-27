import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EditIcon from "@mui/icons-material/Edit";

import BasicModal from "../BasicModal/BasicModal";
import { Button } from "../Button/Button";
import Input from "../Input/Input";
import { LoadingButton } from "@mui/lab";

import { Pages } from "../../views/pages";
import { createNewProjectPattern } from "../../validation/patterns.const";

interface NewProjectDialogProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function NewProjectDialog({
  isOpen,
  setIsOpen,
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
      navigate(Pages.Projects);
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
    console.log("Project created");
    setIsLoading(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setError("");
    setInputValue(value);
    const reg = new RegExp(createNewProjectPattern).test(value);
    if (!reg) {
      setError(t("dialogCreateProjectHelperText"));
    }
  };
  return (
    <BasicModal
      paddings={[10, 6, 7, 6]}
      isOpen={isOpen}
      headerIcon={<EditIcon />}
      title={t("dialogCreateProjectTitle")}
      alignTitle='center'
      handleClose={handleClose}
      buttons={[
        <Button onClick={handleClose} variant='text' key='btn-1'>
          {t("cancelBtn")}
        </Button>,
        isLoading ? (
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
        ),
      ]}
    >
      <Input
        value={inputValue}
        onChangeHandler={handleInputChange}
        error={Boolean(error)}
        helperText={error}
      />
    </BasicModal>
  );
}
