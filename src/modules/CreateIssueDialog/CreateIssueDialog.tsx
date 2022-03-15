import { useTranslation } from "react-i18next";
import BasicModal from "@components/BasicModal/BasicModal";
import { Button } from "@components/Button/Button";
import Input from "@components/Input/Input";
import { Select } from "@components/Select/Select";
import {
  StyledFormGroup,
  LongInput,
  CreateIssueDialogContent,
  ButtonBox,
  StyledDialogTitle,
} from "./CreateIssueDialog.style";
import useForm from "../../hooks/useForm";
import { validateInfo } from "../../validation/validateCreateIssue";
import { useEffect, useRef, useState } from "react";
import { AlertError, AlertSuccess } from "@components/Alert/Alert";
import { LoadingButton } from "@mui/lab";

const initialValues = {
  reporter: "",
  project: "",
  summary: "",
  description: "",
  linkedIssues: "arises out of",
  issue: "Select Issue",
  assignee: "Unassigned",
};

export const createIssueOptions = {
  project: ["Awesome Project", "Best project"],
  linkedIssues: ["arises out of"],
  issue: ["Select Issue"],
  assignee: ["Unassigned"],
};

//DataMock
let FetchIssuesAPI: any;

async function importApiModule() {
  const module = await import("../../api/Issues/issuesApi");
  FetchIssuesAPI = module.default;
}
// End

interface CreateIssueDialogProps {
  isOpen: boolean;
  handleClose: () => void;
}

export default function CreateIssueDialog({
  isOpen,
  handleClose,
}: CreateIssueDialogProps) {
  const { t } = useTranslation();
  const [isAlertIssueSuccessOpen, setIsAlertIssueSuccessOpen] = useState(false);
  const [isAlertIssueErrorOpen, setIsAlertIssueErrorOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const firstRender = useRef(true);

  const { handleChange, values, handleSubmit, errors } = useForm(
    initialValues,
    submitForm,
    validateInfo
  );
  function submitForm() {
    console.log("submitted");
    console.log(values);

    FetchIssuesAPI.addIssue({
      data: {
        ...values,
      },
    }).then((res: any) =>
      res.responseCode
        ? setIsAlertIssueSuccessOpen(true)
        : setIsAlertIssueErrorOpen(true)
    );
    setIsLoading(true);
    handleClose();
  }

  useEffect(() => {
    let changeViewTimeout: any;
    importApiModule();
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const alertIssueSuccessTimeout = setTimeout(() => {
      setIsAlertIssueSuccessOpen(false);
    }, 1500);
    return () => {
      clearTimeout(alertIssueSuccessTimeout);
    };
  }, [isLoading]);

  return (
    <>
      <BasicModal open={isOpen} onClose={handleClose}>
        <CreateIssueDialogContent>
          <StyledDialogTitle>{t("createIssue")}</StyledDialogTitle>
          <StyledFormGroup>
            <Input
              onChangeHandler={handleChange}
              value={values.reporter}
              name='reporter'
              labelHelperText={t("labelReporter")}
              helperText={errors.reporter}
              variant='filled'
              disabled
            />
            <Select
              secondary
              handleSelect={handleChange}
              value={values.project}
              options={createIssueOptions.project}
              inputProps={{ name: "project" }}
              labelText={t("labelProject")}
              helperText={errors.project}
            />
            <LongInput
              onChangeHandler={handleChange}
              value={values.summary}
              name='summary'
              labelHelperText={t("labelSummary")}
              helperText={errors.summary}
              variant='filled'
            />
            <LongInput
              onChangeHandler={handleChange}
              value={values.description}
              multiline
              name='description'
              labelHelperText={t("labelDescription")}
              helperText={errors.description}
              variant='filled'
            />
            <Select
              secondary
              handleSelect={handleChange}
              value={values.linkedIssues}
              options={createIssueOptions.linkedIssues}
              inputProps={{ name: "linkedIssues" }}
              labelText={t("labelLinkedIssues")}
              helperText={errors.linkedIssues}
            />
            <Select
              secondary
              handleSelect={handleChange}
              value={values.issue}
              options={createIssueOptions.issue}
              inputProps={{ name: "issue" }}
              helperText={errors.issue}
            />
            <Select
              secondary
              handleSelect={handleChange}
              value={values.assignee}
              options={createIssueOptions.assignee}
              inputProps={{ name: "assignee" }}
              labelText={t("labelAssignee")}
              helperText={errors.assignee}
            />
          </StyledFormGroup>
          <ButtonBox>
            <Button onClick={handleClose} variant='text'>
              {t("cancelBtn")}
            </Button>
            {isLoading ? (
              <LoadingButton sx={{ minWidth: "98.77px" }} loading={true} />
            ) : (
              <Button
                disabled={Object.keys(errors).length > 0}
                onClick={handleSubmit}
              >
                {t("continueBtn")}
              </Button>
            )}
          </ButtonBox>
        </CreateIssueDialogContent>
      </BasicModal>

      <AlertSuccess
        isOpen={isAlertIssueSuccessOpen}
        alertMsg={t("NewIssueAddedWithSuccess")}
      />
      <AlertError
        isOpen={isAlertIssueErrorOpen}
        alertMsg={t("NewIssueAddedWithError")}
        handleClose={() => {
          setIsAlertIssueErrorOpen(false);
        }}
      />
    </>
  );
}
