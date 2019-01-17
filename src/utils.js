// user agent
export const ua = window.navigator.userAgent;

// browserInfo
export const browserInfo = {
  engine: ["WebKit", "Trident", "Gecko", "Presto"],
  browser: [
    "Chrome",
    "Safari",
    "Edge",
    "IE",
    "Firefox",
    "Firefox Focus",
    "Chromium",
    "Opera",
    "Vivaldi",
    "Yandex",
    "Kindle",
    "360",
    "UC",
    "QQBrowser",
    "QQ",
    "Baidu",
    "Maxthon",
    "Sogou",
    "LBBROWSER",
    "XiaoMi",
    "Wechat",
    "Taobao",
    "Alipay",
    "Weibo"
  ],
  os: ["Windows", "Mac OS", "Android", "iOS", "Windows Phone"],
  device: ["Mobile", "Tablet"]
};

// browser dect
export const browserDect = {
  Trident: ua.indexOf("Trident") > -1 || ua.indexOf("NET CLR") > -1,
  Presto: ua.indexOf("Presto") > -1,
  WebKit: ua.indexOf("AppleWebKit") > -1,
  Gecko: ua.indexOf("Gecko/") > -1,
  Safari:
    ua.match(/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i) ||
    ua.match(/version\/([\w\.]+).+?(mobile\s?safari|safari)/i),
  Chrome:
    ua.indexOf("Chrome") > -1 ||
    ua.match(/((?:android.+)crmo|crios)\/([\w\.]+)/i),
  IE:
    ua.match(/(?:ms|\()(ie)\s([\w\.]+)/i) ||
    ua.match(/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i),
  Edge: ua.match(/(edge)\/((\d+)?[\w\.]+)/i),
  Firefox: ua.indexOf("Firefox") > -1 || ua.match(/fxios\/([\w\.-]+)/i),
  "Firefox Focus": ua.indexOf("Focus") > -1,
  Chromium: ua.indexOf("Chromium") > -1,
  Opera: ua.indexOf("Opera") > -1 || ua.match(/\s(opr)\/([\w\.]+)/i),
  Vivaldi: ua.indexOf("Vivaldi") > -1,
  Yandex: ua.match(/(yabrowser)\/([\w\.]+)/i),
  Kindle: ua.match(/(kindle)\/([\w\.]+)/i),
  360: ua.indexOf("360EE") > -1 || ua.indexOf("360SE") > -1,
  UC:
    ua.match(/(uc\s?browser)[\/\s]?([\w\.]+)/i) ||
    ua.match(/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i) ||
    ua.match(/(ucbrowser)\/([\w\.]+)/i) ||
    ua.match(/juc.+(ucweb)[\/\s]?([\w\.]+)/i),
  QQBrowser: ua.match(/m?(qqbrowser)[\/\s]?([\w\.]+)/i),
  Baidu: ua.indexOf("Baidu") > -1 || ua.indexOf("BIDUBrowser") > -1,
  Maxthon: ua.indexOf("Maxthon") > -1,
  Sogou: ua.indexOf("MetaSr") > -1 || ua.indexOf("Sogou") > -1,
  LBBROWSER: ua.indexOf("LBBROWSER") > -1,
  XiaoMi: ua.match(/xiaomi\/miuibrowser\/([\w\.]+)/i),
  Wechat: ua.match(/(micromessenger)\/([\w\.]+)/i),
  Taobao: ua.indexOf("AliApp(TB") > -1,
  Alipay: ua.indexOf("AliApp(AP") > -1,
  Weibo: ua.match(/Weibo\s*\((.*?)\)/i),
  Chaohua: ua.indexOf("Chaohua") > -1,
  QQ: ua.indexOf("QQ/") > -1,
  Windows:
    ua.match(/microsoft\s(windows)\s(vista|xp)/i) ||
    ua.match(/(windows)\snt\s6\.2;\s(arm)/i),
  "Mac OS":
    ua.match(/(mac\sos\sx)\s?([\w\s\.]+\w)*/i) ||
    ua.match(/(macintosh|mac(?=_powerpc)\s)/i),
  Android: ua.indexOf("Android") > -1,
  "Windows Phone": ua.indexOf("IEMobile") > -1,
  iOS: ua.match(/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i),
  Mobile:
    ua.indexOf("Mobile") > -1 ||
    ua.indexOf("iPhone") > -1 ||
    ua.indexOf("480") > -1,
  Tablet:
    ua.indexOf("Tablet") > -1 ||
    ua.indexOf("Pad") > -1 ||
    ua.indexOf("Nexus 7") > -1
};

// platform dect
export const platformDect = {
  Windows: function() {
    var t = ua.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
    return (
      {
        6.4: "10",
        6.3: "8.1",
        6.2: "8",
        6.1: "7",
        "6.0": "Vista",
        5.2: "XP",
        5.1: "XP",
        "5.0": "2000"
      }[t] || t
    );
  },
  "Mac OS": function() {
    return ua.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, ".");
  },
  Android: function() {
    return ua.replace(/^.*Android ([\d.]+);.*$/, "$1");
  },
  iOS: function() {
    return ua.replace(/^.*OS ([\d_]+) likua.*$/, "$1").replace(/_/g, ".");
  },
  "Windows Phone": function() {
    return ua.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2");
  }
};

export const browserNames = {
  Safari: function() {
    return ua.replace(/^.*Version\/([\d.]+).*$/, "$1");
  },
  Chrome: function() {
    return ua
      .replace(/^.*Chrome\/([\d.]+).*$/, "$1")
      .replace(/^.*CriOS\/([\d.]+).*$/, "$1");
  },
  IE: function() {
    return ua
      .replace(/^.*MSIE ([\d.]+).*$/, "$1")
      .replace(/^.*rv:([\d.]+).*$/, "$1");
  },
  Edge: function() {
    return ua.replace(/^.*Edge\/([\d.]+).*$/, "$1");
  },
  Firefox: function() {
    return ua
      .replace(/^.*Firefox\/([\d.]+).*$/, "$1")
      .replace(/^.*FxiOS\/([\d.]+).*$/, "$1");
  },
  "Firefox Focus": function() {
    return ua.replace(/^.*Focus\/([\d.]+).*$/, "$1");
  },
  Chromium: function() {
    return ua.replace(/^.*Chromium\/([\d.]+).*$/, "$1");
  },
  Opera: function() {
    return ua
      .replace(/^.*Opera\/([\d.]+).*$/, "$1")
      .replace(/^.*OPR\/([\d.]+).*$/, "$1");
  },
  Vivaldi: function() {
    return ua.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1");
  },
  Yandex: function() {
    return ua.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1");
  },
  Kindle: function() {
    return ua.replace(/^.*Version\/([\d.]+).*$/, "$1");
  },
  Maxthon: function() {
    return ua.replace(/^.*Maxthon\/([\d.]+).*$/, "$1");
  },
  QQBrowser: function() {
    return ua.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1");
  },
  Baidu: function() {
    return ua.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1");
  },
  UC: function() {
    return ua
      .replace(/^.*UC?Browser\/([\d.]+).*$/, "$1")
      .replace(/juc.+(ucweb)[\/\s]?([\w\.]+)/i, "$1");
  },
  Sogou: function() {
    return ua
      .replace(/^.*SE ([\d.X]+).*$/, "$1")
      .replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1");
  },
  XiaoMi: function() {
    return ua.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1");
  },
  Wechat: function() {
    return ua.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1");
  },
  Taobao: function() {
    return ua.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1");
  },
  Alipay: function() {
    return ua.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1");
  },
  Weibo: function() {
    var t = ua.match(/__weibo__(\d+?.\d+?.\d+)(_*\w*)*__(.+)?__/);
    return !t || !t.length || t.length < 2 ? "" : t[1];
  },
  QQ: function() {
    return ua.replace(/^.*QQ\/([\d.]+).*$/, "$1");
  }
};
