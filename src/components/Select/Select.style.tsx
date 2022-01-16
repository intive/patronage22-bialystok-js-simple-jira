import { styled as styledmui } from "@mui/material/styles";
import styled from "styled-components";
import Select from "@mui/material/Select";

export const SelectWrapper = styled.div`
  position: absolute;
  top: 1%;
  right: 5%;
`;

export const StyledSelect = styledmui(Select)`
  max-height: 50px;
`;
