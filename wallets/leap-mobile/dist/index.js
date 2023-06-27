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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ChainLeapMobile: () => ChainLeapMobile,
  LeapMobileInfo: () => LeapMobileInfo,
  LeapMobileWallet: () => LeapMobileWallet,
  wallets: () => wallets
});
module.exports = __toCommonJS(src_exports);

// src/wallet-connect/chain-wallet.ts
var import_walletconnect2 = require("@cosmos-kit/walletconnect");

// src/wallet-connect/client.ts
var import_walletconnect = require("@cosmos-kit/walletconnect");
var LeapClient = class extends import_walletconnect.WCClient {
  constructor(walletInfo) {
    super(walletInfo);
  }
};

// src/wallet-connect/chain-wallet.ts
var ChainLeapMobile = class extends import_walletconnect2.ChainWC {
  constructor(walletInfo, chainInfo) {
    super(walletInfo, chainInfo, LeapClient);
  }
};

// src/wallet-connect/main-wallet.ts
var import_walletconnect3 = require("@cosmos-kit/walletconnect");
var LeapMobileWallet = class extends import_walletconnect3.WCWallet {
  constructor(walletInfo, preferredEndpoints) {
    super(walletInfo, ChainLeapMobile, LeapClient);
    this.preferredEndpoints = preferredEndpoints;
  }
};

// src/constant.ts
var ICON = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODA1IiBoZWlnaHQ9IjgwNSIgdmlld0JveD0iMCAwIDgwNSA4MDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yMzY0XzMzNzU1KSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8yMzY0XzMzNzU1KSI+CjxwYXRoIGQ9Ik03MTIuMzEgMzczLjU3NUM3MTIuMzEgNDg3LjAzOSA1NzcuMzU1IDUzMy4xNDcgNDA5Ljc5MSA1MzMuMTQ3QzI0Mi4yMjYgNTMzLjE0NyAxMDUuMzA3IDQ4Ny4wMzkgMTA1LjMwNyAzNzMuNTc1QzEwNS4zMDcgMjYwLjExMSAyNDEuMjQ0IDE2OC4yOTcgNDA4LjgwOCAxNjguMjk3QzU3Ni4zNzMgMTY4LjI5NyA3MTIuMzEgMjYwLjMxMSA3MTIuMzEgMzczLjU3NVoiIGZpbGw9IiM0QkFGNzQiLz4KPHBhdGggZD0iTTY4MS41MTMgMTI2LjU0NEM2ODEuNTEzIDY2LjgwNDkgNjMzLjk3NSAxOC4yOTE5IDU3NS40MzUgMTguMjkxOUM1NDIuNDMzIDE4LjI5MTkgNTEyLjk2NyAzMy43Mjc5IDQ5My41MTkgNTcuNzgzOUM0NjcgNTEuNzY5OSA0MzguNzEyIDQ4LjM2MTkgNDA5LjQ0MiA0OC4zNjE5QzM4MC4xNzMgNDguMzYxOSAzNTEuODg1IDUxLjU2OTQgMzI1LjM2NSA1Ny43ODM5QzMwNS43MjEgMzMuNzI3OSAyNzYuMjU1IDE4LjI5MTkgMjQzLjQ0OSAxOC4yOTE5QzE4NC45MSAxOC4yOTE5IDEzNy4zNzEgNjYuODA0OSAxMzcuMzcxIDEyNi41NDRDMTM3LjM3MSAxNDYuMTkgMTQyLjQ3OSAxNjQuNDMyIDE1MS4zMTggMTgwLjI2OUMxNDIuODcxIDE5OC43MTIgMTM4LjM1MyAyMTguMzU4IDEzOC4zNTMgMjM4LjgwNUMxMzguMzUzIDM0NC4wNTEgMjU5Ljc1NCA0MjkuMjQ5IDQwOS40NDIgNDI5LjI0OUM1NTkuMTMxIDQyOS4yNDkgNjgwLjUzMSAzNDQuMDUxIDY4MC41MzEgMjM4LjgwNUM2ODAuNTMxIDIxOC4zNTggNjc2LjAxMyAxOTguNzEyIDY2Ny41NjYgMTgwLjI2OUM2NzYuNDA2IDE2NC40MzIgNjgxLjUxMyAxNDYuMTkgNjgxLjUxMyAxMjYuNTQ0WiIgZmlsbD0iIzMyREE2RCIvPgo8cGF0aCBkPSJNMjM0LjkgMTg2Ljc2NkMyNzAuNzAyIDE4Ni43NjYgMjk5LjcyNSAxNTcuMTQ4IDI5OS43MjUgMTIwLjYxMkMyOTkuNzI1IDg0LjA3NjMgMjcwLjcwMiA1NC40NTgxIDIzNC45IDU0LjQ1ODFDMTk5LjA5OCA1NC40NTgxIDE3MC4wNzQgODQuMDc2MyAxNzAuMDc0IDEyMC42MTJDMTcwLjA3NCAxNTcuMTQ4IDE5OS4wOTggMTg2Ljc2NiAyMzQuOSAxODYuNzY2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTU4MC43OTggMTg2Ljc2NkM2MTYuNiAxODYuNzY2IDY0NS42MjQgMTU3LjE0OCA2NDUuNjI0IDEyMC42MTJDNjQ1LjYyNCA4NC4wNzYzIDYxNi42IDU0LjQ1ODEgNTgwLjc5OCA1NC40NTgxQzU0NC45OTYgNTQuNDU4MSA1MTUuOTczIDg0LjA3NjMgNTE1Ljk3MyAxMjAuNjEyQzUxNS45NzMgMTU3LjE0OCA1NDQuOTk2IDE4Ni43NjYgNTgwLjc5OCAxODYuNzY2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIwMC4yODggNTI1LjM1MUMyMTQuMjM1IDUyNS4zNTEgMjI1LjIzNiA1MTIuOTIyIDIyMy42NjQgNDk4Ljg5QzIxNy45NjcgNDQ5LjE3NCAxOTMuODA1IDM0MS41MjMgODcuNTMwMyAyNzYuNzcyQy01My45MDc0IDE5MC41NzEgNTguMDY0MSA0ODcuMjYyIDU4LjA2NDEgNDg3LjI2MkwyOC43OTQzIDUwNC41MDNDMTguOTcyMyA1MTAuMzE2IDIzLjA5NzUgNTI1LjM1MSAzNC4yOTQ3IDUyNS4zNTFIMjAwLjI4OFoiIGZpbGw9IiMzMkRBNkQiLz4KPHBhdGggZD0iTTYyMi4zNDMgNTI1LjM1MUM2MDkuNzcxIDUyNS4zNTEgNTk5Ljk0OSA1MTIuOTIyIDYwMS4zMjQgNDk4Ljg5QzYwNi4yMzUgNDQ5LjM3NCA2MjguMjM2IDM0MS41MjMgNzI0LjEgMjc2Ljc3MkM4NTEuOTgzIDE5MC41NzEgNzUwLjgxNiA0ODcuMjYyIDc1MC44MTYgNDg3LjI2Mkw3NzcuMzM1IDUwNC41MDNDNzg2LjE3NSA1MTAuMzE2IDc4Mi40NDMgNTI1LjM1MSA3NzIuNDI0IDUyNS4zNTFINjIyLjM0M1oiIGZpbGw9IiMzMkRBNkQiLz4KPHBhdGggZD0iTTIzNS4wMTcgMTMyLjI4OEMyNDEuNTI2IDEzMi4yODggMjQ2LjgwMyAxMjYuOTAzIDI0Ni44MDMgMTIwLjI2QzI0Ni44MDMgMTEzLjYxNyAyNDEuNTI2IDEwOC4yMzIgMjM1LjAxNyAxMDguMjMyQzIyOC41MDcgMTA4LjIzMiAyMjMuMjMgMTEzLjYxNyAyMjMuMjMgMTIwLjI2QzIyMy4yMyAxMjYuOTAzIDIyOC41MDcgMTMyLjI4OCAyMzUuMDE3IDEzMi4yODhaIiBmaWxsPSIjMEQwRDBEIi8+CjxwYXRoIGQ9Ik01ODAuNTg5IDEzMi4yODhDNTg3LjA5OSAxMzIuMjg4IDU5Mi4zNzYgMTI2LjkwMyA1OTIuMzc2IDEyMC4yNkM1OTIuMzc2IDExMy42MTcgNTg3LjA5OSAxMDguMjMyIDU4MC41ODkgMTA4LjIzMkM1NzQuMDggMTA4LjIzMiA1NjguODAzIDExMy42MTcgNTY4LjgwMyAxMjAuMjZDNTY4LjgwMyAxMjYuOTAzIDU3NC4wOCAxMzIuMjg4IDU4MC41ODkgMTMyLjI4OFoiIGZpbGw9IiMwRDBEMEQiLz4KPC9nPgo8cmVjdCB5PSI1ODYiIHdpZHRoPSI4MDUiIGhlaWdodD0iMzEwIiBmaWxsPSIjQUM0QkZGIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjM2NF8zMzc1NSI+CjxyZWN0IHdpZHRoPSI4MDUiIGhlaWdodD0iODA1IiByeD0iMTQ0LjkiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDFfMjM2NF8zMzc1NSI+CjxyZWN0IHdpZHRoPSI3NzIuOCIgaGVpZ2h0PSI1MTUuMiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2IDE4KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";

// src/wallet-connect/registry.ts
var LeapMobileInfo = {
  name: "leap-cosmos-mobile",
  prettyName: "Leap Mobile",
  logo: ICON,
  mode: "wallet-connect",
  mobileDisabled: false,
  rejectMessage: {
    source: "Request rejected"
  },
  downloads: [
    {
      device: "mobile",
      os: "android",
      link: "https://play.google.com/store/apps/details?id=io.leapwallet.cosmos"
    },
    {
      device: "mobile",
      os: "ios",
      link: "https://apps.apple.com/in/app/leap-cosmos/id1642465549"
    },
    {
      link: "https://chrome.google.com/webstore/detail/leap-cosmos-wallet/fcfcfllfndlomdhbehjjcoimbgofdncg"
    }
  ],
  connectEventNamesOnWindow: ["leap_keystorechange"],
  walletconnect: {
    name: "Leap Cosmos Wallet",
    projectId: "3ed8cc046c6211a798dc5ec70f1302b43e07db9639fd287de44a9aa115a21ed6",
    encoding: "base64",
    mobile: {
      native: {
        ios: "leapcosmos:",
        android: "intent:"
      }
    },
    formatNativeUrl: (appUrl, wcUri, os, name) => {
      const plainAppUrl = appUrl.replaceAll("/", "").replaceAll(":", "");
      const encodedWcUrl = encodeURIComponent(wcUri);
      switch (os) {
        case "ios":
          return `${plainAppUrl}://wcV2?${encodedWcUrl}`;
        case "android":
          return `${plainAppUrl}://wcV2?${encodedWcUrl}#Intent;package=io.leapwallet.cosmos;scheme=leapwallet;end;`;
        default:
          return `${plainAppUrl}://wcV2?${encodedWcUrl}`;
      }
    }
  }
};

// src/leap.ts
var leapMobile = new LeapMobileWallet(LeapMobileInfo);
var wallets = [leapMobile];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChainLeapMobile,
  LeapMobileInfo,
  LeapMobileWallet,
  wallets
});
//# sourceMappingURL=index.js.map