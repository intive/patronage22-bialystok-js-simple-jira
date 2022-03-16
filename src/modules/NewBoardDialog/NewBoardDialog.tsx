import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  NewProjectDialogContent,
} from "./NewBoardDialog.style";
import { createNewProjectPattern } from "../../validation/patterns.const";
import { toProject } from "src/views/routes";

//DataMock
let FetchBoardsAPI: any;

async function importApiModule() {
  const module = await import("../../api/boards/boardsApi");
  FetchBoardsAPI = module.default;
}
// End
interface NewBoardDialogProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  dialogTitle: string;
  dialogHelper: string;
  handleClick?: any;
  board?: boolean;
}

export default function NewBoardDialog({
  isOpen,
  setIsOpen,
  dialogTitle,
  dialogHelper,
  handleClick,
  board,
}: NewBoardDialogProps) {
  const { t } = useTranslation();
  const { projectID: projectID } = useParams();
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
      !board;
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
    board
      ? (handleClick = handleClick(inputValue))
      : (handleClick = handleClick);
    const date = new Date();
    date.toISOString();
    FetchBoardsAPI.addBoard({
      data: {
        id: 0,
        alias: inputValue,
        name: inputValue,
        description: inputValue,
        projectId: projectID,
        statusId: 0,
        boardId: 1,
        isActive: true,
        createdOn: date,
        modifiedOn: date,
        board_Status: [
          {
            boardId: 0,
            statusId: 0,
          },
        ],
      },
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
              <Button disabled={!!error || !inputValue} onClick={handleCreate}>
                {t("createBtn")}
              </Button>
            )}
          </ButtonBox>
        </NewProjectDialogContent>
      </BasicModal>
      <AlertSuccess
        isOpen={isAlertProjectSuccessOpen}
        alertMsg={t("NewBoardAddedWithSuccess")}
      />
      <AlertError
        isOpen={isAlertProjectErrorOpen}
        alertMsg={t("NewBoardAddedWithError")}
        handleClose={() => {
          setIsAlertProjectErrorOpen(false);
        }}
      />
    </>
  );
}
