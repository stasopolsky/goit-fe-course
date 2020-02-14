import refs from "./refs.js";

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme"
};

const lightTheme = e => {
  e.classList.remove(Theme.DARK);
  e.classList.add(Theme.LIGHT);
  localStorage.setItem("theme", Theme.LIGHT);
};

const darkTheme = e => {
  e.classList.remove(Theme.LIGHT);
  e.classList.add(Theme.DARK);
  localStorage.setItem("theme", Theme.DARK);
};

const applyTheme = boolean => {
  boolean ? darkTheme(refs.body) : lightTheme(refs.body);
};

if (refs.loc.theme === Theme.DARK) {
  darkTheme(refs.body);
  refs.themeSwitch.checked = true;
}

refs.body.addEventListener("click", e => {
  if (e.target.nodeName !== "INPUT") {
    return;
  }
  applyTheme(e.target.checked);
});
