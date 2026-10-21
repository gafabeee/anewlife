(function () {
  "use strict";

  var HASH = "2c4b18e5d929d9ffdcd5761f13c7f36255cf957640c12e747bfd552013a9a215";
  var STORAGE_KEY = "anewlife_cheats_v1";
  var VERSION_PATH = "anewlife/cheats/v2";
  var _token = null;

  function sha256(text) {
    var enc = new TextEncoder().encode(text);
    return crypto.subtle.digest("SHA-256", enc).then(function (buf) {
      return Array.from(new Uint8Array(buf))
        .map(function (b) { return b.toString(16).padStart(2, "0"); })
        .join("");
    });
  }

  function readFlags() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  }

  function writeFlags(obj) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); }
    catch (e) { /* quota or private mode */ }
  }

  window.CheatGate = {
    init: function () {
      return sha256(HASH + "|" + VERSION_PATH)
        .then(function (h) { _token = h; })
        .catch(function () { _token = null; });
    },

    unlocked: function () {
      if (!_token) return false;
      return readFlags().token === _token;
    },

    flags: readFlags,
    setFlags: writeFlags,

    on: function (name) {
      return this.unlocked() && !!readFlags()[name];
    },

    tryCode: function (code) {
      return sha256(String(code || "").trim()).then(function (h) {
        if (h !== HASH || !_token) return false;
        writeFlags({ token: _token, unlockedAt: Date.now() });
        return true;
      }).catch(function () { return false; });
    },

    lock: function () {
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    }
  };
})();
