import { StyledPageWrapper } from "./Home.style";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

export const Home = () => {
  const dispatch = useDispatch();

  const { adding } = bindActionCreators(actionCreators, dispatch);

  return (
    <StyledPageWrapper>
      <p>If button is nice and smooth - Material UI works</p>
      <Link to="/second">
        <Button
          adding={adding}
          child="Click here to check if React Router works"
        />
      </Link>
      <p>If colors are black and white - Styled components works</p>
    </StyledPageWrapper>
  );
};
