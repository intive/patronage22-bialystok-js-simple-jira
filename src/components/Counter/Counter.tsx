import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import { useTranslation } from "react-i18next";
import { CounterWrapper, CounterNumber } from "./Counter.style";
import { selectCountValue } from "../../views/SecondPage/countSlice";
import { useAppSelector } from "../../state/storeHooks";

export const Counter = () => {
  // const state = useSelector((state: RootState) => state.bank);
  const count = useAppSelector(selectCountValue);
  const { t } = useTranslation();

  return (
    <CounterWrapper>
      <p>{t("paragraph4")}</p>
      <CounterNumber>{count}</CounterNumber>
    </CounterWrapper>
  );
};
