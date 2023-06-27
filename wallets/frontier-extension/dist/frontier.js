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

// src/frontier.ts
var frontier_exports = {};
__export(frontier_exports, {
  wallets: () => wallets
});
module.exports = __toCommonJS(frontier_exports);

// src/extension/chain-wallet.ts
var import_core = require("@cosmos-kit/core");
var ChainFrontierExtension = class extends import_core.ChainWalletBase {
  constructor(walletInfo, chainInfo) {
    super(walletInfo, chainInfo);
  }
};

// src/extension/main-wallet.ts
var import_core3 = require("@cosmos-kit/core");

// src/extension/client.ts
var FrontierClient = class {
  constructor(client) {
    this.client = client;
  }
  async enable(chainIds) {
    await this.client.enable(chainIds);
  }
  async disconnect() {
    await this.client.disconnect();
  }
  async getSimpleAccount(chainId) {
    const { address, username } = await this.getAccount(chainId);
    return {
      namespace: "cosmos",
      chainId,
      address,
      username
    };
  }
  async getAccount(chainId) {
    const key = await this.client.getKey(chainId);
    console.log("%cclient.ts line:25 key", "color: #007acc;", key);
    return {
      username: key.name,
      address: key.bech32Address,
      algo: key.algo,
      pubkey: key.pubKey
    };
  }
  getOfflineSigner(chainId, preferredSignType) {
    switch (preferredSignType) {
      case "amino":
        return this.getOfflineSignerAmino(chainId);
      case "direct":
        return this.getOfflineSignerDirect(chainId);
      default:
        return this.getOfflineSignerAmino(chainId);
    }
  }
  getOfflineSignerAmino(chainId) {
    return this.client.getOfflineSignerOnlyAmino(chainId);
  }
  getOfflineSignerDirect(chainId) {
    return this.client.getOfflineSigner(chainId);
  }
  async signAmino(chainId, signer, signDoc, signOptions) {
    return await this.client.signAmino(chainId, signer, signDoc, signOptions);
  }
  async signDirect(chainId, signer, signDoc, signOptions) {
    return await this.client.signDirect(chainId, signer, signDoc, signOptions);
  }
  async signArbitrary(chainId, signer, data) {
    return await this.client.signArbitrary(chainId, signer, data);
  }
  async sendTx(chainId, tx, mode) {
    return await this.client.sendTx(chainId, tx, mode);
  }
};

// src/extension/utils.ts
var import_core2 = require("@cosmos-kit/core");
var getFrontierFromExtension = async () => {
  if (typeof window === "undefined") {
    return void 0;
  }
  const frontier = window.frontier?.cosmos;
  if (frontier) {
    return frontier;
  }
  if (document.readyState === "complete") {
    if (frontier) {
      return frontier;
    } else {
      throw import_core2.ClientNotExistError;
    }
  }
  return new Promise((resolve, reject) => {
    const documentStateChange = (event) => {
      if (event.target && event.target.readyState === "complete") {
        if (frontier) {
          resolve(frontier);
        } else {
          reject(import_core2.ClientNotExistError.message);
        }
        document.removeEventListener("readystatechange", documentStateChange);
      }
    };
    document.addEventListener("readystatechange", documentStateChange);
  });
};

// src/extension/main-wallet.ts
var FrontierExtensionWallet = class extends import_core3.MainWalletBase {
  constructor(walletInfo) {
    super(walletInfo, ChainFrontierExtension);
  }
  async initClient() {
    this.initingClient();
    try {
      const frontier = await getFrontierFromExtension();
      this.initClientDone(frontier ? new FrontierClient(frontier) : void 0);
    } catch (error) {
      this.logger?.error(error);
      this.initClientError(error);
    }
  }
};

// src/constant.ts
var ICON = "data:image/png;base64,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";

// src/extension/registry.ts
var frontierExtensionInfo = {
  name: "frontier-extension",
  prettyName: "Frontier",
  logo: ICON,
  mode: "extension",
  mobileDisabled: true,
  rejectMessage: {
    source: "Request rejected"
  },
  downloads: [
    {
      device: "desktop",
      browser: "chrome",
      link: "https://chrome.google.com/webstore/detail/frontier-wallet/kppfdiipphfccemcignhifpjkapfbihd"
    },
    {
      link: "https://chrome.google.com/webstore/detail/frontier-wallet/kppfdiipphfccemcignhifpjkapfbihd"
    }
  ]
};

// src/frontier.ts
var frontierExtension = new FrontierExtensionWallet(frontierExtensionInfo);
var wallets = [frontierExtension];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  wallets
});
//# sourceMappingURL=frontier.js.map