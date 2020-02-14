"use strict";

import menu from "../menu.json";
import menuItem from "../template/menuItem.hbs";
import refs from "./refs.js";

const menuList = menu.reduce((acc, e) => {
  return (acc += menuItem(e));
}, "");
refs.menu.insertAdjacentHTML("beforeend", `${menuList}`);
