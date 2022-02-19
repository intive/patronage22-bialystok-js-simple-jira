import { useState } from "react";

interface errorObject {
  [key: string]: any;
}

const useForm = (initialValues: any, callback: any, validate: any) => {
  const [values, setValues] = useState(initialValues);
  const [IsAfterFirstSubmitAttempt, setIsAfterFirstSubmitAttempt] =
    useState<boolean>(false);
  const [errors, setErrors] = useState<errorObject>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (IsAfterFirstSubmitAttempt) {
      const newValues = { ...values, [name]: value };
      setValues(newValues);
      setErrors(validate(newValues));
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = validate(values);
    if (Object.keys(errors).length === 0) {
      callback();
      reset();
    } else {
      setErrors(errors);
      setIsAfterFirstSubmitAttempt(true);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setIsAfterFirstSubmitAttempt(false);
    setErrors({});
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
