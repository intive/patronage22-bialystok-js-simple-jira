interface errorObject {
  [key: string]: any;
}

export function validateInfo(values: any) {
  let errors: errorObject = {};
  /*errors property values are used as keys in translations*/
  if (!values.summary.trim()) {
    errors.summary = "summaryRequired";
  }
  if (!values.description.trim()) {
    errors.description = "descriptionRequired";
  }
  return errors;
}
