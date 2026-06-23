import FlexBox from "./containers/FlexBox";
import { ThemeContext } from "../../../../hooks/useContext/themes-demo/src/components/context/ThemeContext";
import { useContext } from "react";
import "../App.css";

function MainContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <FlexBox
      direction="column"
      gap="10px"
      padding="1px 30px 20px 30px"
      // background="cyan"
      // style={{ color: "Blue" }}
      style={{
        background: theme === "light" ? "#000000" : "#ffffff",
        color: theme === "light" ? "#ffffff" : "#000000",
      }}
      grow={1}
    >
      <h1> Dashboard Overview </h1>
      <h1> Home Page </h1>
    </FlexBox>
  );
}

export default MainContent;
