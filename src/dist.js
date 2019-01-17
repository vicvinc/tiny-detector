function MakeDector() {
  const t = {};

  const e = window.navigator.userAgent;
  const n = {
    Trident: e.indexOf("Trident") > -1 || e.indexOf("NET CLR") > -1,
    Presto: e.indexOf("Presto") > -1,
    WebKit: e.indexOf("AppleWebKit") > -1,
    Gecko: e.indexOf("Gecko/") > -1,
    Safari:
      e.match(/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i) ||
      e.match(/version\/([\w\.]+).+?(mobile\s?safari|safari)/i),
    Chrome:
      e.indexOf("Chrome") > -1 ||
      e.match(/((?:android.+)crmo|crios)\/([\w\.]+)/i),
    IE:
      e.match(/(?:ms|\()(ie)\s([\w\.]+)/i) ||
      e.match(/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i),
    Edge: e.match(/(edge)\/((\d+)?[\w\.]+)/i),
    Firefox: e.indexOf("Firefox") > -1 || e.match(/fxios\/([\w\.-]+)/i),
    "Firefox Focus": e.indexOf("Focus") > -1,
    Chromium: e.indexOf("Chromium") > -1,
    Opera: e.indexOf("Opera") > -1 || e.match(/\s(opr)\/([\w\.]+)/i),
    Vivaldi: e.indexOf("Vivaldi") > -1,
    Yandex: e.match(/(yabrowser)\/([\w\.]+)/i),
    Kindle: e.match(/(kindle)\/([\w\.]+)/i),
    360: e.indexOf("360EE") > -1 || e.indexOf("360SE") > -1,
    UC:
      e.match(/(uc\s?browser)[\/\s]?([\w\.]+)/i) ||
      e.match(/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i) ||
      e.match(/(ucbrowser)\/([\w\.]+)/i) ||
      e.match(/juc.+(ucweb)[\/\s]?([\w\.]+)/i),
    QQBrowser: e.match(/m?(qqbrowser)[\/\s]?([\w\.]+)/i),
    Baidu: e.indexOf("Baidu") > -1 || e.indexOf("BIDUBrowser") > -1,
    Maxthon: e.indexOf("Maxthon") > -1,
    Sogou: e.indexOf("MetaSr") > -1 || e.indexOf("Sogou") > -1,
    LBBROWSER: e.indexOf("LBBROWSER") > -1,
    XiaoMi: e.match(/xiaomi\/miuibrowser\/([\w\.]+)/i),
    Wechat: e.match(/(micromessenger)\/([\w\.]+)/i),
    Taobao: e.indexOf("AliApp(TB") > -1,
    Alipay: e.indexOf("AliApp(AP") > -1,
    Weibo: e.match(/Weibo\s*\((.*?)\)/i),
    Chaohua: e.indexOf("Chaohua") > -1,
    QQ: e.indexOf("QQ/") > -1,
    Windows:
      e.match(/microsoft\s(windows)\s(vista|xp)/i) ||
      e.match(/(windows)\snt\s6\.2;\s(arm)/i),
    "Mac OS":
      e.match(/(mac\sos\sx)\s?([\w\s\.]+\w)*/i) ||
      e.match(/(macintosh|mac(?=_powerpc)\s)/i),
    Android: e.indexOf("Android") > -1,
    "Windows Phone": e.indexOf("IEMobile") > -1,
    iOS: e.match(/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i),
    Mobile:
      e.indexOf("Mobile") > -1 ||
      e.indexOf("iPhone") > -1 ||
      e.indexOf("480") > -1,
    Tablet:
      e.indexOf("Tablet") > -1 ||
      e.indexOf("Pad") > -1 ||
      e.indexOf("Nexus 7") > -1
  };
  const o = {
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

  t.device = "PC";

  for (var i in o) {
    for (var a = 0; a < o[i].length; a += 1) {
      var r = o[i][a];
      if (r && n[r]) {
        t[i] = r;
      }
    }
  }

  const s = {
    Windows: function() {
      var t = e.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
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
      return e.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, ".");
    },
    Android: function() {
      return e.replace(/^.*Android ([\d.]+);.*$/, "$1");
    },
    iOS: function() {
      return e.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".");
    },
    "Windows Phone": function() {
      return e.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2");
    }
  };

  t.osVersion = "";
  s[t.os] &&
    ((t.osVersion = s[t.os]()), t.osVersion === e && (t.osVersion = ""));

  const u = {
    Safari: function() {
      return e.replace(/^.*Version\/([\d.]+).*$/, "$1");
    },
    Chrome: function() {
      return e
        .replace(/^.*Chrome\/([\d.]+).*$/, "$1")
        .replace(/^.*CriOS\/([\d.]+).*$/, "$1");
    },
    IE: function() {
      return e
        .replace(/^.*MSIE ([\d.]+).*$/, "$1")
        .replace(/^.*rv:([\d.]+).*$/, "$1");
    },
    Edge: function() {
      return e.replace(/^.*Edge\/([\d.]+).*$/, "$1");
    },
    Firefox: function() {
      return e
        .replace(/^.*Firefox\/([\d.]+).*$/, "$1")
        .replace(/^.*FxiOS\/([\d.]+).*$/, "$1");
    },
    "Firefox Focus": function() {
      return e.replace(/^.*Focus\/([\d.]+).*$/, "$1");
    },
    Chromium: function() {
      return e.replace(/^.*Chromium\/([\d.]+).*$/, "$1");
    },
    Opera: function() {
      return e
        .replace(/^.*Opera\/([\d.]+).*$/, "$1")
        .replace(/^.*OPR\/([\d.]+).*$/, "$1");
    },
    Vivaldi: function() {
      return e.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1");
    },
    Yandex: function() {
      return e.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1");
    },
    Kindle: function() {
      return e.replace(/^.*Version\/([\d.]+).*$/, "$1");
    },
    Maxthon: function() {
      return e.replace(/^.*Maxthon\/([\d.]+).*$/, "$1");
    },
    QQBrowser: function() {
      return e.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1");
    },
    Baidu: function() {
      return e.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1");
    },
    UC: function() {
      return e
        .replace(/^.*UC?Browser\/([\d.]+).*$/, "$1")
        .replace(/juc.+(ucweb)[\/\s]?([\w\.]+)/i, "$1");
    },
    Sogou: function() {
      return e
        .replace(/^.*SE ([\d.X]+).*$/, "$1")
        .replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1");
    },
    XiaoMi: function() {
      return e.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1");
    },
    Wechat: function() {
      return e.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1");
    },
    Taobao: function() {
      return e.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1");
    },
    Alipay: function() {
      return e.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1");
    },
    Weibo: function() {
      var t = e.match(/__weibo__(\d+?.\d+?.\d+)(_*\w*)*__(.+)?__/);
      return !t || !t.length || t.length < 2 ? "" : t[1];
    },
    QQ: function() {
      return e.replace(/^.*QQ\/([\d.]+).*$/, "$1");
    }
  };

  t.version = "";

  u[t.browser] &&
    ((t.version = u[t.browser]()), t.version === e && (t.version = ""));

  t.browser === "Edge"
    ? (t.engine = "EdgeHTML")
    : t.browser === "Chrome" && parseInt(t.version, 10) > 27
    ? (t.engine = "Blink")
    : t.browser === "Opera" && parseInt(t.version, 10) > 12
    ? (t.engine = "Blink")
    : t.browser === "Yandex" && (t.engine = "Blink");

  t.versionCompare = function(t, e) {
    for (
      var n = t.indexOf("_") > -1 ? t.split("_") : t.split("."),
        o = e.indexOf("_") > -1 ? e.split("_") : e.split("."),
        i = Math.max(n.length, o.length),
        a = 0;
      a < i;
      a += 1
    ) {
      const r = Number(n[a]) || 0;
      const s = Number(o[a]) || 0;
      if (r > s) return 1;
      if (s > r) return -1;
    }
    return 0;
  };
  return t;
}

const dector = MakeDector();

export default dector;
