export default {
  body: document.querySelector("body"),
  menu: document.querySelector(".menu"),
  themeSwitch: document.querySelector(".theme-switch"),
  loc: {
    theme: localStorage.getItem("theme")
  }
};
