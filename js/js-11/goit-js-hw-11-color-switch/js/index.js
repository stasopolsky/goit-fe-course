"use strict";
import colors from "./colors.js";

const refs = {
  body: document.querySelector("body"),
  theme: document.querySelector("#theme")
};

const randomBg = {
  randomThemeIsActive: false,
  colors: colors,
  addBgColor() {
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const color = colors => {
      const min = 0;
      const max = colors.length - 1;
      let index = randomIntegerFromInterval(min, max);
      return colors[index];
    };
    refs.body.bgColor = color(this.colors);
  },
  start() {
    if (this.randomThemeIsActive === true) {
      return;
    }
    this.randomThemeIsActive = true;
    this.timerId = setInterval(() => this.addBgColor(), 1000);
    console.log("start");
  },

  stop() {
    if (this.randomThemeIsActive === false) {
      return;
    }
    clearInterval(this.timerId);
    this.randomThemeIsActive = false;
  }
};

refs.theme.addEventListener("click", event => {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  event.target.dataset.action === "start" ? randomBg.start() : randomBg.stop();
});
