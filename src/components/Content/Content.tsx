import { Navigate } from "react-router-dom";

import { toHome } from "../../views/routes";
import { LoaderWrapper, StyledLoader } from "./Content.styled";
interface ContentProps {
  isLoading: boolean;
  noContentToShow: boolean;
  children: JSX.Element;
}

const Content = ({ isLoading, noContentToShow, children }: ContentProps) => {
  if (isLoading) {
    return (
      <LoaderWrapper>
        <StyledLoader size={50} />
      </LoaderWrapper>
    );
  }

  if (noContentToShow) {
    return <Navigate to={toHome} />;
  }

  return children;
};

export default Content;
