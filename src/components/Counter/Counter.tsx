import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import { CounterWrapper, CounterNumber } from "./Counter.style";

export const Counter = () => {
  const state = useSelector((state: RootState) => state.bank);

  return (
    <CounterWrapper>
      <p>
        If it's countig here when you're
        <br />
        switching pages - Redux works
      </p>
      <CounterNumber>{state}</CounterNumber>
    </CounterWrapper>
  );
};
