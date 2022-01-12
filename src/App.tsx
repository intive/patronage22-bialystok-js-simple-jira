import { ThemeProvider } from "styled-components";
import theme from "./theme/mainTheme";
import { Home } from "./views/Home/Home";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </>
);

export default App;
