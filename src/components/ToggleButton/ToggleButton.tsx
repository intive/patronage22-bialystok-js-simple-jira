import React from "react";
import ToggleButton from "@mui/material/ToggleButton";

export interface ToggleProps {
  children: JSX.Element;
  mode: string;
  toggle: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

export default function ToggleButtonComponent(props: ToggleProps): JSX.Element {
  const { toggle } = props;
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: (): void => {
        toggle((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const [selected, setSelected] = React.useState(false);
  return (
    <ToggleButton
      sx={{ border: "none" }}
      value="check"
      selected={selected}
      onChange={() => {
        colorMode.toggleColorMode();
        setSelected(!selected);
      }}
    >
      {props.children}
    </ToggleButton>
  );
}
