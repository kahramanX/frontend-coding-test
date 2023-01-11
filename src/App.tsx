import { memo, useState } from "react";
import GlobalStyles from "./globalStyles";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [count, setCount] = useState<number>(15);

  return (
    <>
      <GlobalStyles />
      <Header count={count} />
      <Body setCount={setCount} count={count} />
    </>
  );
}

export default memo(App);
