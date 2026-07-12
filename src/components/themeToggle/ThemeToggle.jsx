import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMoon } from "react-icons/ai";
import { PiSun } from "react-icons/pi";

import { setTheme } from "../../store/features/theme";

import "./themeToggle.scss";

const ThemeToggle = () => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };

  return (
    <button
      className={`theme-toggle ${theme}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <AiOutlineMoon /> : <PiSun />}
    </button>
  );
};

export default ThemeToggle;