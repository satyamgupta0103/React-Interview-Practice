import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function SiblingComponentC() {
  const { theme } = useContext(ThemeContext);
  console.log("SiblingComponentC", theme);
  return (
    <div>
      <h1 className={`${theme === "dark" ? "dark" : "light"}`}>
        Sibling Component C
      </h1>
    </div>
  );
}
