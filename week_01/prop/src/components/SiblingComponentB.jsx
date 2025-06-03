import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function SiblingComponentB() {
  const { theme } = useContext(ThemeContext);
  console.log("SiblingComponentB", theme);
  return (
    <div>
      <h1 className={`${theme === "dark" ? "dark" : "light"}`}>
        Sibling Component B
      </h1>
    </div>
  );
}
