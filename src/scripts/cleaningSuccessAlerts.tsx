import React from "react";

export const cleainingSuccessAlerts = (
  state: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const alertProjectSuccessTimeout = setTimeout(() => {
    state(false);
  }, 1500);
  return () => {
    clearTimeout(alertProjectSuccessTimeout);
  };
};
