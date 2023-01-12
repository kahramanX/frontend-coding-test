import { memo, useState } from "react";
import GlobalStyles, { lightTheme, darkTheme } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [count, setCount] = useState<number>(15);
  const [themeMode, setThemeMode] = useState<"light" | "dark" | string>(
    "light"
  );

  return (
    <>
      <ThemeProvider theme={themeMode == "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header count={count} setThemeMode={setThemeMode} />
        <Body setCount={setCount} count={count} />
      </ThemeProvider>
    </>
  );
}

export default memo(App);
