import React from "react";
import useLocalStorage from "../components/LightDarkMode/useLocalStorage";
function About() {
  const [themeColor, setThemeColor] = useLocalStorage("theme");
  return (
    <div>
      <h1 className={themeColor === "dark" ? "bg-pink-300" : "bg-amber-200"}>
        About
      </h1>
    </div>
  );
}
export default About;
