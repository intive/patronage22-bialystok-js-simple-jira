import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EditIcon from "@mui/icons-material/Edit";

import BasicModal from "@components/BasicModal/BasicModal";
import { Button } from "@components/Button/Button";
import Input from "@components/Input/Input";
import { LoadingButton } from "@mui/lab";
import { AlertSuccess, AlertError } from "@components/Alert/Alert";
import { createNewProjectPattern } from "../../validation/patterns.const";
import { toProjects } from "src/views/routes";

//DataMock
let FetchProjectsAPI: any;

async function importApiModule() {
  if (localStorage["USE_MOCK"] === "true") {
    const module = await import("../../api/projects/mockProjectsApi");
    FetchProjectsAPI = module.default;
  } else {
    const module = await import("../../api/projects/projectsApi");
    FetchProjectsAPI = module.default;
  }
}
// End
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
  const [isAlertProjectSuccessOpen, setIsAlertProjectSuccessOpen] =
    useState(false);
  const [isAlertProjectErrorOpen, setIsAlertProjectErrorOpen] = useState(false);

  const firstRender = useRef(true);

  const navigate = useNavigate();

  useEffect(() => {
    let changeViewTimeout: any;
    importApiModule();
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    changeViewTimeout = setTimeout(() => {
      !board && navigate(toProjects);
      setIsLoading(false);
      setIsOpen(false);
      setIsAlertProjectErrorOpen(false);
      setIsAlertProjectSuccessOpen(false);
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
    FetchProjectsAPI.addProject({
      alias: inputValue,
      name: inputValue,
      description: "We are not doing that, yet.",
      isActive: true,
    }).then((res: any) =>
      res.responseCode
        ? setIsAlertProjectSuccessOpen(true)
        : setIsAlertProjectErrorOpen(true)
    );
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
      <BasicModal
        paddings={[10, 6, 7, 6]}
        isOpen={isOpen}
        headerIcon={<EditIcon />}
        title={dialogTitle}
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
      <AlertSuccess
        isOpen={isAlertProjectSuccessOpen}
        alertMsg={t("alertProjectCreated")}
      />
      <AlertError
        isOpen={isAlertProjectErrorOpen}
        alertMsg={t("alertProjectError")}
      />
    </>
  );
}
