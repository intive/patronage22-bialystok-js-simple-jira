import { useState, useEffect } from "react";

export const useAlerts = () => {
  const [isSuccessAlertActive, setIsSuccessAlertActive] =
    useState<boolean>(false);
  const [isErrorAlertActive, setIsErrorAlertActive] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (isSuccessAlertActive === true) {
      setTimeout(() => {
        setIsSuccessAlertActive(false);
      }, 3000);
    }
  }, [isSuccessAlertActive]);

  const openAlert = (alertType: "success" | "error", msg: string) => {
    setMessage(msg);
    if (alertType === "success") {
      setIsSuccessAlertActive(true);
    }
    if (alertType === "error") {
      setIsErrorAlertActive(true);
    }
  };

  const closeErrorAlert = () => {
    setIsErrorAlertActive(false);
  };

  return {
    isSuccessAlertActive,
    isErrorAlertActive,
    message,
    openAlert,
    closeErrorAlert,
  };
};
