var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/extension/registry.ts
var registry_exports = {};
__export(registry_exports, {
  stationExtensionInfo: () => stationExtensionInfo
});
module.exports = __toCommonJS(registry_exports);

// src/constant.ts
var ICON = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDMyIDMyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwtMC4wMjE3NzI5LDAuMDc4NjA4NikiPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMzA5MjI4LDAsMCwwLjMwOTIyOCwwLjM0NzQzNCwxLjc0NTQ3KSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik04LjQ5NCwyMS43NTRDMTEuODg0LDE1LjEwNCAxOC45OCwxMS44MTIgMjQuNDg0LDE0LjM1N0wyNC43NjcsMTQuNDk0TDM3LjI1NCwyMC44OTRDNDAuMDE2LDIwLjEwMyA0Mi45NjksMjAuMzA1IDQ1LjU5OCwyMS40NjRMNDUuOTg5LDIxLjY0NEw1NC41MDcsMjUuOTI4TDc5LjYyNSwzOC42NTZDODQuMTEzLDQwLjk0NyA4Ni41MDMsNDUuODU2IDg2LjQ2OCw1MS4zMzNMODYuNDYyLDUxLjY1NUw5MC45NSw1My44MTZMODMuMjA2LDY5LjA5N0w3OC42Nyw2Ni44Qzc0LjM5Nyw3MC4yMSA2OS4wMTgsNzEuMjg1IDY0LjQ5LDY5LjE1NUw2NC4xNTEsNjguOTg5TDMwLjY2LDUyLjA1QzMwLjYxNCw1Mi4wNyAzMC41Niw1Mi4wNyAzMC41MTQsNTIuMDVDMjcuOTU0LDUwLjc1MiAyNS45NDcsNDguNTc0IDI0Ljg2MSw0NS45MTdMMjQuNzE5LDQ1LjU1MkwxMi40MzksMzkuMjczQzEyLjM5OSwzOS4yMjUgMTIuMzQ1LDM5LjE4OSAxMi4yODUsMzkuMTcxTDEyLjI0NSwzOS4xNjRDNi43MDMsMzYuMzY5IDUuMDQ1LDI4LjUxNyA4LjQ5NSwyMS43NTRMOC40OTQsMjEuNzU0WiIgc3R5bGU9ImZpbGw6cmdiKDQwLDY5LDE3NCk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMzA5MjI4LDAsMCwwLjMwOTIyOCwwLjM0NzQzNCwxLjc0NTQ3KSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNC41NDQsNjUuNDU2TDM1Ljk0Nyw3Ni44ODlMMjIuMzIzLDkwLjgxNUMyMi4xNDYsOTEuMDMzIDIxLjg0Myw5MS4xMDggMjEuNTg1LDkwLjk5N0wyMS41MjUsOTAuOTk3TDEuMDY1LDgwLjUzQzAuODM0LDgwLjQwNiAwLjY4OSw4MC4xNjQgMC42ODksNzkuOTAxQzAuNjg5LDc5Ljc0NSAwLjc0LDc5LjU5MiAwLjgzNSw3OS40NjhMMTQuNTQ0LDY1LjQ1NUwxNC41NDQsNjUuNDU2Wk0zMi40OTcsNDcuNTc2TDMyLjU5Niw0Ny42MDlMNTMuMDksNTguMDc1QzUzLjQwNiw1OC4yMjIgNTMuNTU2LDU4LjU5MyA1My40Myw1OC45MThMNTMuMzgsNTkuMDE4QzUzLjM2MSw1OS4wNjggNTMuMzMyLDU5LjExMyA1My4yOTYsNTkuMTUyTDUzLjI5Niw1OS4yMjVMMzcuNDQ2LDc1LjQzN0wxNS45ODIsNjMuOTkyTDMxLjg1Nyw0Ny43OUMzMi4wMSw0Ny42MDEgMzIuMjYsNDcuNTE3IDMyLjQ5Nyw0Ny41NzVMMzIuNDk3LDQ3LjU3NlpNOTEuMDQ3LDUzLjk4NkM5My43ODEsNTUuMzY1IDk0LjIwNCw1OS44OSA5Mi4wNjMsNjQuMTI1Qzg5LjkyMSw2OC4zNTkgODYuMDEzLDcwLjY3IDgzLjI3OSw2OS4yOTFDODAuNTQ0LDY3LjkxMSA4MC4xMjEsNjMuMzg3IDgyLjI2Miw1OS4xNTFDODQuNDA0LDU0LjkyOSA4OC4zMTIsNTIuNjA2IDkxLjA0Niw1My45ODZMOTEuMDQ3LDUzLjk4NlpNMzMuNTUsMjAuMDg0QzM0Ljc5NSwyMC4wNzEgMzYuMDMsMjAuMzA5IDM3LjE4LDIwLjc4NkMzNi4xOCwyMS4wNjYgMzUuMjEyLDIxLjQ0NyAzNC4yODgsMjEuOTIzTDMzLjk3NCwyMi4wOEwzMy41MjYsMjIuMDhDMjkuNTgyLDIyLjA4IDI1LjQ5MiwyNS4wMzIgMjMuMzAyLDI5LjI2N0MyMC45NTUsMzMuOTEzIDIxLjI0NiwzOS4wNTUgMjMuNzk4LDQyLjEwNEMyMy45ODIsNDMuMjYxIDI0LjI4Miw0NC4zOTYgMjQuNjk0LDQ1LjQ5MkMxOS42NzMsNDIuNDQzIDE4LjI4MSwzNC45NTQgMjEuNjMzLDI4LjM3MkMyNC4xNzMsMjMuMjMgMjguOTY1LDIwLjA4NCAzMy41NSwyMC4wODRaTTYzLjIwNSwxNi45ODZMODQuNjIyLDI4LjQyTDc2LjI4NSwzNi45NjJMNTQuNTA3LDI1LjkyOEw2My4yMDcsMTYuOTg2TDYzLjIwNSwxNi45ODZaTTc5LjU3NCwwLjY1Nkw3OS42NzQsMC42ODlMMTAwLjI3OCwxMS4xNTVDMTAwLjYyOCwxMS4zMjIgMTAwLjc4NCwxMS43NDMgMTAwLjYyOCwxMi4wOThDMTAwLjYxLDEyLjE0MSAxMDAuNTg1LDEyLjE4MSAxMDAuNTU2LDEyLjIxN0w4Ni4xMSwyNi45Mkw2NC42NTgsMTUuNDk4TDc4LjkzNSwwLjg3Qzc5LjA2NiwwLjcwOSA3OS4yNjgsMC42MjMgNzkuNDc0LDAuNjRMNzkuNTc0LDAuNjU2WiIgc3R5bGU9ImZpbGw6cmdiKDg0LDE0NywyNDcpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==";

// src/extension/registry.ts
var stationExtensionInfo = {
  name: "station-extension",
  prettyName: "Station",
  logo: ICON,
  mode: "extension",
  mobileDisabled: true,
  connectEventNamesOnWindow: [],
  rejectMessage: {
    source: "Request rejected"
  },
  downloads: [
    {
      device: "desktop",
      browser: "chrome",
      link: "https://chrome.google.com/webstore/detail/station-wallet/aiifbnbfobpmeekipheeijimdpnlpgpp"
    },
    {
      device: "desktop",
      browser: "firefox",
      link: "https://addons.mozilla.org/en-US/firefox/addon/terra-station-wallet/"
    }
  ]
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  stationExtensionInfo
});
//# sourceMappingURL=registry.js.map