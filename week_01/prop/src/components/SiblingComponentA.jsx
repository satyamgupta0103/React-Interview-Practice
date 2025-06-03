import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function SiblingComponentA() {
  const { theme } = useContext(ThemeContext);
  console.log("SiblingComponentA", theme);
  return (
    <div>
      <h1 className={`${theme === "dark" ? "dark" : "light"}`}>
        Sibling Component A
      </h1>
    </div>
  );
}
