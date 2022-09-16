import { ChangeEventHandler } from "react";
import "./styles.css";

const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDarkTheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDarkTheme);

if (defaultDark) {
    setDark();
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
        setDark();
    } else {
        setLight();
    }
};

const ThemeMode = () => {
    return (
        <div className="toggle-theme-wrapper">
            <label className="toggle-theme" htmlFor="checkbox">
                <input
                    data-testid="toggle-theme-input"
                    type="checkbox"
                    id="checkbox"
                    onChange={toggleTheme}
                    defaultChecked={defaultDark}
                />
                <div className="slider toggle"></div>
            </label>
        </div>
    );
};

export default ThemeMode;
