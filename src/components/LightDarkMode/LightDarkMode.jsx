import useLocalStorage from "./useLocalStorage";
import "./style.css";
function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  function handleClick() {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  }

  return (
    <div className="light-dark-mode" theme-mode={theme}>
      <div className="container ">
        <p className="change-background-color">Hello World!</p>
        <button onClick={handleClick}> Dark Light Mode</button>
      </div>
    </div>
  );
}
export default LightDarkMode;
