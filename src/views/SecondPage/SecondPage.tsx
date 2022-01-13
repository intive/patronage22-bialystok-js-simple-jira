import { StyledPageWrapper } from "../Home/Home.style";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

export const SecondPage = () => {
  const dispatch = useDispatch();

  const { adding } = bindActionCreators(actionCreators, dispatch);

  return (
    <StyledPageWrapper>
      <p>If you see this page - React Router works</p>
      <Link to="/">
        <Button adding={adding} child="click to return to the previous page" />
      </Link>
    </StyledPageWrapper>
  );
};
