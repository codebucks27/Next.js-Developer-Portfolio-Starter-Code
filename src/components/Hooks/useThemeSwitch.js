import React, { useState, useEffect } from "react";

export function useThemeSwitch() {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        return check;
      } else {
        setMode(mediaQuery.matches ? "dark" : "light");
        window.localStorage.setItem(
          "theme",
          mediaQuery.matches ? "dark" : "light"
        );
        if (mediaQuery.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    }

    if (mode === "light") {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [mode]);

  // we're doing it this way instead of as an effect so we only
  // set the localStorage value if they explicitly change the default
  return [mode, setMode];
}
