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

// src/extension/main-wallet.ts
var main_wallet_exports = {};
__export(main_wallet_exports, {
  Web3AuthWallet: () => Web3AuthWallet
});
module.exports = __toCommonJS(main_wallet_exports);
var import_core2 = require("@cosmos-kit/core");

// src/extension/chain-wallet.ts
var import_core = require("@cosmos-kit/core");
var Web3AuthChainWallet = class extends import_core.ChainWalletBase {
  constructor(walletInfo, chainInfo) {
    super(walletInfo, chainInfo);
  }
};

// src/extension/client.ts
var import_proto_signing = require("@cosmjs/proto-signing");
var import_base = require("@web3auth/base");
var import_modal = require("@web3auth/modal");
var import_chain_registry = require("chain-registry");

// src/extension/signer.ts
var import_modules = require("@cosmjs/cosmwasm-stargate/build/modules");
var import_registry = require("@cosmjs/proto-signing/build/registry");
var import_stargate = require("@cosmjs/stargate");
var import_tx = require("cosmjs-types/cosmos/tx/v1beta1/tx");
var registry = new import_registry.Registry([...import_stargate.defaultRegistryTypes, ...import_modules.wasmTypes]);
var Web3AuthCustomSigner = class {
  constructor(client, chainId) {
    this.client = client;
    this.chainId = chainId;
  }
  async getSigner(chainId) {
    if (!this.client.signers[chainId]) {
      await this.client.connect(chainId);
    }
    return this.client.signers[chainId];
  }
  async getAccounts() {
    return (await this.getSigner(this.chainId)).getAccounts();
  }
  async signDirect(signerAddress, signDoc) {
    if (signDoc.chainId !== this.chainId) {
      throw new Error("Chain ID mismatch");
    }
    const signer = await this.getSigner(signDoc.chainId);
    const decodedMessages = import_tx.TxBody.decode(signDoc.bodyBytes).messages.map(
      (message) => ({
        "@type": message.typeUrl,
        ...registry.decode(message)
      })
    );
    return new Promise((resolve, reject) => {
      const modal = document.createElement("div");
      modal.id = "web3auth-modal";
      modal.style.position = "fixed";
      modal.style.top = "0";
      modal.style.left = "0";
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.zIndex = "999999";
      modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      modal.style.display = "flex";
      modal.style.justifyContent = "center";
      modal.style.alignItems = "center";
      document.body.appendChild(modal);
      const modalContent = document.createElement("div");
      modalContent.style.backgroundColor = "#fff";
      modalContent.style.padding = "1rem";
      modalContent.style.borderRadius = "0.5rem";
      modalContent.style.maxWidth = "50rem";
      modalContent.style.width = "100%";
      modalContent.style.maxHeight = "50rem";
      modalContent.style.overflow = "auto";
      modal.appendChild(modalContent);
      const modalTitle = document.createElement("h2");
      modalTitle.innerText = "Web3Auth";
      modalTitle.style.margin = "0";
      modalTitle.style.padding = "0";
      modalTitle.style.fontSize = "1.5rem";
      modalTitle.style.fontWeight = "bold";
      modalContent.appendChild(modalTitle);
      const modalDescription = document.createElement("p");
      modalDescription.innerText = "Sign transaction?";
      modalDescription.style.margin = "0";
      modalDescription.style.padding = "0";
      modalDescription.style.fontSize = "1rem";
      modalDescription.style.fontWeight = "normal";
      modalContent.appendChild(modalDescription);
      const modalJson = document.createElement("pre");
      modalJson.innerText = JSON.stringify(decodedMessages, null, 2);
      modalJson.style.margin = "0";
      modalJson.style.padding = "0";
      modalJson.style.fontSize = "1rem";
      modalJson.style.fontWeight = "normal";
      modalContent.appendChild(modalJson);
      const modalButtons = document.createElement("div");
      modalButtons.style.margin = "0";
      modalButtons.style.padding = "0";
      modalButtons.style.display = "flex";
      modalButtons.style.justifyContent = "flex-end";
      modalContent.appendChild(modalButtons);
      const modalCancelButton = document.createElement("button");
      modalCancelButton.innerText = "Cancel";
      modalCancelButton.style.margin = "0";
      modalCancelButton.style.padding = "0.5rem 1rem";
      modalCancelButton.style.fontSize = "1rem";
      modalCancelButton.style.fontWeight = "bold";
      modalCancelButton.style.backgroundColor = "#fff";
      modalCancelButton.style.border = "1px solid #000";
      modalCancelButton.style.borderRadius = "0.25rem";
      modalCancelButton.style.cursor = "pointer";
      modalCancelButton.onclick = () => {
        const modal2 = document.getElementById("web3auth-modal");
        if (modal2) {
          modal2.remove();
        }
        reject(new Error("Request rejected"));
      };
      modalButtons.appendChild(modalCancelButton);
      const modalConfirmButton = document.createElement("button");
      modalConfirmButton.innerText = "Confirm";
      modalConfirmButton.style.margin = "0 0 0 0.5rem";
      modalConfirmButton.style.padding = "0.5rem 1rem";
      modalConfirmButton.style.fontSize = "1rem";
      modalConfirmButton.style.fontWeight = "bold";
      modalConfirmButton.style.backgroundColor = "#000";
      modalConfirmButton.style.color = "#fff";
      modalConfirmButton.style.border = "1px solid #000";
      modalConfirmButton.style.borderRadius = "0.25rem";
      modalConfirmButton.style.cursor = "pointer";
      modalConfirmButton.onclick = () => {
        const modal2 = document.getElementById("web3auth-modal");
        if (modal2) {
          modal2.remove();
        }
        signer.signDirect(signerAddress, signDoc).then(resolve).catch(reject);
      };
      modalButtons.appendChild(modalConfirmButton);
    });
  }
};

// src/extension/client.ts
var Web3AuthClient = class {
  constructor() {
    this.modalInitComplete = false;
    // Map chainId to signer.
    this.signers = {};
    this.client = new import_modal.Web3Auth({
      // Get from developer dashboard.
      clientId: "randomlocalhost",
      chainConfig: {
        chainNamespace: import_base.CHAIN_NAMESPACES.OTHER
      }
    });
  }
  async getPrivateKey() {
    const privateKeyHex = await this.client.provider.request({
      method: "private_key"
    });
    if (typeof privateKeyHex !== "string") {
      throw new Error("Invalid private key");
    }
    return Uint8Array.from(Buffer.from(privateKeyHex, "hex"));
  }
  async connect(_chainIds) {
    const chainIds = [_chainIds].flat().filter((chainId) => !(chainId in this.signers));
    if (chainIds.length === 0) {
      return;
    }
    if (!this.modalInitComplete) {
      await this.client.initModal();
      this.modalInitComplete = true;
    }
    await this.client.connect();
    const privateKey = await this.getPrivateKey();
    const chainPrefixes = chainIds.map((chainId) => {
      const chain = import_chain_registry.chains.find(({ chain_id }) => chain_id === chainId);
      if (!chain) {
        throw new Error(`Chain ID ${chainId} not found`);
      }
      return chain.bech32_prefix;
    });
    await Promise.all(
      chainIds.map(async (chainId, index) => {
        this.signers[chainId] = await import_proto_signing.DirectSecp256k1Wallet.fromKey(
          privateKey,
          chainPrefixes[index]
        );
      })
    );
  }
  async disconnect() {
    if (this.client.status === "connected") {
      await this.client.logout();
    }
    this.signers = {};
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
    await this.connect(chainId);
    const signer = this.signers[chainId];
    if (!signer) {
      throw new Error("Signer not enabled");
    }
    const info = await this.client.getUserInfo();
    const account = (await signer.getAccounts())[0];
    return {
      username: info.name || info.email || account.address,
      ...account
    };
  }
  getOfflineSigner(chainId) {
    return this.getOfflineSignerDirect(chainId);
  }
  getOfflineSignerAmino() {
    throw new Error("Not implemented");
  }
  getOfflineSignerDirect(chainId) {
    return new Web3AuthCustomSigner(this, chainId);
  }
};

// src/extension/main-wallet.ts
var Web3AuthWallet = class extends import_core2.MainWalletBase {
  constructor(walletInfo) {
    super(walletInfo, Web3AuthChainWallet);
  }
  async initClient() {
    this.initingClient();
    try {
      this.initClientDone(new Web3AuthClient());
    } catch (error) {
      this.logger?.error(error);
      this.initClientError(error);
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Web3AuthWallet
});
//# sourceMappingURL=main-wallet.js.map