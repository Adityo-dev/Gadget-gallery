"use client";
import { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    // Drift লাইভ চ্যাট স্ক্রিপ্ট যোগ করা
    (function () {
      var t = (window.driftt = window.drift = window.driftt || []);
      if (!t.init) {
        if (t.invoked)
          return void (
            window.console &&
            console.error &&
            console.error("Drift snippet included twice.")
          );
        t.invoked = !0;
        t.methods = [
          "identify",
          "config",
          "track",
          "reset",
          "debug",
          "show",
          "ping",
          "page",
          "hide",
          "off",
          "on",
        ];
        t.factory = function (e) {
          return function () {
            var n = Array.prototype.slice.call(arguments);
            n.unshift(e);
            t.push(n);
            return t;
          };
        };
        t.methods.forEach(function (e) {
          t[e] = t.factory(e);
        });
        t.load = function (t) {
          var e = 3e5,
            n = Math.ceil(new Date() / e) * e,
            o = document.createElement("script");
          o.type = "text/javascript";
          o.async = !0;
          o.crossOrigin = "anonymous";
          o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
          var i = document.getElementsByTagName("script")[0];
          i.parentNode.insertBefore(o, i);
        };
      }
    })();

    drift.SNIPPET_VERSION = "0.3.1";
    drift.load("zfcmhv2ka9k6"); // আপনার Drift আইডি এখানে যুক্ত করুন
  }, []);

  return null; // কোন JSX রেন্ডার করার প্রয়োজন নেই
};

export default LiveChat;
