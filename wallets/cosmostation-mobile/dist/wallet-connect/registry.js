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

// src/wallet-connect/registry.ts
var registry_exports = {};
__export(registry_exports, {
  cosmostationMobileInfo: () => cosmostationMobileInfo
});
module.exports = __toCommonJS(registry_exports);

// src/constant.ts
var ICON = "data:image/png;base64,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";

// src/wallet-connect/registry.ts
var cosmostationMobileInfo = {
  name: "cosmostation-mobile",
  prettyName: "Cosmostation Mobile",
  logo: ICON,
  mode: "wallet-connect",
  downloads: [
    {
      device: "mobile",
      os: "android",
      link: "https://play.google.com/store/apps/details?id=wannabit.io.cosmostaion"
    },
    {
      device: "mobile",
      os: "ios",
      link: "https://apps.apple.com/kr/app/cosmostation/id1459830339"
    },
    {
      link: "https://cosmostation.io/wallet/#extension"
    }
  ],
  mobileDisabled: false,
  walletconnect: {
    name: "Cosmostation",
    projectId: "feb6ff1fb426db18110f5a80c7adbde846d0a7e96b2bc53af4b73aaf32552bea",
    formatNativeUrl: (appUrl, wcUri, name) => {
      const plainAppUrl = appUrl.replaceAll("/", "").replaceAll(":", "");
      return `${plainAppUrl}://wc?${wcUri}`;
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cosmostationMobileInfo
});
//# sourceMappingURL=registry.js.map