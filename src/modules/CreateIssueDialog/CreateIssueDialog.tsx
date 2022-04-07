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
import { useParams } from "react-router-dom";
import { API_ISSUE } from "../../api/contsans";

let FetchDataAPI: any;

async function importApiModule() {
  if (localStorage["USE_MOCK"] === "true") {
    const module = await import("../../api/issue/mockIssueDetails");
    FetchDataAPI = module.default;
  } else {
    const module = await import("../../api/requestsApi");
    FetchDataAPI = module.default;
  }
}

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

interface CreateIssueDialogProps {
  isOpen: boolean;
  handleClose: (res?: any) => void;
}

export default function CreateIssueDialog({
  isOpen,
  handleClose,
}: CreateIssueDialogProps) {
  const { t } = useTranslation();
  const { boardId, projectName, projectId, board } = useParams();
  importApiModule();

  const { handleChange, values, handleSubmit, errors } = useForm(
    initialValues,
    submitForm,
    validateInfo
  );

  function submitForm() {
    console.log(values);
    let res;
    FetchDataAPI.addData(API_ISSUE, {
      data: {
        alias: values.summary,
        name: values.summary,
        description: values.description,
        projectId,
        boardId,
        statusId: 1,
        assignUserId: null,
      },
    }).then((res: any) => {
      res = res;
      handleClose(res);
    });
    console.log("submitted");
    // handleClose(res);
  }

  return (
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
            helperText={t(errors.summary)}
            variant='filled'
            error={Boolean(errors.summary)}
          />
          <LongInput
            onChangeHandler={handleChange}
            value={values.description}
            multiline
            name='description'
            labelHelperText={t("labelDescription")}
            helperText={t(errors.description)}
            variant='filled'
            error={Boolean(errors.description)}
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
          <Button
            disabled={Object.keys(errors).length > 0}
            onClick={handleSubmit}
          >
            {t("continueBtn")}
          </Button>
        </ButtonBox>
      </CreateIssueDialogContent>
    </BasicModal>
  );
}
