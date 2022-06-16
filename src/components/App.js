import Header from "./Header";
import { useState } from "react";
import Speakers from "./Speakers";

function App() {
  const [theme, setTheme] = useState("Custom");
  return (
    <div
      className={
        theme === "Custom" ? "container-fluid light" : "container-fluid dark"
      }
    >
      <Header theme={theme} />
      <Speakers theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
