import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import { useTranslation } from "react-i18next";
import { CounterWrapper, CounterNumber } from "./Counter.style";

export const Counter = () => {
  const state = useSelector((state: RootState) => state.bank);
  const { t } = useTranslation();

  return (
    <CounterWrapper>
      <p>{t("paragraph4")}</p>
      <CounterNumber>{state}</CounterNumber>
    </CounterWrapper>
  );
};
