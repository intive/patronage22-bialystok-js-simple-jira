interface errorObject {
  [key: string]: any;
}

export function validateInfo(values: any) {
  let errors: errorObject = {};

  if (!values.summary.trim()) {
    errors.summary = "Summary is required";
  }
  if (!values.description.trim()) {
    errors.description = "Description is required";
  }
  return errors;
}
