import { ThemeProvider } from "styled-components";
import theme from "./theme/mainTheme";
import { Button } from "./components/Button/Button";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Button child="CLICK!" />
    </ThemeProvider>
  </>
);

export default App;
