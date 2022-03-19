import { Navigate } from "react-router-dom";

import { toHome } from "../../views/routes";
import { LoaderWrapper, StyledLoader } from "./Content.styled";
interface ContentProps {
  isLoading: boolean;
  children: JSX.Element;
}

const Content = ({ isLoading, children }: ContentProps) => {
  if (isLoading) {
    return (
      <LoaderWrapper>
        <StyledLoader size={50} />
      </LoaderWrapper>
    );
  }

  return children;
};

export default Content;
