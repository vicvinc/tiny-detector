import {
  ua,
  browserInfo,
  platformDetector,
  browserDetector,
  browserNames
} from "./utils";

export default class Detector {
  constructor() {
    this.device = "PC";
    for (let item in browserInfo) {
      for (let i = 0; i < browserInfo[item].length; i++) {
        const value = browserInfo[item][i];
        if (value && browserDetector[value]) {
          this[item] = value;
        }
      }
    }

    // detect os version
    this.osVersion = "";
    platformDetector[this.os] &&
      ((this.osVersion = platformDetector[this.os]()),
      this.osVersion === ua && (this.osVersion = ""));

    // detect browser version
    this.version = "";
    browserNames[this.browser] &&
      ((this.version = browserNames[this.browser]()),
      this.version === ua && (this.version = ""));

    // detect browser engine
    this.browser === "Edge"
      ? (this.engine = "EdgeHTML")
      : this.browser === "Chrome" && parseInt(this.version, 10) > 27
      ? (this.engine = "Blink")
      : this.browser === "Opera" && parseInt(this.version, 10) > 12
      ? (this.engine = "Blink")
      : this.browser === "Yandex" && (this.engine = "Blink");
  }

  versionCompare(target, source) {
    const tvArr =
      target.indexOf("_") > -1 ? target.split("_") : target.split(".");

    const svArr =
      source.indexOf("_") > -1 ? source.split("_") : source.split(".");

    const len = Math.max(tvArr.length, svArr.length);

    for (let i = 0; i < len; i++) {
      const r = Number(tvArr[i]) || 0;
      const s = Number(svArr[i]) || 0;
      if (r > s) return 1;
      if (s > r) return -1;
    }
    return 0;
  }
}
