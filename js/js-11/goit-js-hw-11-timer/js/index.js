"use strict";

import { CountdownTimer } from "./timer.js";
import refs from "./refs.js";
const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("02 27, 2020 20:37:00")
});
timer.initTimer(refs.body);
