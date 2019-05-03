// import Dector from "tiny-dector";
import Detector from "../src";

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("#app");
  const detector = new Detector();
  const detector_str = JSON.stringify(detector);
  console.log(container);
  if (container) container.innerHTML = detector_str;
});
