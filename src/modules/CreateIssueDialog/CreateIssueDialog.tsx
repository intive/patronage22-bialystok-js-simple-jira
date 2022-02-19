import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import BasicModal from "../../components/BasicModal/BasicModal";
import { Button } from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Select } from "../../components/Select/Select";

import { StyledFormGroup, LongInput } from "./CreateIssueDialog.style";

import useForm from "../../hooks/useForm";
import { validateInfo } from "../../validation/validateCreateIssue";

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

export default function CreateIssueDialog() {
  const { t } = useTranslation();

  const [isOpen, setOpen] = useState<boolean>(true);
  const { handleChange, values, handleSubmit, errors } = useForm(
    initialValues,
    submitForm,
    validateInfo
  );

  function submitForm() {
    console.log("submitted");
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BasicModal
      paddings={[5, 5, 3, 5]}
      isOpen={isOpen}
      title={t("createIssue")}
      alignTitle='start'
      handleClose={handleClose}
      buttonsTopMargin={56}
      buttons={[
        <Button onClick={handleClose} variant='text' key='btn-1'>
          {t("cancelBtn")}
        </Button>,
        <Button
          disabled={Object.keys(errors).length > 0}
          onClick={handleSubmit}
          key='btn-2'
        >
          {t("continueBtn")}
        </Button>,
      ]}
    >
      <StyledFormGroup>
        <Input
          onChangeHandler={handleChange}
          value={values.reporter}
          name='reporter'
          labelText={t("labelReporter")}
          helperText={errors.reporter}
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
          labelText={t("labelSummary")}
          helperText={errors.summary}
        />
        <LongInput
          onChangeHandler={handleChange}
          value={values.description}
          multiline
          name='description'
          labelText={t("labelDescription")}
          helperText={errors.description}
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
    </BasicModal>
  );
}
